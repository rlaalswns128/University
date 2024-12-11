from pymongo import MongoClient
from utils.helpers import prepare_user_vector, prepare_product_vector
from utils.config import MONGODB_URI
from models.chatgpt_integration import generate_gpt_response
from .cache_service import cache_results
import numpy as np

client = MongoClient(MONGODB_URI)
db = client["health-supplements"]

def calculate_cosine_similarity(vec1, vec2):
    norm1 = np.linalg.norm(vec1)
    norm2 = np.linalg.norm(vec2)
    if norm1 == 0 or norm2 == 0:
        return 0
    return np.dot(vec1, vec2) / (norm1 * norm2)

def recommend_products(user_data):
    user_vector = prepare_user_vector(user_data)
    cached_recommendations = cache_results("recommendations", user_data)
    if cached_recommendations:
        return cached_recommendations

    products = db["supplements"].find()
    recommendations = []

    for product in products:
        product_vector = prepare_product_vector(product)
        similarity_score = calculate_cosine_similarity(user_vector, product_vector)
        if similarity_score > 0.3:  # Ignore products with very low similarity
            recommendations.append({
                "product": product,
                "similarity": similarity_score
            })

    recommendations.sort(key=lambda x: x["similarity"], reverse=True)
    top_recommendations = recommendations[:10]  # Limit to top 10 for efficiency
    cache_results("recommendations", user_data, top_recommendations)
    return top_recommendations

def get_final_recommendation(user_data, recommendations):
    reduced_data = [
        {
            "name": rec["product"]["item"]["ITEM_NAME"],
            "efficiency": rec["product"]["item"].get("EE_DOC_DATA_EXP", rec["product"]["item"].get("EE_DOC_DATA", "Unknown efficiency")),
            "main_ingredients": rec["product"]["item"].get("MAIN_INGR", "Unknown main ingredients"),
            "similarity": rec["similarity"]
        }
        for rec in recommendations[:5]
    ]

    prompt = f"""
    User Data: {user_data}
    Top 5 Recommendations:
    {", ".join([f"{d['name']} (Efficiency: {d['efficiency']}, Ingredients: {d['main_ingredients']}, Similarity: {d['similarity']:.2f})" for d in reduced_data])}
    Suggest the best product for the user and explain why.
    """
    gpt_response = generate_gpt_response(prompt)
    return gpt_response
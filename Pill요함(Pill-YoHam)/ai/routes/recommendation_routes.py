from flask import Blueprint, request, jsonify
from services.recommendation_service import recommend_products, get_final_recommendation

recommendation_blueprint = Blueprint('recommendation_routes', __name__)

@recommendation_blueprint.route('/api/recommend', methods=['POST'])
def recommend_products_endpoint():
    user_data = request.json
    recommendations = recommend_products(user_data)
    final_recommendation = get_final_recommendation(user_data, recommendations)
    return jsonify({
        "recommendations": recommendations,
        "final_recommendation": final_recommendation
    })
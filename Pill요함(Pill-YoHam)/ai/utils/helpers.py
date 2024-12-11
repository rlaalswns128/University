from models.embeddings import generate_embedding

def preprocess_user_data(user_data):
    health_status = ", ".join(user_data.get("health_condition", ["Unknown health status"]))
    requirements = ", ".join(user_data.get("goals", ["Unknown goals"]))
    allergies = ", ".join(user_data.get("allergies", ["Unknown allergies"]))
    return f"Health Conditions: {health_status}, Goals: {requirements}, Allergies: {allergies}"

def preprocess_product_data(product):
    efficiency = product["item"].get("EE_DOC_DATA_EXP", product["item"].get("EE_DOC_DATA", "Unknown efficiency"))
    main_ingredients = product["item"].get("MAIN_INGR", "Unknown main ingredients")
    additional_ingredients = product["item"].get("ADIT_INGR", "Unknown additional ingredients")
    classification = product["item"].get("CLASS_NO_NAME", "Unknown classification")
    return f"Efficiency: {efficiency}, Main Ingredients: {main_ingredients}, Additional Ingredients: {additional_ingredients}, Classification: {classification}"

def prepare_user_vector(user_data):
    preprocessed_text = preprocess_user_data(user_data)
    return generate_embedding(preprocessed_text)

def prepare_product_vector(product):
    preprocessed_text = preprocess_product_data(product)
    return generate_embedding(preprocessed_text)
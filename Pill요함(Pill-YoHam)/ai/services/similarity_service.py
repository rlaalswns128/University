# -*- coding: utf-8 -*-

import numpy as np

def calculate_cosine_similarity(vec1, vec2):
    """
    Calculates the cosine similarity between two vectors.
    """
    norm1 = np.linalg.norm(vec1)
    norm2 = np.linalg.norm(vec2)
    if norm1 == 0 or norm2 == 0:
        return 0
    return np.dot(vec1, vec2) / (norm1 * norm2)

def rank_products_by_similarity(user_vector, product_vectors):
    """
    Ranks products based on similarity scores.
    """
    ranked_products = []
    for product in product_vectors:
        product_vector = product['vector']
        similarity = calculate_cosine_similarity(user_vector, product_vector)
        ranked_products.append({"product": product, "similarity": similarity})

    # Sort by similarity in descending order
    ranked_products.sort(key=lambda x: x['similarity'], reverse=True)
    return ranked_products
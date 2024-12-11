import openai
from utils.config import EMBEDDING_API_KEY
from cache_service import generate_cache_key, get_from_cache, save_to_cache

openai.api_key = EMBEDDING_API_KEY

def generate_embedding(text):
    """
    Generates an embedding for a given text using OpenAI's API.
    """
    cache_key = generate_cache_key(text)
    cached_embedding = get_from_cache(cache_key)
    if cached_embedding:
        return cached_embedding

    response = openai.Embedding.create(
        input=text,
        model="text-embedding-ada-002"
    )
    embedding = response['data'][0]['embedding']
    save_to_cache(cache_key, embedding)
    return embedding
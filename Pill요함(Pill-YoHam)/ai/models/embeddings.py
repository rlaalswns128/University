import openai
from utils.config import EMBEDDING_API_KEY

openai.api_key = EMBEDDING_API_KEY

def generate_embedding(text):
    response = openai.Embedding.create(
        input=text,
        model="text-embedding-ada-002"
    )
    return response['data'][0]['embedding']
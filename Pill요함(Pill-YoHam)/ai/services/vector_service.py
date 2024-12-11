from pymongo import MongoClient
from langchain.vectorstores import FAISS
from langchain.embeddings import OpenAIEmbeddings
from utils.config import MONGODB_URI

client = MongoClient(MONGODB_URI)
db = client["health-supplements"]

# Initialize embeddings
embedding_model = OpenAIEmbeddings(model="text-embedding-ada-002")

def create_vector_store():
    # Fetch product data from MongoDB
    products = db["supplements"].find()
    
    # Prepare data for vectorization
    product_texts = [
        f"효능: {product['item'].get('EE_DOC_DATA', '효능 정보 없음')}, "
        f"주요 원료: {product['item'].get('MAIN_INGR', '주요 원료 정보 없음')}, "
        f"첨가 원료: {product['item'].get('ADIT_INGR', '첨가 원료 정보 없음')}, "
        f"분류: {product['item'].get('CLASS_NO_NAME', '분류 정보 없음')}"
        for product in products
    ]
    product_ids = [str(product["_id"]) for product in products]
    
    # Create FAISS vector store
    vector_store = FAISS.from_texts(product_texts, embedding_model)
    vector_store.save_local("faiss_product_store")
    return vector_store, product_ids

def load_vector_store():
    return FAISS.load_local("faiss_product_store", embedding_model)

def query_vector_store(user_query, top_k=5):
    vector_store = load_vector_store()
    results = vector_store.similarity_search(user_query, k=top_k)
    return results
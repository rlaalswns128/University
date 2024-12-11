import hashlib
import json
from pymongo import MongoClient
from utils.config import MONGODB_URI

client = MongoClient(MONGODB_URI)
cache_db = client["cache-db"]

def generate_cache_key(data):
    data_string = json.dumps(data, sort_keys=True)
    return hashlib.sha256(data_string.encode()).hexdigest()

def cache_results(key_prefix, data, results=None):
    cache_key = f"{key_prefix}:{generate_cache_key(data)}"
    if results:
        cache_db["cache"].update_one(
            {"key": cache_key},
            {"$set": {"value": results}},
            upsert=True
        )
    else:
        cached_entry = cache_db["cache"].find_one({"key": cache_key})
        if cached_entry:
            return cached_entry["value"]
    return None
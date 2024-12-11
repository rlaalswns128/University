import requests
from pymongo import MongoClient
from utils.config import MONGODB_URI, EXTERNAL_API_URL, EXTERNAL_API_KEY
import logging
import math
import time

# Connect to MongoDB
client = MongoClient(MONGODB_URI)
db = client["health-supplements"]
collection = db["supplements"]

def fetch_and_save_data():
    try:
        # Initial request to get the total number of data items
        url = f"{EXTERNAL_API_URL}?serviceKey={EXTERNAL_API_KEY}&pageNo=1&numOfRows=1&type=json"
        initial_response = requests.get(url)
        initial_response.raise_for_status()
        
        # Parse JSON response to get total count
        initial_data = initial_response.json()
        total_count = initial_data.get("body", {}).get("totalCount", 0)
        print(f"Total data count: {total_count}")

        # Set rows_per_page to the API's maximum allowed value
        rows_per_page = 100
        total_pages = math.ceil(total_count / rows_per_page)

        # List to accumulate batch data
        batch_data = []
        batch_size = 5000  # Save to MongoDB every 5000 records

        # Fetch and save data for each page
        for page in range(1, total_pages + 1):
            page_url = f"{EXTERNAL_API_URL}?serviceKey={EXTERNAL_API_KEY}&pageNo={page}&numOfRows={rows_per_page}&type=json"
            response = requests.get(page_url)
            response.raise_for_status()
            
            # Parse JSON response
            try:
                data = response.json()
                items = data.get("body", {}).get("items", [])
                print(f"Fetched {len(items)} items from page {page}")
            except ValueError:
                logging.error(f"Page {page} response is not in JSON format.")
                print(f"Page {page} response is not in JSON format:", response.text)
                continue

            # Add items to batch data
            if isinstance(items, list):
                batch_data.extend(items)
            elif isinstance(items, dict):
                batch_data.append(items)
            
            # If batch size is reached, save to MongoDB
            if len(batch_data) >= batch_size:
                collection.insert_many(batch_data)
                print(f"Batch of {len(batch_data)} items saved to MongoDB.")
                batch_data.clear()  # Clear batch data after saving

            print(f"Page {page}/{total_pages} fetched and processed successfully.")

            # Short delay to avoid API rate limits
            time.sleep(0.1)

        # Save any remaining data in the batch
        if batch_data:
            collection.insert_many(batch_data)
            print(f"Final batch of {len(batch_data)} items saved to MongoDB.")

        logging.info("All data fetched and saved successfully.")
        return {"message": "All data fetched and saved successfully!"}

    except requests.exceptions.HTTPError as e:
        logging.error(f"API request failed: {e}")
        print(f"API request failed: {e}")
        return {"error": f"API request failed: {e}"}, 500
    except Exception as e:
        logging.error(f"Data save error: {e}")
        print(f"Data save error: {e}")
        return {"error": f"Data save error: {e}"}, 500
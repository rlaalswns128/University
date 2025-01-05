🏥 Health Supplements Recommendation System

This project is a health supplement recommendation system designed to provide users with personalized product suggestions based on their health information and needs. The system leverages AI-powered embeddings, RAG (Retrieval-Augmented Generation), cosine similarity, and ChatGPT to match users to the most suitable supplements.

🚀 Features
	•	External API Integration: Fetches health supplement data from external APIs and stores it in MongoDB.
	•	Data Vectorization: Converts user health information and product data into vector representations using embeddings.
	•	RAG-Based Search: Utilizes Retrieval-Augmented Generation for context-aware recommendations.
	•	Caching: Implements caching to reduce redundant computations and optimize performance.
	•	AI-Powered Recommendations: Uses ChatGPT to recommend products based on similarity scores and explain why they are suitable.
	•	Cosine Similarity Matching: Finds the closest products to user preferences using vector similarity.

📁 Project Structure

.
├── app.py                          # Flask application entry point
├── routes/
│   ├── data_routes.py              # Handles external data fetching and storage
│   ├── gpt_routes.py               # Handles GPT-related operations
│   ├── recommendation_routes.py    # Recommendation-related API endpoints
├── services/
│   ├── recommendation_service.py   # Recommendation logic with cosine similarity
│   ├── cache_service.py            # Caching utilities
│   ├── embeddings_service.py       # Handles vector embeddings
├── models/
│   ├── chatgpt_integration.py      # ChatGPT API integration
│   ├── embeddings.py               # Embedding model integration
├── utils/
│   ├── config.py                   # Configuration variables
│   ├── helpers.py                  # Data preprocessing and vectorization helpers
│   ├── cache_service.py            # Caching utilities
├── data/
│   ├── sample_data.json            # Example data for testing
├── requirements.txt                # Python dependencies
├── README.md                       # Project documentation

🔧 Installation

Prerequisites
	•	Python 3.8+
	•	MongoDB
	•	OpenAI API Key

Steps
	1.	Clone the repository:

git clone https://github.com/yourusername/health-supplements-recommender.git
cd health-supplements-recommender


	2.	Install dependencies:

pip install -r requirements.txt


	3.	Configure MongoDB:
	•	Update the MONGODB_URI in utils/config.py with your MongoDB connection string.
	4.	Add your OpenAI API Key:
	•	Add your OpenAI API Key to CHATGPT_API_KEY in utils/config.py.
	5.	Run the Flask server:

python app.py

🛠 API Endpoints

1. Fetch and Store External Data

Endpoint: /api/fetch-and-save
Method: POST
Description: Fetches data from an external API and stores it in MongoDB.

2. Generate GPT Response

Endpoint: /api/generate-response
Method: POST
Description: Generates a GPT-based response for a given prompt.

3. Recommend Products

Endpoint: /api/recommend
Method: POST
Description: Recommends the top 5 products for the user and provides the most suitable product.

Sample Request:

{
  "age": 30,
  "health_condition": ["diabetes", "high blood pressure"],
  "allergies": ["gluten"],
  "goals": ["boost immune system", "improve digestion"]
}

Sample Response:

{
  "recommendations": [
    {
      "product": {
        "item": {
          "ITEM_NAME": "Product 1",
          "EE_DOC_DATA": "Supports immune system",
          "MAIN_INGR": "Vitamin C",
          "ADIT_INGR": "Zinc"
        }
      },
      "similarity": 0.95
    }
  ],
  "final_recommendation": "We recommend Product 1 because..."
}

🧠 Key Technologies
	•	Flask: Serves as the backend framework.
	•	MongoDB: Stores health supplement data and cache results.
	•	ChatGPT: Powers the recommendation explanation.
	•	Cosine Similarity: Compares user and product vectors.
	•	RAG: Implements Retrieval-Augmented Generation to optimize token usage.

📊 Recommendation Workflow
	1.	Data Preprocessing:
	•	User data (health conditions, goals, etc.) and product data (ingredients, classifications) are converted into natural language descriptions.
	•	Descriptions are vectorized using embedding models.
	2.	Vector Similarity:
	•	Cosine similarity is calculated between user and product vectors.
	•	Products with the highest similarity are shortlisted.
	3.	RAG for Recommendation:
	•	GPT is provided with a concise summary of the user’s data and top recommendations.
	•	GPT selects the most suitable product and explains its choice.
	4.	Caching:
	•	Results are cached to avoid redundant calculations.

🐛 Troubleshooting
	•	MongoDB Authentication Error: Ensure your MONGODB_URI is correct and accessible.
	•	OpenAI Token Limit: Reduce the amount of data sent in prompts by optimizing the data passed to GPT.
	•	404 Errors: Verify the endpoints and their methods.

📄 License

This project is licensed under the MIT License. See the LICENSE file for details.

🙌 Contributions

Contributions are welcome! Feel free to open issues or submit pull requests to improve this project.

Now you have a complete and detailed README.md file for your project!

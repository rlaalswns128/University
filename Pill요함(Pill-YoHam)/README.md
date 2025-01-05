# Pill요함 (Pill-YoHam)

A Flask-based backend system designed to recommend health supplements tailored to user health conditions, goals, and allergies. This project uses **RAG (Retrieval-Augmented Generation)** techniques, cosine similarity, and OpenAI's GPT API to provide accurate and cost-efficient recommendations.

---

## Features

- **Data Ingestion**: Fetch health supplements data from external APIs and store it in MongoDB.
- **Embeddings**: Generate embeddings for products and user data for vector-based similarity search.
- **Recommendation System**: Match user requirements with product data using cosine similarity and GPT-based reasoning.
- **Caching**: Minimize API usage and response time using a MongoDB-backed caching layer.
- **RAG Implementation**: Combine retrieved product data with generative AI for optimal recommendations.

---

## Project Structure

```plaintext
.
├── app.py                     # Flask app entry point
├── routes/
│   ├── recommendation_routes.py  # Endpoints for product recommendations
├── services/
│   ├── recommendation_service.py # Recommendation logic
├── utils/
│   ├── helpers.py                # Embedding and preprocessing utilities
│   ├── cache_service.py          # Caching implementation
├── models/
│   ├── embeddings.py             # Integration with embedding API
│   ├── chatgpt_integration.py    # GPT API interaction
├── config.py                  # Configuration for API keys and database
├── requirements.txt           # Python dependencies
└── README.md                  # Project documentation

Installation

Prerequisites
	•	Python 3.8 or later
	•	MongoDB (local or cloud instance)
	•	OpenAI API Key

Setup
	1.	Clone the repository

git clone https://github.com/your-repo/health-supplements-recommendation.git
cd health-supplements-recommendation


	2.	Create a virtual environment and install dependencies

python3 -m venv venv
source venv/bin/activate  # On Windows: venv\Scripts\activate
pip install -r requirements.txt


	3.	Configure API Keys and Database
	•	Open config.py and update the following:

MONGODB_URI = "mongodb://localhost:27017/"
CHATGPT_API_KEY = "your-openai-api-key"


	4.	Run the server

python app.py


	5.	Test the API
Use curl or Postman to test the recommendation endpoint:

curl -X POST http://localhost:5001/api/recommend \
     -H "Content-Type: application/json" \
     -d '{
           "age": 30,
           "health_condition": ["diabetes", "high blood pressure"],
           "allergies": ["gluten"],
           "goals": ["boost immune system", "improve digestion"]
         }'

API Endpoints

/api/recommend (POST)

Description: Recommends health supplements based on user health data.

Request Body:

{
  "age": 30,
  "health_condition": ["diabetes", "high blood pressure"],
  "allergies": ["gluten"],
  "goals": ["boost immune system", "improve digestion"]
}

Response:

{
  "recommendations": [
    {
      "product": {
        "item": {
          "ITEM_NAME": "Supplement A",
          "EE_DOC_DATA_EXP": "Boosts immunity",
          "MAIN_INGR": "Vitamin C",
          "ADIT_INGR": "Zinc"
        }
      },
      "similarity": 0.89
    },
    ...
  ],
  "final_recommendation": "Supplement A is the best match because it aligns with your goals to boost immunity."
}

Key Technologies
	•	Flask: Lightweight Python web framework.
	•	MongoDB: NoSQL database to store and query supplement data.
	•	OpenAI GPT API: Generate recommendations and reasoning.
	•	RAG (Retrieval-Augmented Generation): Combines retrieval-based and generative AI for efficiency.
	•	Cosine Similarity: Measures similarity between user and product embeddings.
	•	Caching: Reduces redundant API calls and enhances performance.

Development Roadmap
	1.	Enhance User Data Handling:
	•	Add more detailed user input fields (e.g., diet preferences, activity levels).
	2.	Improve RAG Logic:
	•	Experiment with additional vector search libraries like FAISS or Pinecone.
	3.	Frontend Integration:
	•	Build a user-friendly interface using React or a simple JSP-Spring Boot setup.
	4.	Performance Optimization:
	•	Implement batch processing for embeddings and caching layers.

Contributing
	1.	Fork the repository.
	2.	Create a feature branch:

git checkout -b feature/your-feature


	3.	Commit your changes:

git commit -m "Add your feature"


	4.	Push your branch and create a pull request.

License

This project is licensed under the MIT License. See the LICENSE file for details.

This README is designed to be clear, structured, and informative while ensuring technical details are easy to understand. It also highlights the cutting-edge technologies used in the project.

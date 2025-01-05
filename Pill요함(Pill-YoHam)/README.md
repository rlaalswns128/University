Health Supplements Recommendation Web Application

This project is a health supplement recommendation system designed to provide users with personalized product recommendations based on their health conditions, requirements, and allergies. The system integrates AI-powered recommendations with efficient data processing techniques.

🚀 Key Features
	1.	Data Ingestion & Storage
	•	External API integration for fetching supplement data.
	•	Data is stored and managed using MongoDB. 
	2.	User Health Analysis
	•	Users input their age, health conditions, allergies, and health goals via a web form.
	•	AI models process user data to extract relevant health information.
	3.	AI-Powered Product Recommendations
	•	Leverages GPT-based models to evaluate the most suitable health supplements.
	•	Uses product ingredients, efficacy details, and classification to determine the best matches.
	4.	Token Optimization with RAG & Caching
	•	Implements Retrieval-Augmented Generation (RAG) to preprocess data and reduce token usage.
	•	Utilizes vector similarity to shortlist relevant products before querying GPT.
	•	Caching for repeated queries to minimize cost and improve performance.
	5.	Efficient Product Matching
	•	Combines cosine similarity on vector embeddings for faster and precise product-user matching.
	•	Dynamically expands incomplete fields like product efficacy using GPT.
	6.	Dynamic Web Interface
	•	Built with Flask backend and a Spring Boot-powered frontend (JSP templates for UI).
	•	Simple and responsive web pages for:
	•	Inputting user data.
	•	Viewing recommended products.

🛠️ Tech Stack
	1.	Backend
	•	Python Flask: Handles API requests, data ingestion, and AI-powered recommendations.
	•	MongoDB: Stores health supplement data.
	2.	Frontend
	•	Spring Boot with JSP: Provides the user interface for inputs and results.
	3.	AI Integration
	•	OpenAI GPT models for intelligent recommendation generation.
	•	Embedding generation for user and product vectors.
	4.	Optimization Tools
	•	RAG (Retrieval-Augmented Generation): Reduces token usage by pre-processing.
	•	Vector Search (Cosine Similarity): Matches user requirements with stored product vectors.
	•	Caching: Stores query results to avoid redundant API calls.

📁 Project Structure

health-supplements/
├── ai/                     # AI processing backend
│   ├── app.py              # Main Flask application
│   ├── models/
│   │   ├── embeddings.py   # Embedding generation for user and product data
│   │   ├── chatgpt_integration.py  # OpenAI API integration
│   ├── services/
│   │   ├── data_service.py         # External data fetching
│   │   ├── recommendation_service.py  # Core recommendation logic
│   │   ├── cache_service.py        # Caching for optimized queries
│   ├── routes/
│   │   ├── data_routes.py          # API route for data fetching
│   │   ├── recommendation_routes.py  # API route for recommendations
│   ├── utils/
│   │   ├── config.py               # Configuration (API keys, MongoDB URI)
│   │   ├── helpers.py              # Utility functions (preprocessing, vector prep)
├── frontend/               # Web interface
│   ├── src/
│   │   ├── main/
│   │   │   ├── resources/          # CSS, JS, images
│   │   │   ├── webapp/             # JSP templates for UI
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation

🧑‍💻 API Endpoints

1. Fetch External Data
	•	Endpoint: /api/fetch-and-save
	•	Method: POST
	•	Description: Fetches health supplement data from an external API and stores it in MongoDB.

2. Recommend Products
	•	Endpoint: /api/recommend
	•	Method: POST
	•	Payload:

{
  "age": 30,
  "health_condition": ["diabetes", "high blood pressure"],
  "allergies": ["gluten"],
  "goals": ["boost immune system", "improve digestion"]
}


	•	Response:

{
  "recommendations": [
    {
      "product": {
        "item": {
          "ITEM_NAME": "Product A",
          "MAIN_INGR": "Ingredient 1",
          "ADIT_INGR": "Ingredient 2",
          ...
        },
        "similarity": 0.92
      }
    }
  ],
  "final_recommendation": "Product A is the best match because ..."
}

⚡ How It Works
	1.	User Input
	•	User enters their health conditions, allergies, and goals via the web interface.
	2.	Data Processing
	•	User data is converted into vector embeddings.
	•	Products stored in MongoDB are similarly vectorized.
	3.	Recommendation Generation
	•	Preprocessed data is matched using cosine similarity.
	•	ChatGPT API provides the final recommendation.
	4.	Results
	•	Recommended products and their details are displayed on the web page.

🚀 How to Run
	1.	Clone the Repository:

git clone https://github.com/your-repo/health-supplements.git
cd health-supplements


	2.	Install Dependencies:

pip install -r requirements.txt


	3.	Start MongoDB:
Ensure MongoDB is running locally or update the MONGODB_URI in config.py.
	4.	Run Flask Backend:

python ai/app.py


	5.	Run Frontend:
Deploy the Spring Boot application for user interaction.
	6.	Test API:
Use curl or Postman to test the /api/recommend endpoint.

🤝 Contributions
	1.	Fork the repository and create a branch for your feature.
	2.	Open a Pull Request with a detailed explanation of changes.
	3.	Review and merge!

📜 License

This project is licensed under the MIT License. See LICENSE for more details.

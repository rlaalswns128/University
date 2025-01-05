# Pill요함(Pill-YoHam)

Welcome to the **Pill요함(Pill-YoHam)**! This project leverages advanced AI technologies and a robust backend infrastructure to provide personalized health supplement recommendations based on user health data and preferences.

---

## Table of Contents

1. [Overview](#overview)
2. [Features](#features)
3. [Technologies Used](#technologies-used)
4. [Project Structure](#project-structure)
5. [Setup and Installation](#setup-and-installation)
6. [How It Works](#how-it-works)
7. [Endpoints](#endpoints)
8. [Future Improvements](#future-improvements)
9. [License](#license)

---

## Overview

This project focuses on utilizing user health data, preferences, and modern AI techniques to recommend the most suitable health supplements. The system processes stored supplement data and compares it against user input using advanced embedding models and vector similarity calculations.

---

## Features

- **Personalized Recommendations**: Tailored suggestions based on health conditions, goals, and allergies.
- **Vector-Based Similarity Matching**: High-accuracy matching using cosine similarity and embeddings.
- **RAG (Retrieval-Augmented Generation)**: Efficient use of AI models to reduce token costs and provide accurate responses.
- **Caching**: Speeds up repeated queries by storing results locally.
- **Scalable Backend**: Flask server for processing, with support for MongoDB.
- **Dynamic Data Processing**: Real-time analysis and data augmentation.

---

## Technologies Used

- **Backend**: Flask, Python
- **Database**: MongoDB
- **AI Models**: OpenAI GPT, Vector Embeddings
- **Search Augmentation**: Retrieval-Augmented Generation (RAG)
- **Web Framework**: Spring Boot (for frontend integration)
- **Frontend**: JSP, Bootstrap
- **Deployment**: Docker (optional)

---

## Project Structure

```plaintext
health-supplements/
├── ai/
│   ├── app.py                # Flask server entry point
│   ├── routes/
│   │   ├── data_routes.py    # Handles external data fetching
│   │   ├── gpt_routes.py     # AI interactions
│   │   ├── recommendation_routes.py  # Recommendation logic
│   ├── services/
│   │   ├── recommendation_service.py # Main recommendation logic
│   │   ├── embeddings_service.py     # Handles embeddings
│   │   ├── cache_service.py          # Caching layer
│   ├── utils/
│   │   ├── helpers.py                # Preprocessing and vector generation
│   │   ├── config.py                 # Configuration (API keys, DB URIs)
│   ├── models/
│   │   ├── chatgpt_integration.py    # GPT integration
│   │   ├── embeddings.py             # Embedding generation
├── web/
│   ├── src/
│   │   ├── main/
│   │   │   ├── java/com/supplements/ # Spring Boot backend
│   │   │   ├── resources/templates/  # JSP templates
├── README.md                         # Project documentation
├── requirements.txt                  # Python dependencies
```

---

## Setup and Installation

**Prerequisites**
- Python 3.8+
- MongoDB installed and running
- API keys for OpenAI and external health data API

**Installation**
1. Clone the repository:
```
git clone https://github.com/yourusername/health-supplements.git
cd health-supplements
```

2. Set up the Python environment:
```
cd ai
python -m venv venv
source venv/bin/activate
pip install -r requirements.txt
```

3. Configure environment variables:
- Create a .env file in the ai/ directory with the following:
```
OPENAI_API_KEY=your_openai_key
MONGODB_URI=mongodb://localhost:27017/
EXTERNAL_API_KEY=your_api_key
EXTERNAL_API_URL=https://apis.data.go.kr/1471000/QdrgPrdtPrmsnInfoService03/getQdrgPrdtPrmsnInfoInq03
```

4. Run the Flask server:
```
python app.py
```

5. Start the Spring Boot application: Navigate to web/src/main and run:
```
./mvnw spring-boot:run
```

---

## How It Works

**1.Data Collection**:
- Fetch health supplement data via an external API.
- Store data in MongoDB.

**2.User Input**:
- Collect user health details (e.g., age, conditions, allergies, goals).

**3.Recommendation Process**:
- Generate embeddings for user input and stored product data.
- Compare vectors using cosine similarity.
- Retrieve the top matching supplements.
- Use GPT to refine recommendations.

---

## Endpoints

**Flask Server**
1. POST /api/fetch-and-save

- Fetch and save external API data to MongoDB.

2. POST /api/generate-response

- Interact with GPT for product suggestions.

3. POST /api/recommend

- Recommend supplements based on user input.

---

## Future Improvements

- **Expand AI Model Integration**: Include Claude or other models for cost-efficiency.
- **User Authentication**: Secure login and personalized dashboards.
- **Enhanced Search**: Implement advanced filtering and sorting options.

---

## License

This project is licensed under the MIT License. See the LICENSE file for details.

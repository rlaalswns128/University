import openai
from utils.config import CHATGPT_API_KEY

openai.api_key = CHATGPT_API_KEY

def generate_gpt_response(prompt):
    response = openai.ChatCompletion.create(
    model="gpt-3.5-turbo",
    messages=[{"role": "system", "content": "제품 추천 시스템입니다."},
              {"role": "user", "content": prompt}],
    max_tokens=300
    )
    return response.choices[0].text.strip()
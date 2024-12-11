from models.chatgpt_integration import generate_gpt_response

def generate_chatgpt_response(data):
    prompt = f"Analyze the following data and recommend products based on user preferences: {data}"
    gpt_response = generate_gpt_response(prompt)
    return {"response": gpt_response}
from flask import Blueprint, request, jsonify
from services.gpt_service import generate_chatgpt_response

gpt_blueprint = Blueprint('gpt_routes', __name__)

@gpt_blueprint.route('/api/generate-response', methods=['POST'])
def generate_response():
    data = request.json
    result = generate_chatgpt_response(data)
    return jsonify(result)
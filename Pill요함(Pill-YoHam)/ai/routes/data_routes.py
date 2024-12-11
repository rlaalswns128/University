from flask import Blueprint, jsonify
from services.data_service import fetch_and_save_data

data_blueprint = Blueprint('data_routes', __name__)

@data_blueprint.route('/api/fetch-and-save', methods=['POST'])
def fetch_and_save():
    result = fetch_and_save_data()
    return jsonify(result)
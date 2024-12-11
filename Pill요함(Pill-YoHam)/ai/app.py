# -*- coding: utf-8 -*-

from flask import Flask
from routes.data_routes import data_blueprint
from routes.gpt_routes import gpt_blueprint
from routes.recommendation_routes import recommendation_blueprint

app = Flask(__name__)

# 블루프린트 등록
app.register_blueprint(data_blueprint)
app.register_blueprint(gpt_blueprint)
app.register_blueprint(recommendation_blueprint)

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001, debug=True)  # 디버그 모드 활성화
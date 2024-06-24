from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # This will enable CORS for all routes

@app.route('/')
def hello_world():
    return 'Hello from the backend!'

@app.route('/data', methods=['POST'])
def get_data():
    data = request.json
    return jsonify({"message": "Data received", "data": data})

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5000)


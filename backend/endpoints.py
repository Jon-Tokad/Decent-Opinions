from flask import Flask
from flask_cors import CORS
from services.takeService import *

endpoints = Flask(__name__)
CORS(endpoints)  # This will enable CORS for all routes

@endpoints.route('/')
def DecentOpinions():
    return {"Welcome": "Decent Opinions"}

@endpoints.route('/take', methods=['GET'])
def apiGetTake():
    return getTake()

if __name__ == '__main__':
    endpoints.run(host='0.0.0.0', port=5000)


#author: Krutarth Patel (B00835794)
from flask import Blueprint, jsonify, request
from flask_restx import Resource,Api
import pymongo

addQuestion_blueprint = Blueprint('addQuestions',__name__)
api = Api(addQuestion_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
quiz=db.Quiz

class addQuestions(Resource):
    def get(self):
        print("inside")
        questions = request.args.get('questions') 
        print(questions)
        return jsonify(questions) #return all FAQs in json data format

api.add_resource(addQuestions,'/addQuestions')

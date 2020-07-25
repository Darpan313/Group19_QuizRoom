#author: Krutarth Patel (B00835794)
from flask import Blueprint, jsonify, request
from flask_restx import Resource,Api
import pymongo

support_blueprint = Blueprint('support',__name__)
api = Api(support_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
support=db.Support

class Support(Resource):
    def get(self):
        email = request.args.get('email')
        subject = request.args.get('subject')
        message = request.args.get('message')
        print(email)
        print(subject)
        print(message)
        record = { "email": email, "subject": subject, "message": message}
        support.insert_one(record)
        
api.add_resource(Support,'/support')

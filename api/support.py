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
        email = request.args.get('email')       #fetch user email address
        subject = request.args.get('subject')   #fetch user support subject
        message = request.args.get('message')   #fetch user support message
        record = { "email": email, "subject": subject, "message": message}
        result = support.insert_one(record)  #insert record in mongoDB collection
        
api.add_resource(Support,'/support')

#author: Krutarth Patel (B00835794)
from flask import Blueprint, jsonify
from flask_restx import Resource,Api
import pymongo

faq_blueprint = Blueprint('faq',__name__)
api = Api(faq_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
faqs=db.FAQ

class FAQs(Resource):
    def get(self):
        data = {}
        results = []
        
        #iterate through all FAQs present in the mongoDB collection
        for question in faqs.find({}):
            lst = {}
            ques=question["question"]   #fetch questions
            ans=question["answer"]  #fetch answers to the corresponding question
            lst["question"]= ques
            lst["answer"] = ans
            results.append(lst)
        
        return jsonify(results) #return all FAQs in json data format

api.add_resource(FAQs,'/faq')

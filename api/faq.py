from flask import Blueprint, jsonify
from flask_restx import Resource,Api
import pymongo

faq_blueprint = Blueprint('faq',__name__)
api = Api(faq_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
faqs=db.FAQ

class getFAQs(Resource):
    def get(self):
        data = {}
        results = []
        for question in faqs.find({}):
            lst = {}
            ques=question["question"]
            ans=question["answer"]
            lst["question"]= ques
            lst["answer"] = ans
            results.append(lst)
            
        print(results)
        return jsonify(results)

api.add_resource(getFAQs,'/faq')

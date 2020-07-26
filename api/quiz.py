# Author: Yuganthi Krishnamurthy
# Banner number : B00839935 
from flask import Flask, request, Blueprint
import pymongo
from flask_restx import Resource,Api

quiz_blueprint = Blueprint('fetchQuestions',__name__)
api = Api(quiz_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/QuizzRoom?retryWrites=true&w=majority")
db=client.QuizzRoom
userCollection=db.Question_temp

class QuestionDetails(Resource):
    def get(self):
        results=userCollection.aggregate([{'$match':{'questionId':{'$gte':1}}}])
        questionSet=[]
        for result in results:
            question = {}
            question['questionId']=result['questionId']
            question['question']=result['question']
            question['options']=result['options']
            question['selectedOption']=False
            question['type']=result['type']
            questionSet.append(question)
        return {"QuestionSet":questionSet}

api.add_resource(QuestionDetails,'/fetchQuestions')

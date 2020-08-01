#author: Krutarth Patel (B00835794)
from flask import Blueprint, jsonify, request
from flask_restx import Resource,Api
import json
import pymongo

addQuestion_blueprint = Blueprint('addQuestions',__name__)
api = Api(addQuestion_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
quiz=db.Quiz

class addQuestions(Resource):
    def get(self):
        questions = json.loads(request.args.get('questions'))
        record = {}
        questionList = []
        for q in questions:
            questionDict = {}
            questionDict['marks'] = q['marks']
            questionDict['type'] = q['answerOption']
            questionDict['text'] = q['question']
            questionDict['category'] = q['questionCategory']
            questionDict['correct_answers'] = q['answer']
            if('MCQ' in questionDict['type']):
                options=[]
                options.append('option1')
                options.append('option2')
                options.append('option3')
                options.append('option4')
                questionDict['options'] = options
                
            questionList.append(questionDict)

        record['questions'] = questionList

        print(record)
        x = quiz.insert_one(record)
        return jsonify(record) #return all FAQs in json data format

api.add_resource(addQuestions,'/addQuestions')

#author Darpan Patel

from flask import Blueprint, jsonify, request
from flask_restx import Resource,Api
from bson.objectid import ObjectId
import pymongo


analytics_blueprint = Blueprint('analytics',__name__)
api = Api(analytics_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
userCollection=db.User
classroomCollection = db.Classroom
quizCollection = db.Quiz

def listQstns(q):
    result = []
    for quiz in q:
        questions = quiz['questions']
        for quest in questions:
            questDict = {}
            questDict["questionText"] = quest['text']
            responses = quest['responses']
            correctCount = 0
            incorrectCount = 0
            notAnswered = 0
            for response in responses:
                if response["eval"] == "Correct":
                    correctCount+=1
                elif response["eval"] == "Incorrect":
                    incorrectCount+=1
                else:
                    notAnswered+=1
            questDict["Correct"]=correctCount
            questDict["Incorrect"]=incorrectCount
            questDict["NotAnswered"]=notAnswered
            result.append(questDict)
            
    return result

def categoryAnlys(q):
    result = []
    for quiz in q:
        categoryDict = {}
        categoryDictTotal = {}
        resultDict = {}
        questions = quiz["questions"]
        for quest in questions:
            category = quest['category']
            responses = quest['responses']
            correctCount = 0
            incorrectCount = 0
            totalResponse = 0
            for response in responses:
                totalResponse+=1
                if response["eval"] == "Correct":
                    correctCount+=1
                elif response["eval"] == "Incorrect":
                    incorrectCount+=1
            #categoryDict[category] = categoryDict[category] + totalResponse
            if category not in categoryDict:
                categoryDict[category] = 0
                categoryDictTotal[category] = 0
            categoryDict[category] = categoryDict[category] + correctCount
            categoryDictTotal[category] = categoryDictTotal[category] + totalResponse
            resultDict[category] = (categoryDict[category]/categoryDictTotal[category])*100
        for key in resultDict:
            temp = {}
            temp["x"]=key
            temp["y"]=resultDict[key]
            result.append(temp)
    return result

class QuizAnalytics(Resource):
    def post(self):
        data = request.get_json()
        quiz_id = ObjectId(data.get('id'))
        q = quizCollection.find({"_id":quiz_id})
        apiResult = {}
        questionResult = listQstns(q)
        q = quizCollection.find({"_id":quiz_id})
        categoryResult = categoryAnlys(q)
        apiResult["questions"] = questionResult
        apiResult["categories"] = categoryResult
        print(apiResult)
        return jsonify(apiResult)

api.add_resource(QuizAnalytics,'/analytics/getDataForViz')

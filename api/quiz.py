import time
from flask import Flask, request
import json
from flask_cors import CORS
import pymongo
app = Flask(__name__)
CORS(app)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/QuizzRoom?retryWrites=true&w=majority")
db=client.QuizzRoom
userCollection=db.Question_temp

@app.route('/api/fetchQuestions',methods=['GET'])
def fetchQuestions():
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

if __name__ == '__main__':
	app.run()

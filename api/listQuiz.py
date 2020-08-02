#Author - Shwetha Subash (B00852743)
from flask import Blueprint, request
from flask_restx import Resource, Api, fields
import pymongo
import json
from bson import json_util, ObjectId

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom

listQuiz_blueprint = Blueprint('listQuiz',__name__)
api = Api(listQuiz_blueprint)

existingUser = api.model('ExistingUser',{
    'userId': fields.String(required=True)
})

quizId = api.model('quizId',{
    'quizId': fields.String(required=True)
})



class ListQuiz(Resource):
    @api.expect(existingUser, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            userId = postData.get('userId')
            response_object = {}

            classCollection = db.Classroom
            userCollection=db.User
            quizCollection = db.Quiz

            instructorId = {'Instructor_id': userId}
            instructorQuizzes=classCollection.find(instructorId)

            print(instructorQuizzes)
            details=[]
            
            for instructorQuiz in instructorQuizzes:
                
                classroom = {}
                classroom['className'] = instructorQuiz["Classname"]
                classroom['code'] = instructorQuiz["Code"]
                quizzes=[]
                for quiz in instructorQuiz['Quizzes']:
                    quiz=ObjectId(quiz)
                    eachQuiz ={}
                    quizId = {'_id' : quiz}
                    quizDetails = quizCollection.find(quizId)
                    print(quizDetails)
                    for quizDetail in quizDetails:
                        print('here')
                        eachQuiz['quizName']=quizDetail['quiz_name']
                        eachQuiz['timer']=quizDetail['timer']
                        eachQuiz['concepts']=quizDetail['concepts']
                        eachQuiz['publishedDate']=quizDetail['published_date'] 
                        eachQuiz['questions']=quizDetail['questions'] 
                        print(eachQuiz)
                        quizzes.append(eachQuiz)
                        print(quizzes)
                classroom['quizzes'] = quizzes
                print(classroom)
                details.append(classroom)
            print(details)
            response_object['data']='success'
            print('here')
            details=json.loads(json_util.dumps(details))
            response_object['message'] =details
            
            print(response_object)


        except:
            response_object['data']='error'
            response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201
       

class DeleteQuiz(Resource):
    @api.expect(quizId, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            quiz = ObjectId(postData.get('quizId'))
            response_object = {}
            quizCollection = db.Quiz
            quizId = {'_id' : quiz}
            quizDetails = quizCollection.find(quizId)
            if quizDetails:
                print(quizDetails)
                quizCollection.delete_one(quizId)
                response_object['data']='success'
                response_object['message'] ='Quiz is deleted' 
            else:
                response_object['data']='success'
                response_object['message'] ='Quiz does not exist'   

        except:
            response_object['data']='error'
            response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201

api.add_resource(ListQuiz,'/listQuiz')
api.add_resource(DeleteQuiz,'/deleteQuiz')

#author: Darpan Patel (B00843607)
from flask import Blueprint, jsonify
from flask_restx import Resource,Api
import pymongo

report_blueprint = Blueprint('report',__name__)
api = Api(report_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom
userCollection=db.User
classroomCollection = db.Classroom
quizCollection = db.Quiz

def getClassroom(quiz_id):
    classes = classroomCollection.find({"Quizzes":{"$exists":True}})
    for c in classes:
        data = c
        quizzes = data["Quizzes"]
        class_name = data["Classname"]
        flag = False
        for q in quizzes:
            if q == quiz_id:
                flag = True
                break
        if flag:
            return class_name

class QuizReport(Resource):
    def get(self):
        data = {}
        results = []
        for q in quizCollection.find({}):
            quiz = {}
            data = q
            quiz_id = data["_id"]
            quiz_name = data["quiz_name"]
            publish = data["published_date"]
            concepts = data["concepts"].split(",")
            question_list = data["questions"]
            classroom_name = getClassroom(quiz_id)
            mark = 0
            avg_que_score = 0
            for question in question_list:
                mark+=question["marks"]
                response_list = question["responses"]
                q_totalmark = 0
                for response in response_list:
                    print(response["eval"])
                    if response["eval"]=="Correct":
                        q_totalmark += question["marks"]
                avg_que_score+=(q_totalmark/len(response_list)) 
            #avg
            #print(quiz_name,publish,concepts,mark,avg_que_score)
            quiz["quiz_name"]= quiz_name
            quiz["publish"] = publish
            quiz["class"] = classroom_name
            quiz["concepts"]= concepts
            quiz["avg_score"] = str(avg_que_score)+" / "+str(mark)
            results.append(quiz)
        print(results)
        return jsonify(results)

class ClassroomReport(Resource):
    def get(self):   
        results = []
        for c in classroomCollection.find({}):
            classroom = {}
            class_id = c["_id"]
            class_name = c["Classname"]
            code = c["Code"]
            term = c["Term"]
            quiz_names = []
            try:
                quizzes = c["Quizzes"]
                for q in quizzes:
                    quiz_id = q
                    for quiz in quizCollection.find({"_id":quiz_id}):
                        quiz_names.append(quiz["quiz_name"])

                #get quiznames & avg. scores
            except KeyError:
                quiz_names = 0
            try:
                students = c["Students"]
                students = len(students)
            except KeyError:
                students = 0
            #avg Score
            
            classroom["class_name"] = class_name
            classroom["code"] = code
            classroom["term"] = term
            classroom["tot_stud"] = students
            classroom["quizzes"] = quiz_names
            results.append(classroom)
        print(results)
        return jsonify(results)

api.add_resource(QuizReport,'/report/ByQuiz')
api.add_resource(ClassroomReport,'/report/ByClassroom')

from flask import Blueprint, jsonify
from flask_restx import Resource,Api
import pymongo

getcertificate_blueprint = Blueprint('getcertificate',__name__)
api = Api(getcertificate_blueprint)

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")

db=client.QuizzRoom
userCollection=db.User
classroomCollection = db.Classroom
quizCollection = db.Quiz

class Certificate(Resource):
    def get(self):
        data = {}
        results = []
        for q in quizCollection.find({}):
            quiz = {}
            data = q
            quiz_id = data["_id"]
            quiz_name = data["quiz_name"]
            publish = data["published_date"]
            question_list = data["questions"]
            # classroom_name = getClassroom(quiz_id)
            mark = 0
            for question in question_list:
                mark+=question["marks"]
                response_list = question["responses"]
                q_totalmark = 0
                for response in response_list:
                    print(response["eval"])
                    if response["eval"]=="Correct":
                        q_totalmark += question["marks"]
            #avg
            #print(quiz_name,publish,concepts,mark,avg_que_score)
            quiz["quiz_name"]= quiz_name
            quiz["publish"] = publish
            # quiz["class"] = classroom_name
            quiz["marks"] = str(mark)
            results.append(quiz)
        print(results)
        return jsonify(results)
api.add_resource(Certificate,'/getcertificate')

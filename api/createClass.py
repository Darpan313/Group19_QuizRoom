# Author: Deepkumar Dharmeshbhai Patel
# Banner Id : B00845028
from flask import Blueprint, jsonify, request
import pymongo
import pandas
import json


client = pymongo.MongoClient(
    "mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db = client.QuizzRoom

class_blueprint = Blueprint('class', __name__)

@class_blueprint.route('/getAllClass', methods=['GET'])
def getAllClass():
    result=[]
    classCollection = db.Classroom
    classDetails = classCollection.find({})
    for c in classDetails:
            classroom = {}
            classroom['Classname'] = c["Classname"]
            classroom['Code'] = c["Code"]
            classroom['Term'] = c["Term"]
            classroom['Description'] = c["Description"]
            classroom['End_date'] = c["End_date"]
            classroom['Students']= c["Student_id"]
            result.append(classroom)
    return jsonify(result)

# @class_blueprint.route('/getQuiz', methods=['GET'])
# def getAllClass():
#     result=[]
#     classCollection = db.Classroom
#     classDetails = classCollection.find({})
#     for c in classDetails:
#             classroom = {}
#             classroom['Classname'] = c["Classname"]
#             classroom['Code'] = c["Code"]
#             classroom['Term'] = c["Term"]
#             classroom['Description'] = c["Description"]
#             classroom['End_date'] = c["End_date"]
#             classroom['Students']= c["Student_id"]
#             result.append(classroom)
#     return jsonify(result)

@class_blueprint.route('/getClass', methods=['POST'])
def getClass():
    result=[]
    getData=request.json
    classname = getData['className']   
    classCollection = db.Classroom
    classDetails = classCollection.find({ "Classname": classname })
    for c in classDetails:
            classroom = {}
            classroom['Classname'] = c["Classname"]
            classroom['Code'] = c["Code"]
            classroom['Term'] = c["Term"]
            classroom['Description'] = c["Description"]
            classroom['End_date'] = c["End_date"]
            classroom['Students']= c["Student_id"]
            result.append(classroom)
    return jsonify(result)

@class_blueprint.route('/createClass', methods=['POST'])
def addClass(): 
    try:    
        studentData = request.files['Student']
        print(studentData)
        postData=json.loads(request.form.get('data'))
        print(postData)
        df= pandas.read_csv(studentData, usecols=['email'])
        students=[]
        for email in df.email:
            temp={}
            temp['sId']=email
            students.append(temp)
        print(postData)
        print(students)
        classCollection = db.Classroom
        newClass = {'Classname': postData['className'], 'Code': postData['code'], 'Description': postData['description'], 'End_date': postData['endDate'], 'Instructor_id': postData['insId'],'Term':postData['term'],'Students':[],'Student_id':students,'Quizzes':[]}
        userExists = classCollection.find(newClass)
        print(userExists)
        # To check if document already exists
        result=classCollection.find({'Classname':postData['className']}).count()
        if result:
            return "Class already exists!"
        else:
        # To add the document to the collection
            classCollection.insert_one(newClass)
        return "New Class added!"
    except Exception as e:
        print(str(e))
        return "Something went wrong while processing the user create request! Please try again."

@class_blueprint.route('/updateClass', methods=['PUT'])
def updateClass():
    try:
        putData=request.json
        classname = putData['Classname']
        classCollection=db.Classroom
        result=classCollection.find({'Classname':classname}).count()
        if result:
            classCollection.update_one({"Classname": classname},{"$set":{'Code': putData['Code'], 'Description': putData['Description'], 'End_date': putData['End_date'], 'Term':putData['Term']}})
            return "Classroom updated!"
        else:
            return "No Class found with this classname!"
    except Exception as e:
        print(str(e))
        return "Something went wrong while processing the user create request! Please try again."

@class_blueprint.route('/addStudent', methods=['PUT'])
def addStudent():
    try:
        putData=request.json
        classname = putData['Classname']
        students = putData['addStudent']
        classCollection=db.Classroom
        result=classCollection.find({'Classname':classname}).count()
        if result:
            for s in students:
                sId={}
                sId['sId'] = s
                classCollection.update_one({"Classname": classname},{"$addToSet":{"Student_id":sId }}, upsert=True,)    
            return "Student Added!"
        else:
            return "No Class found with this classname!"
    except Exception as e:
        print(str(e))
        return "Something went wrong while processing the user create request! Please try again."

@class_blueprint.route('/addQuiz', methods=['PUT'])
def addQuiz():
    try:
        putData=request.json
        classname = putData['className']
        classCollection=db.Classroom
        result=classCollection.find({'Classname':classname}).count()
        if result:
            classCollection.update_one({"Classname": classname},{"$addToSet":{"Quizzes": {"quiz_id": putData['quizId']}}})
            return "Quiz Added!"
        else:
            return "No Class found with this classname!"
    except Exception as e:
        print(str(e))
        return "Something went wrong while processing the user create request! Please try again."

@class_blueprint.route('/deleteClass', methods=['POST'])
def deleteClass():
    try:
        postData=request.json
        classname = postData['className']
        classCollection=db.Classroom
        result=classCollection.find({'Classname':classname}).count()
        if result:
            classCollection.remove({"Classname": classname})
            return "Class removed!"
        else:
            return "No Class found with this classname!"
    except Exception as e:
        print(str(e))
        return "Something went wrong while processing the user create request! Please try again."
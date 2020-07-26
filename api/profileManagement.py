#Author - Shwetha Subash (B00852743)
from flask import Blueprint, request
from flask_restx import Resource, Api, fields
import pymongo

client=pymongo.MongoClient("mongodb+srv://shwethasubash:webgroup19@webtutorial.uaxed.mongodb.net/<dbname>?retryWrites=true&w=majority")
db=client.QuizzRoom

profileManagement_blueprint = Blueprint('profileManagement',__name__)
api = Api(profileManagement_blueprint)

newUser = api.model('NewUser',{
    'firstName': fields.String(required=True),
    'lastName': fields.String(required=True),
    'email': fields.String(required=True),
    'role': fields.String(required=True),
    'password' : fields.String(required=True)
})

existingUser = api.model('ExistingUser',{
    'role': fields.String(required=True),
    'password' : fields.String(required=True)
})

userId = ''

class Register(Resource):
    @api.expect(newUser, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            email = postData.get('email')
            response_object = {}

            userCollection=db.User
            newUser = {'firstName': postData['firstName'],'lastName': postData['lastName'], 'role':postData['role'], 'email':postData['email'], 'password':postData['password'] }
            userExists=userCollection.find(newUser)
            #To check if document already exists
            for i in userExists:
                print(i)
                response_object['data']='error'
                response_object['message'] = 'Sorry. That email already exists.'
                return response_object
            #To add the document to the collection
            userCollection.insert_one(newUser)
        except:
            response_object['data']='error'
            response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        response_object['data']='success'
        response_object['message'] = f'{email} was added!'

        return response_object, 201

class Login(Resource):
    @api.expect(existingUser, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            email = postData.get('email')
            password = postData.get('password')
            role = postData.get('role')
            response_object = {}

            userCollection=db.User
            newUser = {'email': email}
            userExists=userCollection.find_one(newUser)

            if userExists:
                print(userExists)
                if userExists['email']==email and userExists['password']==password and userExists['role'] == role:
                    print('email matches')
                    response_object['data']='success'
                    response_object['message'] ="Valid user credentials"
                else:
                    response_object['data']='error'
                    response_object['message'] ="Invalid user credenials"
            else:
                response_object['data']='error'
                response_object['message'] ="User does not exist. Please Sign Up!"
        except:
            response_object['data']='error'
            response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201

class GetDetails(Resource):
    @api.expect(userId, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            email = postData.get('email')
            response_object = {}

            userCollection=db.User
            newUser = {'email': email}
            userExists=userCollection.find_one(newUser)

            if userExists:
                print(userExists)
                response_object['data']='success'
                response_object['firstName'] = userExists['firstName']
                response_object['lastName'] = userExists['lastName']
                response_object['email']=email
            else:
                response_object['data']='error'
                response_object['message'] ="User does not exist."
        except:
            response_object['data']='error'
            response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201
                

class UpdateDetails(Resource):
    @api.expect(userId, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            email = postData.get('email')
            firstName = postData.get('firstName')
            lastName = postData.get('lastName')
            response_object = {}
            userCollection=db.User

            existingUser = {'email':email}
            userExists=userCollection.find_one(existingUser)

            
            updateUser = { "$set": {'firstName': firstName , 'lastName':lastName}}
            if userExists:
                print(userExists)
                userCollection.update_one(existingUser,updateUser)
                updatedUser = {'email':email,'firstName': firstName , 'lastName':lastName}
                userUpdated=userCollection.find_one(updatedUser)
                if userUpdated:
                    print(userUpdated)
                    response_object['data']='success'
                    response_object['message']='User updated successfully'
                else:
                    response_object['data']='error'
                    response_object['message'] ="User not updated."
        except:
                response_object['data']='error'
                response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201

class ChangePassword(Resource):
    @api.expect(userId, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            email = postData.get('email')
            password = postData.get('password')
            response_object = {}
            userCollection=db.User

            existingUser = {'email':email}
            userExists=userCollection.find_one(existingUser)

            
            updateUser = { "$set": {'password': password }}
            if userExists:
                print(userExists)
                userCollection.update_one(existingUser,updateUser)
                updatedUser = {'email':email,'password':password}
                userUpdated=userCollection.find_one(updatedUser)
                if userUpdated:
                    print(userUpdated)
                    response_object['data']='success'
                    response_object['message']='Password updated successfully'
                else:
                    response_object['data']='error'
                    response_object['message'] ="Password not updated."
        except:
                response_object['data']='error'
                response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201

class DeleteUser(Resource):
    @api.expect(userId, validate=True)
    def post(self):
        try:
            postData=request.json
            print(postData)
            email = postData.get('email')
           
            response_object = {}
            userCollection=db.User

            existingUser = {'email':email}
            userExists=userCollection.find_one(existingUser)

            if userExists:
                print(userExists)
                userCollection.delete_one(existingUser)
                response_object['data']='success'
                response_object['message']='User deleted successfully'
            else:
                response_object['data']='error'
                response_object['message'] ="User not deleted."
        except:
                response_object['data']='error'
                response_object['message'] ="Something went wrong while processing the user create request! Please try again."
        return response_object, 201

api.add_resource(ChangePassword,'/changePassword')
api.add_resource(Login,'/login')
api.add_resource(GetDetails,'/getDetails')
api.add_resource(Register,'/register')
api.add_resource(UpdateDetails,'/updateDetails')
api.add_resource(DeleteUser,'/deleteUser')

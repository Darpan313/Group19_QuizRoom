
#Author: Darpan Patel (B00843607)
from flask import Flask, request
from flask_cors import CORS
import json
# from ping import ping_blueprint

app = Flask(__name__, static_folder="../build", static_url_path='/')
CORS(app)

@app.route('/', methods=['GET'])
def index():
	return app.send_static_file('index.html')

@app.errorhandler(404)   
def not_found(e):   
	return app.send_static_file('index.html')
	
#Author - Deepkumar Dharmeshnhai Patel (B00845028)
from createClass import class_blueprint
app.register_blueprint(class_blueprint, url_prefix='/class')


#Author - Darpan Patel (B00843607)
from report import report_blueprint
app.register_blueprint(report_blueprint)

#Author - Darpan Patel (B00843607)
from analytics import analytics_blueprint
app.register_blueprint(analytics_blueprint)

#Author - Krutarth Patel (B00835794)
from faq import faq_blueprint
app.register_blueprint(faq_blueprint)

#Author - Krutarth Patel (B00835794)
from addQuestions import addQuestion_blueprint
app.register_blueprint(addQuestion_blueprint)

#Author - Krutarth Patel (B00835794)
from support import support_blueprint
app.register_blueprint(support_blueprint)

#Author - Shwetha Subash (B00852743)
from profileManagement import profileManagement_blueprint
app.register_blueprint(profileManagement_blueprint)

#Author - Yuganthi Krishnamurthy (B00839935)
from quiz import quiz_blueprint
app.register_blueprint(quiz_blueprint)

#Author - Niharika Prasad (B00835801)
from getcertificate import getcertificate_blueprint
app.register_blueprint(getcertificate_blueprint)

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000,debug=True)


#author: Darpan Patel (B00843607)
from flask import Flask, request
from flask_cors import CORS
import json

app = Flask(__name__, static_folder="../build", static_url_path='/')
CORS(app)

@app.route('/')
def index():
	print('hello')
	return app.send_static_file('index.html')

@app.errorhandler(404)   
def not_found(e):   
  return app.send_static_file('index.html')

from ping import ping_blueprint
app.register_blueprint(ping_blueprint)

from report import report_blueprint
app.register_blueprint(report_blueprint)

#Krutarth Patel (B00835794)
from faq import faq_blueprint
app.register_blueprint(faq_blueprint)

#Krutarth Patel (B00835794)
from support import support_blueprint
app.register_blueprint(support_blueprint)

#Author - Shwetha Subash (B00852743)
from profileManagement import profileManagement_blueprint
app.register_blueprint(profileManagement_blueprint)

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000)

from flask import Flask, request
import json
from createClass import class_blueprint
from flask_cors import CORS
# from ping import ping_blueprint

app = Flask(__name__, static_folder="../build", static_url_path='/')
CORS(app)

@app.route('/', methods=['GET'])
def index():
	print('hello')
	return app.send_static_file('index.html')

@app.errorhandler(404)   
def not_found(e):   
	return "sdlk"
  	# return app.send_static_file('index.html')

# app.register_blueprint(ping_blueprint)
app.register_blueprint(class_blueprint, url_prefix='/class')

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000, debug=True)
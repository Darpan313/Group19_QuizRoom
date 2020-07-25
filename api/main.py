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

if __name__ == '__main__':
	app.run(host='0.0.0.0', port=5000)
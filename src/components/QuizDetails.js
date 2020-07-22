import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class QuizDetails extends Component{

    saveAndContinue = (e) => {
        if(!(this.props.values.quizTitle||this.props.values.timer||this.props.values.category)){
            alert('All fields are required!')
        }
        else{
        e.preventDefault()
        this.props.nextStep();
        }
    }

    onChange = () => {
        this.props.handleCheck('checked')

    }

    

    render(){
        const { values } = this.props;
        return(
            
            <Form >
                <div class="row align-items-center h-100">
              <div className="col-4 mx-auto">
                <h1 className="ui centered col-lg-12">Enter Quiz Details</h1>
                <Form.Field>
                <div className="col-lg-12">
                    <div className="col-lg-12"> Question Title </div>
                    <input
                    placeholder='Quiz title'
                    className="col-lg-12 form-control"
                    onChange={this.props.handleChange('quizTitle')}
                    defaultValue={values.quizTitle}
                    />
                    </div>
                </Form.Field>
                <Form.Field>
                <div className="col-lg-12">
                    <div className="col-lg-12"> Timer </div>
                    <input
                    placeholder='Timer'
                    className="col-lg-12 form-control"
                    onChange={this.props.handleChange('timer')}
                    defaultValue={values.timer}
                    type="number"
                    />
                    </div>
                </Form.Field>
                <Form.Field>
                <div className="col-lg-12">
                    <div className="col-lg-12"> Category </div>
                    <input
                    type='category'
                    placeholder='Category'
                    className="col-lg-12 form-control"
                    onChange={this.props.handleChange('category')}
                    defaultValue={values.category}
                    />
                    </div>
                    <div className="col-lg-12">
                    <div className="col-lg-12"> Import from Existing Quiz </div>
                        {/* <input type="checkbox" onChange={this.onChange}></input>
                        <label className="m-l-10">Import from Existing Quiz?</label>
                        <div>
                        {this.props.values.checked && */}
                            <select className="col-lg-12 form-control">
                            <option>Select Quiz</option>
                            <option>Quiz 1</option>
                            <option>Quiz 2</option>
                            <option>Quiz 3</option>
                            <option>Quiz 4</option>
                        </select>
                        {/* }
                        </div> */}
                    </div>
                </Form.Field>
                <Button variant="primary" className=" m-t-20 m-l-20" onClick={this.saveAndContinue}>Save And Continue </Button>
                </div>
            </div>
            </Form>
            
        )
    }
}

export default QuizDetails;
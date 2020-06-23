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
                <h1 className="ui centered">Enter Quiz Details</h1>
                <Form.Field>
                <div className="col-md-12">
                    <div className=""> Question Title </div>
                    <input
                    placeholder='Quiz title'
                    className="col-md-4"
                    onChange={this.props.handleChange('quizTitle')}
                    defaultValue={values.quizTitle}
                    />
                    </div>
                </Form.Field>
                <Form.Field>
                <div className="col-md-12">
                    <div className=""> Timer </div>
                    <input
                    placeholder='Timer'
                    className="col-md-4"
                    onChange={this.props.handleChange('timer')}
                    defaultValue={values.timer}
                    type="number"
                    />
                    </div>
                </Form.Field>
                <Form.Field>
                <div className="col-md-12">
                    <div className=""> Category </div>
                    <input
                    type='category'
                    placeholder='Category'
                    className="col-md-4"
                    onChange={this.props.handleChange('category')}
                    defaultValue={values.category}
                    />
                    </div>
                    <div className="col-md-12">
                    <div className=""> Import from Existing Quiz </div>
                        {/* <input type="checkbox" onChange={this.onChange}></input>
                        <label className="m-l-10">Import from Existing Quiz?</label>
                        <div>
                        {this.props.values.checked && */}
                            <select className="col-md-4">
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
                <Button className="m-t-20 m-l-20" onClick={this.saveAndContinue}>Save And Continue </Button>
            </Form>
        )
    }
}

export default QuizDetails;
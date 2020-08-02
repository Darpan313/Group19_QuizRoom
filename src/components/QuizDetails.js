import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';

class QuizDetails extends Component {

    saveAndContinue = (e) => {
        if (this.props.values.quizTitle.length <= 0 || this.props.values.timer.length <= 0 || this.props.values.category.length <= 0) {
            alert('All fields are required!')
        }
        else {
            e.preventDefault()
            this.props.nextStep();
        }
    }

    onChange = () => {
        this.props.handleCheck('checked')

    }

    render() {
        const { values } = this.props;
        return (

            <Form >
                <div className="row align-items-center h-100">
                    <div className="col-4 mx-auto">
                        <h1 className="ui centered col-lg-12">Enter Quiz Details</h1>
                        <Form.Field>
                            <div className="col-md-12 m-t-10">
                                <div> Quiz Title </div>
                                <input
                                    placeholder='Quiz title'
                                    className="col-lg-12 form-control"
                                    onChange={this.props.handleChange('quizTitle')}
                                    defaultValue={values.quizTitle}
                                />
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className="col-md-12 m-t-10">
                                <div> Timer </div>
                                <input
                                    placeholder='Timer'
                                    className="col-lg-12 form-control"
                                    onChange={this.props.handleChange('timer')}
                                    defaultValue={values.timer}
                                    min='1'
                                    type="number"
                                />
                            </div>
                        </Form.Field>
                        <Form.Field>
                            <div className="col-md-12 m-t-10">
                                <div> Category </div>
                                <input
                                    type='category'
                                    placeholder='Category'
                                    className="col-lg-12 form-control"
                                    onChange={this.props.handleChange('category')}
                                    defaultValue={values.category}
                                />
                            </div>
                            {/* <div className="col-md-12 m-t-10">
                                <div> Import from Existing Quiz </div>
                                <input type="checkbox" onChange={this.onChange}></input>
                                <label className="m-l-10">Import from Existing Quiz?</label>
                                <div>
                                    {this.props.values.checked &&
                                        <select className="col-lg-12 form-control">
                                            <option>Select Quiz</option>
                                            <option>Quiz 1</option>
                                            <option>Quiz 2</option>
                                            <option>Quiz 3</option>
                                            <option>Quiz 4</option>
                                        </select>
                                    }
                                </div>
                            </div> */}
                        </Form.Field>
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4"></div>
                                <div className="col-md-4">
                                    <Button variant="primary" className="m-t-20 mt-3 btn btn-primary" onClick={this.saveAndContinue}>Continue </Button>
                                </div>
                                <div className="col-md-4"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </Form>

        )
    }
}

export default QuizDetails;
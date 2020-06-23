import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';


class QuestionDetails extends Component{
    

    back  = (e) => {
        e.preventDefault();
        this.props.prevStep();
        
    }

    checkFields = () => {
        if(!(this.props.values.question||this.props.values.answerOption)){
            alert('All fields are required!')
        }
        else{
        alert('Quiz Created');
        }
    }


    samePage = (e) => {
        e.preventDefault();
        this.props.samePage();
    }

    render(){
        const { values } = this.props
        return(
        <Form color='blue' >
            <h1 className="ui centered">Add Question</h1>
            <Form.Field>
            <div className="col-md-12 m-t-10">
                            <div>Question</div>
                            <textarea name="question"  onChange={this.props.handleChange('question')}
                    defaultValue={values.question} className="col-md-6 h-200"></textarea>
                        </div>
                        <div className="col-md-12 m-t-10">
                            <div>Answer Type</div>
                            <select className="col-md-6"

                                onChange={this.props.handleChange('answerOption')}
                                defaultValue={values.answerOption}>
                                     
                                <option>Select Answer Option</option>
                                <option>Free Text</option>
                                <option>Numeric</option>
                                <option>MCQ Choose Multiple</option>
                                <option>MCQ Choose one</option>
                            </select>
                        </div>
                        
                        {this.props.values.answerOption === 'Free Text' &&
                            <div className="col-md-12 m-t-10">
                                <div>Correct Answer</div>
                                <textarea name="freeText" onChange={this.props.handleChange('freeText')}
                                defaultValue={values.freeText} className="col-md-6 h-200"></textarea>
                                <div><i className="warning ">Type the correct answer</i></div>
                            </div>
                        }
                        {this.props.values.answerOption === 'Numeric' &&
                            <div className="col-md-12 m-t-10">
                                <div>Correct Answer</div>
                                <input name="numeric" onChange={this.props.handleChange('numeric')}
                                defaultValue={values.numeric} type="number" min='0' className="col-md-6" />
                                <div><i className="warning ">Type the correct answer</i></div>
                            </div>
                        }
                        {this.props.values.answerOption === 'MCQ Choose one' &&
                            <div>
                                <div className="col-md-12 m-t-10">Options</div>
                                <div className="col-md-12 m-t-10">
                                    <input name="mcq" type="radio"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div className="col-md-12 m-t-10">
                                    <input name="mcq" type="radio"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div className="col-md-12 m-t-10">
                                    <input name="mcq" type="radio"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div className="col-md-12 m-t-10">
                                    <input name="mcq" type="radio"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div><i className="warning m-l-45">Select the correct answer</i></div>
                            </div>
                        }
                        {this.props.values.answerOption === 'MCQ Choose Multiple' &&
                            <div>
                                <div className="col-md-12 m-t-10">Options</div>
                                <div className="col-md-12 m-t-10">
                                    <input type="checkbox"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div className="col-md-12 m-t-10">
                                    <input type="checkbox"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div className="col-md-12 m-t-10">
                                    <input type="checkbox"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div className="col-md-12 m-t-10">
                                    <input type="checkbox"></input>
                                    <input onChange={this.onChange} type="text" className="col-md-6 m-l-20" />
                                </div>
                                <div><i className="warning m-l-45">Check the correct answers</i></div>
                            </div>
                        }

                
            </Form.Field>
            
            <div className="col-md-12 m-t-20">
                <Button onClick={this.back}>Back</Button>
                <Button onclick={this.samePage} className="m-l-10">Add New Question</Button>
                <Button onClick={this.checkFields} className='m-l-10'>Create Quiz </Button>
            </div>
        </Form>
        )
    }
}

export default QuestionDetails;
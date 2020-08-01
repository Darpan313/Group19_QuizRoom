import React, { Component } from 'react';
import { Form, Button } from 'semantic-ui-react';
import { FaRegTrashAlt } from "react-icons/fa";

class QuestionDetails extends Component {


    constructor(props) {
        super(props);
        this.state = {
            id: 0,
            questionSet: []
        };
    }

    back = (e) => {
        e.preventDefault();
        this.props.prevStep();

    }

    checkFields = () => {
        if (!(this.props.values.question || this.props.values.answerOption)) {
            alert('All fields are required!')
        }
        else {
            this.saveQuestionsToDB();
        }
    }

    saveQuestionToList = (e) => {
        this.props.samePage();
        let self = this;
        let id = this.state.id;
        let list = this.state.questionSet;
        // alert(this.props.values.answerOption + " " + this.props.values.question + " " + this.props.values.questionCategory + " " + this.props.values.answer);
        id = id + 1;
        list.push(this.createData(id, this.props.values.question, this.props.values.answer, this.props.values.answerOption, this.props.values.questionCategory));
        this.setState({ id, questionSet: list })

    }

    saveQuestionsToDB = (e) => {
        let rows = this.state.questionSet;
        rows.map((row) => (
            alert(row.question)
        ))
    }


    createData(id, question, answer, answerOption, questionCategory) {
        return { id, question, answer, answerOption, questionCategory };
    }


    samePage = (e) => {
        e.preventDefault();
        this.props.samePage();
    }

    render() {
        const { values } = this.props
        let rows = this.state.questionSet;
        let cnt = 0;
        return (
            <div>
                <section>
                    {rows.map((row) => (
                        <div>
                            <span>
                                Question {row.id}: {row.question}
                            </span>
                            <br />
                            <span>
                                Question Category: {row.questionCategory}
                            </span>
                            <br />
                            <span>
                                Question Type: {row.answerOption}
                            </span>
                            <br />
                            <span>
                                Answer: {row.answer}
                            </span>
                            <br />
                            
                            <div className="column mr-2">
                                <a href="#" style={{ color: "red" }}>
                                    <FaRegTrashAlt name="delete" onClick={() => alert(row.id)} />
                                </a>
                            </div>
                        </div>
                    ))}
                </section>
                <Form color='blue' >
                    <h1 className="ui centered">Add Question</h1>
                    <Form.Field>
                        <div className="col-md-12 m-t-10">
                            <div>Question</div>
                            <textarea name="question" onChange={this.props.handleChange('question')}
                                defaultValue={values.question} className="col-md-6 h-200"></textarea>
                        </div>
                        <div>Question Category</div>
                        <input type="text" onChange={this.props.handleChange('questionCategory')}
                            defaultValue={values.questionCategory} className="col-md-6"></input>
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
                                <textarea name="freeText"
                                    onChange={this.props.handleChange('answer')} defaultValue={values.answer}
                                    className="col-md-6 h-200"></textarea>
                                <div><i className="warning ">Type the correct answer</i></div>
                            </div>
                        }
                        {this.props.values.answerOption === 'Numeric' &&
                            <div className="col-md-12 m-t-10">
                                <div>Correct Answer</div>
                                <input name="numeric" onChange={this.props.handleChange('answer')} defaultValue={values.answer}
                                    type="number" min='0' className="col-md-6" />
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
                        <Button onClick={this.saveQuestionToList} className="m-l-10">Add New Question</Button>
                        <Button onClick={this.checkFields} className='m-l-10'>Create Quiz </Button>
                    </div>
                </Form>
            </div>
        )
    }
}

export default QuestionDetails;
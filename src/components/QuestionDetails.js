import React, { Component } from 'react';
import { Form, RadioGroup, Button } from 'semantic-ui-react';
import { FormControl, FormLabel, ControlLabel } from "react-bootstrap";
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
        if (this.state.questionSet.length < 1) {
            alert('Please add questions!')
        }
        else {
            this.saveQuestionsToDB();
        }
    }

    saveQuestionToList = (e) => {

        let prev = this.state.prevAns;
        if (this.props.values.question.length <= 0 || this.props.values.answer.length <= 0 || this.props.values.answerOption.length <= 0 || ((this.props.values.answerOption == "MCQ Choose one" || this.props.values.answerOption == "MCQ Choose Multiple") && (this.props.values.option1.length <= 0 || this.props.values.option2.length <= 0 || this.props.values.option3.length <= 0 || this.props.values.option4.length <= 0))) {
            alert("Please enter all details!");
        } else {
            let id = this.state.id;
            let list = this.state.questionSet;
            // alert(this.props.values.answerOption + " " + this.props.values.question + " " + this.props.values.questionCategory + " " + this.props.values.answer + ": " + this.props.values.option1 + ", " + this.props.values.option2 + ", " + this.props.values.option3 + ", " + this.props.values.option4);
            list.push(this.createData(id, this.props.values.question, this.props.values.marks, this.props.values.answer, this.props.values.answerOption, this.props.values.questionCategory, this.props.values.option1, this.props.values.option2, this.props.values.option3, this.props.values.option4));
            id = id + 1;
            this.setState({ id, questionSet: list })
        }
    }

    deleteQuestionFromList = (id) => {
        let list = this.state.questionSet;
        list.splice(id, 1);

        for (var i = 0; i < list.length; i++) {
            list[i].id = i;
        }

        this.setState({ id: list.length });
        this.setState({ questionSet: list });
        // console.log(id);
        // console.log(list);
    }

    saveQuestionsToDB = (e) => {
        let rows = this.state.questionSet;
        let quiz = []
        quiz.push(this.props.values.quizTitle)
        quiz.push(this.props.values.timer)
        quiz.push(this.props.values.category)
        // alert(JSON.stringify(rows));
        // alert(JSON.stringify(quiz));

        fetch(`https://web-service-g19-quiz-app.herokuapp.com/addQuestions?questions=` + JSON.stringify(rows) + '&quiz=' + JSON.stringify(quiz));
        alert("Questions added!");
        window.location.reload()

    }

    createData(id, question, marks, answer, answerOption, questionCategory, option1, option2, option3, option4) {
        return { id, question, marks, answer, answerOption, questionCategory, option1, option2, option3, option4 };
    }

    createQuizData(title, timer, category) {
        return { title, timer, category };
    }

    samePage = (e) => {
        e.preventDefault();
        this.props.samePage();
    }

    render() {
        const { values } = this.props
        let rows = this.state.questionSet;
        let self = this;
        return (
            <div class="row">
                <div class="col-md-6">
                    <Form color='blue' >
                        <h1 className="ui centered col-lg-12">Add Question</h1>
                        <Form.Field>
                            <div className="col-md-12 m-t-10">
                                <div>Question</div>
                                <textarea name="question" onChange={this.props.handleChange('question')}
                                    defaultValue={values.question} className="col-md-12 h-200" ></textarea>
                            </div>
                            <div className="col-md-12 m-t-10">
                                <div>Question Category</div>
                                <input type="text" onChange={this.props.handleChange('questionCategory')}
                                    defaultValue={values.questionCategory} className="col-md-12" placeholder="Optional"></input>
                            </div>
                            <div className="col-md-12 m-t-10">
                                <div>Marks</div>
                                <input type="number" min='1' onChange={this.props.handleChange('marks')}
                                    defaultValue={values.marks} className="col-md-12" ></input>
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
                                    <br />
                                    <div>Correct Answer</div>
                                    <textarea name="freeText"
                                        onChange={this.props.handleChange('answer')} defaultValue={values.answer}
                                        className="col-md-12 h-200" ></textarea>
                                    <div><i className="warning ">Type the correct answer</i></div>
                                </div>
                            }
                            {this.props.values.answerOption === 'Numeric' &&
                                <div className="col-md-12 m-t-10">
                                    <br />
                                    <div>Correct Answer</div>
                                    <input name="numeric" onChange={this.props.handleChange('answer')} defaultValue={values.answer}
                                        type="number" min='0' className="col-md-12" />
                                    <div><i className="warning ">Type the correct answer</i></div>
                                </div>
                            }
                            {this.props.values.answerOption === 'MCQ Choose one' &&

                                <div>
                                    <br />
                                    <div className="col-md-12 m-t-10">Options</div>
                                    <br />
                                    <div className="col-md-12 m-t-10">
                                        <input name="mcq" type="radio" name="type" value={values.option1} onChange={this.props.handleChange('answer')}></input>
                                        <input type="text" onChange={self.props.handleChange('option1')} defaultValue={values.option1} className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10">
                                        <input name="mcq" type="radio" name="type" value={values.option2} onChange={this.props.handleChange('answer')}></input>
                                        <input type="text" onChange={self.props.handleChange('option2')} defaultValue={values.option2} className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10">
                                        <input name="mcq" type="radio" name="type" value={values.option3} onChange={this.props.handleChange('answer')}></input>
                                        <input type="text" onChange={self.props.handleChange('option3')} defaultValue={values.option3} className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10">
                                        <input name="mcq" type="radio" name="type" value={values.option4} onChange={this.props.handleChange('answer')}></input>
                                        <input type="text" onChange={self.props.handleChange('option4')} defaultValue={values.option4} className="col-md-8 m-l-20" />
                                    </div>
                                    <div><i className="warning m-l-45">Select the correct answer</i></div>
                                </div>
                            }
                            {this.props.values.answerOption === 'MCQ Choose Multiple' &&
                                <div>
                                    <br />
                                    <div className="col-md-12 m-t-10">Options</div>
                                    <br />
                                    <div className="col-md-12 m-t-10">
                                        <input type="checkbox" value={values.option1} onChange={this.props.handleChange('answer')} ></input>
                                        <input onChange={self.props.handleChange('option1')} defaultValue={values.option1} type="text" className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10">
                                        <input type="checkbox" value={values.option2} onChange={this.props.handleChange('answer')}></input>
                                        <input onChange={self.props.handleChange('option2')} defaultValue={values.option2} type="text" className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10">
                                        <input type="checkbox" value={values.option3} onChange={this.props.handleChange('answer')}></input>
                                        <input onChange={self.props.handleChange('option3')} defaultValue={values.option3} type="text" className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10">
                                        <input type="checkbox" value={values.option4} onChange={this.props.handleChange('answer')}></input>
                                        <input onChange={self.props.handleChange('option4')} defaultValue={values.option4} type="text" className="col-md-8 m-l-20" />
                                    </div>
                                    <div className="col-md-12 m-t-10"><i className="warning m-l-45">Check the correct answers</i></div>
                                </div>
                            }


                        </Form.Field>

                        <div className="col-md-12 m-t-20">
                            <div className="row">
                                <div className="col-md-4">
                                    <Button className='mt-3 btn btn-primary col-md-12' onClick={this.back}>Back</Button>
                                </div>
                                <div className="col-md-4">
                                    <Button className='mt-3 btn btn-primary col-md-12' onClick={this.saveQuestionToList}>Add Question</Button>
                                </div>
                                <div className="col-md-4">
                                    <Button className='mt-3 btn btn-primary col-md-12' onClick={this.checkFields}>Create Quiz </Button>
                                </div>
                            </div>
                        </div>
                    </Form>
                </div>
                <div className="col-md-6 sliderDiv">
                    <div>
                        <div className="d-md-flex">
                            <div className="overflow-auto p-3  mr-md-3 sliderQuestion">
                                {rows.length > 0 &&
                                    <h1 className="ui centered">Questions Added</h1>
                                }
                                {rows.map((row) => (
                                    <div>
                                        <div className="col-lg-12">
                                            <b><u>Question {row.id + 1}:</u></b> {row.question}
                                &nbsp;&nbsp;&nbsp;&nbsp;
                                <FaRegTrashAlt onClick={this.deleteQuestionFromList.bind(this, row.id)} />

                                        </div>
                                        <br />
                                        {(row.questionCategory.length > 0 &&
                                            <div>
                                                <div className="col-lg-12">
                                                    <b>Question Category: </b>{row.questionCategory}
                                                </div>
                                                <br />
                                            </div>
                                        )}
                                        <div className="col-lg-12">
                                            <b>Question Type: </b>{row.answerOption}
                                        </div>
                                        <br />

                                        {(row.answerOption === 'MCQ Choose one' || row.answerOption === 'MCQ Choose Multiple') &&
                                            <div>
                                                <div className="col-lg-12">
                                                    <b>Options: </b>{row.option1}, {row.option2}, {row.option3}, {row.option4}
                                                </div>
                                                <br />
                                            </div>
                                        }
                                        <div className="col-lg-12">
                                            <b>Answer: </b>{row.answer}
                                        </div>
                                        <br />
                                        <div className="col-lg-12">
                                            <b>Marks: </b>{row.marks}
                                        </div>
                                        <br />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default QuestionDetails;
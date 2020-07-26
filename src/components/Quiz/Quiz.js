/* Author: Yuganthi Krishnamurthy
Banner number : B00839935 */
import React, { Component } from "react";
import "./Quiz.css";
// https://medium.com/better-programming/building-a-simple-countdown-timer-with-react-4ca32763dda7

class Quiz extends Component {
    state = {
        currentQuestion: {},
        minutes: 1,
        seconds: 0,
        questionSet: []
    }
    componentWillMount() {

        this.quiz_functionalities.startQuiz()

    }
    shouldComponentUpdate(prevProps, nextState) {
        return true;
    }
    componentDidMount() {
        this.myInterval = setInterval(() => {
            const { seconds, minutes } = this.state

            if (seconds > 0) {
                this.setState(({ seconds }) => ({
                    seconds: seconds - 1
                }))
            }
            if (seconds === 0) {
                if (minutes === 0) {
                    clearInterval(this.myInterval)
                } else {
                    this.setState(({ minutes }) => ({
                        minutes: minutes - 1,
                        seconds: 59
                    }))
                }
            }
        }, 1000)
    }
    componentWillUnmount() {
        clearInterval(this.myInterval)
    }

    quiz_functionalities = {
        startQuiz: () => {
            const url = "https://web-service-g19-quiz-app.herokuapp.com/fetchQuestions";
            let temp_Question_Set = []
            fetch(url)
                .then(res => res.json())
                .then(
                    (result) => {
                        for(var i=0;i<result.QuestionSet.length;i++){
                            temp_Question_Set.push(result.QuestionSet[i])
                        }
                        this.setState({questionSet:temp_Question_Set,currentQuestion:temp_Question_Set[0]});
                    },
                    (error) => {
                        this.setState({
                            isLoaded: true,
                            error
                        });
                    }
                )

        },
        selectNext: (arg) => {
            let index = this.state.questionSet.findIndex(question => question.questionId == arg + 1);
            let question = this.state.questionSet[index]
            this.setState({ currentQuestion: question });
        },
        selectPrevious: (arg) => {
            let index = this.state.questionSet.findIndex(question => question.questionId == arg - 1);
            let question = this.state.questionSet[index]
            this.setState({ currentQuestion: question });
        },
        onSingleSelect: (options, questionId) => {
            let question_bank = this.state.questionSet;
            question_bank.map((question_obj) => {
                if (question_obj.questionId == questionId) {
                    question_obj.selectedOption = !question_obj.selectedOption;
                    question_obj.options.map((opt) => {
                        if (opt.id == options.id) {
                            opt.isChecked = !opt.isChecked
                        }else{
                            opt.isChecked = false
                        }
                    })
                }
            })
            this.setState({ questionSet: question_bank })
        },
        onMultiSelect: (questionSet, questionId) => {
            let question_bank = this.state.questionSet;
            question_bank.map((question_obj) => {
                if (question_obj.questionId == questionId) {
                    question_obj.selectedOption = !question_obj.selectedOption;
                    question_obj.options.map((opt) => {
                        if (opt.id == questionSet.id) {
                            opt.isChecked = !opt.isChecked
                        }
                    })
                }
            });
            this.setState({ questionSet: question_bank })

        },
        onSelectQuestions: (question) => {
            this.setState({ currentQuestion: question })
        },
        sampleFunction: () => {
            alert("You are out of time!.  Press OK to submit the quiz!!")
            this.quiz_functionalities.submitQuiz();
        },
        submitQuiz: () => {
            window.location = "/certificate";
        }

    }
    render() {
        const { minutes, seconds } = this.state
        let question = null;
        if (this.state.currentQuestion.type == "single") {
            question = this.state.currentQuestion.options.map((questionSet) => {
                return <div className="optionContainer"><input type="radio" key={questionSet.id}
                    checked={questionSet.isChecked}
                    onChange={() => this.quiz_functionalities.onSingleSelect(questionSet, this.state.currentQuestion.questionId)} />
                    <span className="options">{questionSet.value}</span>
                </div>

            })
        }
        else if (this.state.currentQuestion.type == "multiple") {
            question = this.state.currentQuestion.options.map((questionSet) => {
                return <div className="optionContainer">
                    <form>
                        <input key={questionSet.id} type="checkbox" checked={questionSet.isChecked}
                            onChange={() => this.quiz_functionalities.onMultiSelect(questionSet, this.state.currentQuestion.questionId)} />
                        <label className="option_align_left">{questionSet.value}</label>
                    </form>
                </div>

            })
        }
        let question_status = this.state.questionSet.map(question => {
            if (question.questionId == this.state.currentQuestion.questionId) {
                return <div className="questionNumberSelected" onClick={() => this.quiz_functionalities.onSelectQuestions(question)}>{question.questionId}</div>
            } else if (question.selectedOption) {
                return <div className="questionNumberAnswered" onClick={() => this.quiz_functionalities.onSelectQuestions(question)}>{question.questionId}</div>
            } else {
                return <div className="questionNumberDisplay" onClick={() => this.quiz_functionalities.onSelectQuestions(question)}>{question.questionId}</div>
            }
        })
        return (
            <section>
                <div>
                    {minutes === 0 && seconds === 0
                        ? [this.quiz_functionalities.sampleFunction()]
                        : minutes === 0 && seconds <= 20 ? <h2 className="warning">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2> : <h2 className="timer">Time Remaining: {minutes}:{seconds < 10 ? `0${seconds}` : seconds}</h2>
                    }
                </div>
                <div className="row">
                    {/* https://www.geeksforgeeks.org/meaning-of-numbers-in-col-md-4-col-xs-1-col-lg-2-in-bootstrap/ */}
                    <section className="col-lg-7 col-md-7 col-sm-12 col-xs-12">
                        <div className="quizSection">
                            {this.state.currentQuestion && this.state.currentQuestion.questionId ?
                                <div>
                                    <div>
                                        <div className="questionNumbers">QUESTION {this.state.currentQuestion.questionId}</div>
                                        <div className="questionFormat">{this.state.currentQuestion.question}</div>
                                        {question}
                                    </div>
                                    <div>
                                        {(this.state.currentQuestion.questionId == this.state.questionSet.length) ? null :
                                            <button className="controlButtonsNext" onClick={() => this.quiz_functionalities.selectNext(this.state.currentQuestion.questionId)}>Next</button>
                                        }
                                        {this.state.currentQuestion.questionId >= 2 ? <button className="controlButtonsPrevious" onClick={() => this.quiz_functionalities.selectPrevious(this.state.currentQuestion.questionId)}>Previous</button> : null}
                                    </div>

                                </div> : null
                            }
                        </div>
                    </section>
                    <section className="col-lg-5 col-md-5 col-sm-12 col-xs-12">
                        <article className="questionContainer">
                            <div>
                                <div className="questionHeading">Questions</div>
                                {question_status}
                            </div>
                            <div className="legendAnswered">
                                <span className="legendAnsweredStyle"></span>
                                <span className="legendAnsweredText" >Answered</span>
                            </div>
                            <div className="legendUnAnswered">
                                <span className="legendUnAnsweredStyle"></span>
                                <span className="legendUnAnsweredText">Un-answered</span>
                            </div>
                            <div className="legendSelected" >
                                <span className="legendSelectedStyle"></span>
                                <span className="legendSelectedText" >Selected</span>
                            </div>
                            <div onClick={this.quiz_functionalities.submitQuiz} className="submitQuiz">Submit answers for this quiz</div>
                        </article>
                    </section>
                </div>
            </section>
        );
    }

}
export default Quiz;

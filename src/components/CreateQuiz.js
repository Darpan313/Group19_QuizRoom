
import React, { Component } from 'react';
import QuizDetails from './QuizDetails';
import QuestionDetails from './QuestionDetails';

class CreateQuiz extends Component {
    state = {
        step: 1,
        quizTitle: '',
        timer: '',
        category: '',
        question: '',
        marks:1,
        freeText: '',
        numeric: '',
        mcqChooseOne: '',
        mcqChooseMultiple: '',
        answerOption: '',
        checked : 0,
        questionCategory: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: ''
    }


    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    samePage = () => {
        
        const { step } = this.state
        this.setState({
            step : step
        })
    }

    prevStep = () => {
        const { step } = this.state
        this.setState({
            step : step - 1
        })
    }

    handleCheck = input => event => {
        ;
        this.setState({ [input] : event.target.value })
        this.setState({checked: !this.state.checked});
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
        
    }

    render(){
        const {step} = this.state;
        const { quizTitle,timer,category,question, marks, answerOption,checked, questionCategory, answer, option1, option2, option3, option4 } = this.state;
        const values = {  quizTitle,timer,category,question,answerOption,checked };
        const valuesQuestion = {  quizTitle,timer,category, question, marks, answerOption, questionCategory, answer, checked, option1, option2, option3, option4 };
        switch(step) {
        case 1:
            return <QuizDetails 
                    nextStep={this.nextStep} 
                    handleChange = {this.handleChange}
                    handleCheck={this.handleCheck}
                    values={values}
                    />
        case 2:
            return <QuestionDetails
                   
                    prevStep={this.prevStep}
                    samePage={this.samePage}
                    handleChange = {this.handleChange}
                    
                    values={valuesQuestion}
                    />
        default: 
            return null;
        }
    }
}

export default CreateQuiz;

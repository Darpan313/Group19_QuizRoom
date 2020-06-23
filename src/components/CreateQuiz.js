
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
        freeText: '',
        numeric: '',
        mcqChooseOne: '',
        mcqChooseMultiple: '',
        answerOption: '',
        checked : 0
    }


    nextStep = () => {
        const { step } = this.state
        this.setState({
            step : step + 1
        })
    }

    samePage = () => {
        debugger;
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
        debugger;
        this.setState({ [input] : event.target.value })
        this.setState({checked: !this.state.checked});
    }

    handleChange = input => event => {
        this.setState({ [input] : event.target.value })
        
    }

    render(){
        const {step} = this.state;
        const { quizTitle,timer,category,question,answerOption,checked } = this.state;
        const values = {  quizTitle,timer,category,question,answerOption,checked };
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
                    
                    values={values}
                    />
        default: 
            return null;
        }
    }
}

export default CreateQuiz;

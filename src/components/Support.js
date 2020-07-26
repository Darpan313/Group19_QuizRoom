//author: Krutarth Patel (B00835794)
import React, { Component } from "react";
import emailjs from 'emailjs-com';

function createData(question, answer) {
    return { question, answer };
}

export default class Support extends Component {

    constructor(props) {
        super(props);
        //designed state to store the FAQs fetched from the database
        //format rows -> question, answer
        this.state = {
            faqs: [],
            email: "",
            subject: "",
            message: ""
        };
    }

    //to fetch the question from the database when component becomes active
    componentDidMount() {
        fetch(`https://web-service-g19-quiz-app.herokuapp.com/faq`)
            .then(response => response.json())
            .then((data) => {
                let i = 0
                let questionList = []

                //iterate through the list of questions fetched and add them to the state
                for (i; i < data.length; i++) {
                    questionList.push(createData(data[i]["question"], data[i]["answer"]))
                    this.setState({ faqs: questionList })
                }
            });
    }

    //saves the message entered in the textfield to the state object
    handleMessageChange(e) {
        this.setState({ message: e.target.value });
    }

    //saves the email address entered in the textfield to the state object
    handleEmailChange(e) {
        this.setState({ email: e.target.value });
    }

    //saves the subject entered in the textfield to the state object
    handleSubjectChange(e) {
        this.setState({ subject: e.target.value });
    }

    sendEmail = (e) => {
        e.preventDefault();

        //save context
        let self = this;

        //Reference: https://stackoverflow.com/questions/55795125/how-to-send-email-from-my-react-web-application
        //Format - emailjs.sendForm('serviceID', 'templateID', target address, 'userID')
        emailjs.sendForm('gmail', 'help_team', e.target, 'user_WCE3K6J0MJmpEMk0m5IYq')  //Sends the email request to the help team
        emailjs.sendForm('gmail', 'template_PjL3dMN0', e.target, 'user_WCE3K6J0MJmpEMk0m5IYq')  //Sends an acknowledgement email to the user using emailjs library
            .then((result) => {
                let email = self.refs.email.value;
                let subject = self.refs.subject.value;
                let message = self.refs.message.value;

                //Save user request in database  
                fetch(`https://web-service-g19-quiz-app.herokuapp.com/support?email=` + email + `&subject=` + subject + `&message=` + message);
                alert("Email sent!");
                window.location.reload()
            }, (error) => {
                console.log(error.text);
            });
    }

    render() {
        let rows = this.state.faqs;
        return (
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-7 border-right">
                        <header>
                            <h2 className="text-center"><b>FAQs!</b></h2><br />
                        </header>
                        <div className="col-md-12 sliderDiv">
                            <div>
                                <div className="d-md-flex">
                                    <div className="overflow-auto p-3  mr-md-3 sliderFAQ">
                                        <section>
                                            {/* iterate through all retrieved questions to render the questions on the webpage */}
                                            {rows.map((row) => (
                                                <div>
                                                    <h3 className="head">{row.question}     {/* Render the FAQ question in the webpage */}
                                                    </h3>
                                                    <p className="text">    {/* Render the FAQ answer in the webpage */}
                                                        {row.answer}
                                                    </p>
                                                </div>
                                            ))}
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="container center">
                            <header>
                                <h2 className="text-center"><b>Send us a message!</b></h2><br />
                            </header>
                            <div className="supportFormPanel">
                                {/* Submit the form details to emailjs using 'sendEmail' function */}
                                <form className="form-signin" onSubmit={this.sendEmail}>
                                    <input className="form-control textfields" type="email" id="email" name="email" ref="email" value={this.state.email} onChange={e => this.handleEmailChange(e)} placeholder="Email" required autoFocus />
                                    <input className="form-control textfields" id="subject" name="subject" type="text" ref="subject" value={this.state.subject} onChange={e => this.handleSubjectChange(e)} placeholder="Subject" required />
                                    <textarea className="form-control textfields" rows="5" id="message" name="message" ref="message" value={this.state.message} onChange={e => this.handleMessageChange(e)} placeholder="Message" required></textarea>
                                    <button className="btn btn-primary supportButton">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
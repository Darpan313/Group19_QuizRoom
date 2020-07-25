// author: Krutarth Patel (B00835794)
import React, { Component, useEffect } from "react";
import emailjs from 'emailjs-com';

function createData(question, answer) {
    return { question, answer };
}

//sends an acknowledgement email to the user using emailjs library
function sendEmail(e) {
    e.preventDefault();

    //format - emailjs.sendForm('serviceID', 'templateID', target address, 'userID')
    emailjs.sendForm('gmail', 'template_PjL3dMN0', e.target, 'user_WCE3K6J0MJmpEMk0m5IYq')
        .then((result) => {
            alert("Email sent!");
            window.location.reload()
        }, (error) => {
            console.log(error.text);
        });
}

export default class Support extends Component {

    constructor(props) {
        super(props);
        //designed state to store the FAQs fetched from the database
        //format rows -> question, answer
        this.state = {
            rows: [],
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
                    this.setState({ rows: questionList })
                }
            });
    }

    render() {
        let rows = this.state.rows;
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7 border-right">
                        <header>
                            <h2 class="text-center"><b>FAQs!</b></h2><br />
                        </header>
                        <div class="col-md-12 sliderDiv">
                            <div>
                                <div class="d-md-flex">
                                    <div class="overflow-auto p-3  mr-md-3 sliderFAQ">
                                        <section>
                                            {/* iterate through all retrieved questions to render the questions on the webpage */}
                                            {rows.map((row) => (
                                                <div>
                                                    <h3 class="head">{row.question}
                                                    </h3>
                                                    <p class="text">
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
                    <div class="col-md-5">
                        <div class="container center">
                            <header>
                                <h2 class="text-center"><b>Send us a message!</b></h2><br />
                            </header>
                            <div class="supportFormPanel">
                                <form class="form-signin" onSubmit={sendEmail}>
                                    <input class="form-control textfields" type="email" placeholder="Email" required autoFocus />
                                    <input class="form-control textfields" type="text" placeholder="Subject" required />
                                    <textarea class="form-control textfields" rows="5" placeholder="Message" required></textarea>
                                    <button class="btn btn-primary supportButton">Submit</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
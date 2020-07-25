import React, { Component, useEffect } from "react";
import emailjs from 'emailjs-com';
import axios from "axios";

function createData(question, answer) {
    return { question, answer };
}

function sendEmail(e) {
    e.preventDefault();

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
        this.state = {
            rows: [],
        };
    }

    componentDidMount() {
        fetch(`https://web-service-g19-quiz-app.herokuapp.com/faq`)
            .then(response => response.json())
            .then((data) => {
                let i = 0
                let questionList = []
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
                            <center>
                                <h2><b>FAQs!</b></h2><br />
                            </center>
                        </header>
                        <div class="col-md-12 sliderDiv">
                            <div>
                                <div class="d-md-flex">
                                    <div class="overflow-auto p-3  mr-md-3 sliderFAQ">
                                        <section>
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
                        <div class="container">
                            <header>
                                <center>
                                    <h2><b>Send us a message!</b></h2><br />
                                </center>
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
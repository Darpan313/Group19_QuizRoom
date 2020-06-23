import React, { Component } from "react";
export default class Support extends Component {
    render() {
        return (
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-7 border-right">
                        <header>
                            <center>
                            <h2><b>FAQs!</b></h2><br />
                            </center>
                        </header>
                        <section>
                        <h3 class="head">Lorem Ipsum heading
                        </h3>
                        <p class="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p>
                            <a class="btnLink" href="#">View details »</a>
                        </p>
                        <h3 class="head">
                            Lorem Ipsum heading
                        </h3>
                        <p class="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.
                        </p>
                        <p>
                            <a class="btnLink" href="#">View details »</a>
                        </p>
                        <h3 class="head">
                            Lorem Ipsum heading
                        </h3>
                        <p class="text">
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.
                        </p>
                        <p>
                            <a class="btnLink" href="#">View details »</a>
                        </p>
                        </section>
                    </div>
                    <div class="col-md-5">
                        <div class="container">
                            <header>
                                <center>
                                <h2><b>Send us a message!</b></h2><br />
                                </center>
                            </header>
                            <div class="supportFormPanel">
                                <form class="form-signin" onSubmit="alert('sf');">
                                    <input class="form-control textfields" type="email" placeholder="Email" required autoFocus/>
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
import React from 'react';
import logo from '../logo.svg';

export default class Dashboard extends React.Component {
  render() {
    return (
    <div>
      <div class="container-fluid">
              <header class="row">
                <div class="col-md-8">
                  <br/>
                  <h3 class="text-sm-left h3Home">
                    Dashboard
                          </h3>
                </div>
                <div class="col-md-4">
                  <br/>
                  <h3 class="text-sm-left h3Home">
                    New Updates
                          </h3>
                </div>
              </header>
              <div class="row">
                <div class="col-md-8">
                <div class="card">
                  <h5 class="card-header">
                    Details
                  </h5>
                  <div class="card-body border-bottom">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="/classrooms">
                      Classrooms
                    </a>
                    </div>
                    <div class="col-md-1">
                    <p class="card-text anchor-card-text">
                      5
                    </p>
                    </div>
                    </div>
                  </div>
                  <div class="card-body border-bottom">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="/quizzes">
                      Quizzes
                    </a>
                  </div>
                  <div class="col-md-1">
                    <p class="card-text anchor-card-text">
                      7
                    </p>
                    </div>
                  </div>
                  </div>
                  <div class="card-body border-bottom">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="#">
                      Certificates
                    </a>
                  </div>
                  <div class="col-md-1">
                    <p class="card-text anchor-card-text">
                      2
                    </p>
                    </div>
                  </div>
                  </div>  
                </div>
                <br/>
                <div class="card">
                  <h5 class="card-header">
                    Progress
                  </h5>
                  <div class="card-body border-bottom">
                    <a class="card-text anchor-card-text" href="#">
                      Results
                    </a>
                  </div>
                  <div class="card-body border-bottom">
                    <a class="card-text anchor-card-text" href="#">
                      Analytics
                    </a>
                  </div>                 
                </div> 
                <br/>
                <div class="card">
                  <h5 class="card-header">
                    Profile
                  </h5>
                  <div class="card-body border-bottom">
                    <a class="card-text anchor-card-text" href="#">
                      Edit Profile
                    </a>
                  </div>
                  <div class="card-body border-bottom">
                    <a class="card-text anchor-card-text" href="/faqs">
                      FAQs and Support
                    </a>
                  </div>
                </div>
                </div>
                <div class="col-md-4 sliderDiv">
                  <div>
                    <div class="d-md-flex">
                      <div class="overflow-auto p-3  mr-md-3 slider">
                        <div class="sliderImg">
                          <p class="hr"></p>
                          <img src={logo} class="rounded-circle updateImage" alt="Image" />

                          <h5 class="text-center">
                            Lorem ipsum dolor sit amet.
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus.
                          </p>
                          <p class="hr"></p>
                        </div>
                        <section>
                          <h5 class="text-center">
                            Lorem ipsum dolor sit amet.
                          </h5>
                          <p>
                            Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em>
                          </p>
                          <p class="hr"></p>
                        </section>
                        <section>
                          <img src={logo} class="rounded-circle updateImage" alt="Image" />
                          <h5 class="text-center">
                            Lorem ipsum dolor sit amet.
                          </h5>
                          <p>
                            Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em>
                          </p>
                          <p class="hr"></p>
                        </section>
                        <section>
                          <h5 class="text-center">
                            Lorem ipsum dolor sit amet.
                          </h5>
                          <p>
                            Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em>
                          </p>
                          <p class="hr"></p>
                        </section>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
        <p/>
    </div>
    )
  }
}
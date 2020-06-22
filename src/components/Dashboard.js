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
                  <h3>
                    New Updates
                          </h3>
                </div>
              </header>
              <div class="row">
                <div class="col-md-8">
                {/* <div class="tabbable" id="tabs-498512">
						<ul class="nav nav-tabs">
							<li class="nav-item">
								<a class="nav-link active" href="#tab1" data-toggle="tab">Section 1</a>
							</li>
							<li class="nav-item">
								<a class="nav-link" href="#tab2" data-toggle="tab">Section 2</a>
							</li>
						</ul>
						<div class="tab-content">
							<div class="tab-pane active" id="panel-270702">
								<p>
									I'm in Section 1.
								</p>
							</div>
							<div class="tab-pane" id="tab2">
								<p>
									Howdy, I'm in Section 2.
								</p>
							</div>
						</div>
					</div>  */}
                <div class="card">
                  <h5 class="card-header">
                    Details
                  </h5>
                  <div class="card-body">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="#">
                      Courses
                    </a>
                    </div>
                    <div class="col-md-1">
                    <a class="card-text anchor-card-text" href="#">
                      5
                    </a>
                    </div>
                    </div>
                  </div>
                  <div class="card-body">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="#">
                      Quizzes
                    </a>
                  </div>
                  <div class="col-md-1">
                    <a class="card-text anchor-card-text" href="#">
                      7
                    </a>
                    </div>
                  </div>
                  </div>
                  <div class="card-body">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="#">
                      Certificates
                    </a>
                  </div>
                  <div class="col-md-1">
                    <a class="card-text anchor-card-text" href="#">
                      2
                    </a>
                    </div>
                  </div>
                  </div>
                  {/* <div class="card-footer">
                    Quizzes
                  </div> */}
                </div>
                <br/>
                <div class="card">
                  <h5 class="card-header">
                    Progress
                  </h5>
                  <div class="card-body">
                    <a class="card-text anchor-card-text" href="#">
                      Results
                    </a>
                  </div>
                  <div class="card-body">
                    <a class="card-text anchor-card-text" href="#">
                      Analytics
                    </a>
                  </div>
                  {/* <div class="card-body">
                    <a class="card-text anchor-card-text" href="#">
                      Analytics by Results
                    </a>
                  </div> */}
                  {/* <div class="card-footer">
                    Card footer
                  </div> */}
                </div> 
                <div>
                  <br/>
                  <center>
                    <a class="card-text anchor-card-text" href="#">FAQs and Support</a>
                  </center>
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

    </div>
    )
  }
}
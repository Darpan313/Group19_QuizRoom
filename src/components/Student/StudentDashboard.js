import React from 'react';
import logo from '../../logo.svg';

export default class StudentDashboard extends React.Component {
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
                    <a class="card-text anchor-card-text" href="/StudentClassroom">
                      Classrooms
                    </a>
                    </div>
                    <div class="col-md-1">
                    <p class="card-text anchor-card-text">
                      
                    </p>
                    </div>
                    </div>
                  </div>
                  <div class="card-body border-bottom">
                  <div class="row">
                  <div class="col-md-11">
                    <a class="card-text anchor-card-text" href="/StudentQuizzes">
                      Quizzes
                    </a>
                  </div>
                  <div class="col-md-1">
                    <p class="card-text anchor-card-text">
                      
                    </p>
                    </div>
                  </div>
                  </div>
               </div> 
                <br/>
                <div class="card">
                  <h5 class="card-header">
                    Profile
                  </h5>
                  <div class="card-body border-bottom">
                    <a class="card-text anchor-card-text" href="/editprofile">
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
                            Instructors can now access quiz reports!
                          </h5>
                          <p>
                            QuizRoom has rolled out a new feature where the instructors can access a detailed report generated on the basis of quiz participation. The instructors can view statistical information and analyze interesting visualizations pertaining to the quiz results.
                          </p>
                          <p class="hr"></p>
                        </div>
                        <section>
                          <h5 class="text-center">
                            Bug Fixes.
                          </h5>
                          <p>
                            QuizApp received a lot of messages from the users regarding some bugs in the portal. the students faced some issues while appearing for quizzes in their appointed classrooms. Our team worked hard to find out their cause and solve them as early as possible to ensure good user experience. The bugs have been successfully resolved and we apologize for the inconvenience.
                          </p>
                          <p class="hr"></p>
                        </section>
                        <section>
                          <img src={logo} class="rounded-circle updateImage" alt="Image" />
                          <h5 class="text-center">
                            Thank you!
                          </h5>
                          <p>
                            We thank all the applicants who applied to be beta testers of our application. We feel happy to have been able to receive all your feedback that will further help us improve our applications. As a token of appreciation, we would like to offer you a gift card for spending your time in assessing our application. You will receive the details of the gift card on your registered email addresses in the next week.
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
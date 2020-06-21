import React from "react";

export default function Footer() {
  return (
    <>
      <footer id="sticky-footer" class="py-4 bg-dark text-white-50">
        <div class="main-footer widgets-dark typo-light">
          <div class="container">
            <div class="row">
              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget subscribe no-box">
                  <h5 class="widget-title">
                    QuizzRoom<span></span>
                  </h5>
                  <p>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                    Atque suscipit velit tenetur. Consequatur saepe iusto
                    consectetur, dignissimos at quidem facere aperiam eum sed
                    aliquam nesciunt molestiae magnam unde blanditiis explicabo!{" "}
                  </p>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Quick Links<span></span>
                  </h5>
                  <ul class="thumbnail-widget">
                    <li>
                      <div class="thumb-content">
                        <a href="#.">Get Started</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">Team</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">Testimonials</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">News</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">FAQs</a>
                      </div>
                    </li>
                    <li>
                      <div class="thumb-content">
                        <a href="#.">About</a>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Get Started<span></span>
                  </h5>
                  <p>Get access to create, publish & analyze tests.</p>
                  <a class="btn" href="#." target="_blank">
                    Register Now
                  </a>
                </div>
              </div>

              <div class="col-xs-12 col-sm-6 col-md-3">
                <div class="widget no-box">
                  <h5 class="widget-title">
                    Contact Us<span></span>
                  </h5>

                  <p>
                    <a href="mailto:info@domain.com" title="glorythemes">
                      info.quizz@domain.com
                    </a>
                  </p>
                  <ul class="social-footer2">
                    <li>
                      <a
                        title="youtube"
                        target="_blank"
                        href="https://www.youtube.com/"
                      >
                        <i class="fab fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="container text-center">
          <small>Copyright QuizzRoom &copy; 2020. All rights reserved.</small>
        </div>
      </footer>
    </>
  );
}

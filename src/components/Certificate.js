import React from 'react';
import logo from '../logo.svg';
export default function Certificate(){
    return (
        <div>
				<div class="container-fluid">
					<div class="row">
						<div class="col-md-8 border-right">
							<header>
								<h3 class="text-center">
									<b>Certificate of Completion</b>
								</h3>
							</header>
							<div class="card certificateCompletion">
								<h4 class="text-center courseTitle">
									CSCI-5709 Web Services
								</h4>
                                <center>
								<img alt="Bootstrap Image Preview" src={logo} class="rounded-circle certificateImage" />
                                </center>
								<p class="certificateText">
									Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. Aliquam mi erat, aliquam vel luctus eu, pharetra quis elit. Nulla euismod ultrices massa, et feugiat ipsum consequat eu.
								</p>
								<div class="row pad">
									<div class="col-md-6">
										<br />
										<h4>A. C. DEF</h4>
										<h4>
											Manager
										</h4>
									</div>
									<div class="col-md-6">
										<br />
										<h4>V. W. XYZ</h4>
										<h4>
											Director
										</h4>
									</div>
								</div>
								<div class="row">
									<div class="col-md-12"><p></p><p></p>
									</div>
								</div>
							</div>
						</div>
						<div class="col-md-4 message">
							<header class="text-center">
								<h3>
									Congratulations!
								</h3>
							</header>
							<br />
							<section>
                                <center>
								<dl>
									<dt>
										Lorem ipsum
									</dt>
									<dd>
										Lorem ipsum dolor sit ametLorem ipsum dolor sit amet
									</dd>
									<dt>
										Lorem ipsum dolor sit amet dolor sit amet
									</dt>
									<dd>
										Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet
									</dd>
									</dl>
                                    </center>
							</section>
							<br />
							<section>
								Lorem ipsum dolor sit amet, <strong>consectetur adipiscing elit</strong>. Aliquam eget sapien sapien. Curabitur in metus urna. In hac habitasse platea dictumst. Phasellus eu sem sapien, sed vestibulum velit. Nam purus nibh, lacinia non faucibus et, pharetra in dolor. Sed iaculis posuere diam ut cursus. <em>Morbi commodo sodales nisi id sodales. Proin consectetur, nisi id commodo imperdiet, metus nunc consequat lectus, id bibendum diam velit et dui.</em> Proin massa magna, vulputate nec bibendum nec, posuere nec lacus. <br /><br />
							</section><br/>
							<div class="buttonsDiv">
								<div class="row">
									<div class="col-md-6">
										<button class="btn btn-primary certificateButtons" type="submit">Download</button>
									</div>
									<div class="col-md-6">
										<button class="btn btn-primary certificateButtons" type="submit">Share</button>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
    );
}
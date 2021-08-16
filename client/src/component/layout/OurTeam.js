import React, { Fragment } from "react";
import "../../css/ourteam.css"
import rohit from "../../images/rohit-image.jpeg"
import kartik from "../../images/newkartikphot.jpeg"
import deepak from "../../images/deepak-image.PNG"
import sonu from "../../images/sonu.jpeg"
import rani from "../../images/rani.jpeg"
const OurTeam = () => {
    return (
        <Fragment>
            <div className="container">
                <div className="row pt-4">
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="team-img">
                                <img style={{ maxHeight: "350px" }} src={sonu} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Sonu Shakya</h3>
                                <span className="post">Full Stack Developer</span>
                            </div>
                            <ul className="social">
                                <li><a href="https://github.com/sonushakya9717"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/sonushakya9717/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/sonu-shakya/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="team-img">
                                <img style={{ maxHeight: "350px" }} src={kartik} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Katik Sharma</h3>
                                <span className="post">Full Stack Developer</span>
                            </div>
                            <ul className="social">
                                <li><a href="https://github.com/kartiksharma09"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/the_code_freak/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/kartik-sharma09/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="team-img">
                                <img style={{ maxHeight: "350px" }} src={rohit} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Rohit Sharma</h3>
                                <span className="post">Full Stack Developer</span>
                            </div>
                            <ul className="social">
                                <li><a href="https://github.com/Rohit-Sharma-Dev"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/rohit_sharma9811/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/rohitsharma7065/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="team-img">
                                <img style={{ maxHeight: "350px" }} src={deepak} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Deepak Sharma</h3>
                                <span className="post">Full Stack Developer</span>
                            </div>
                            <ul className="social">
                                <li><a href="https://github.com/deepaksharma9dev"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/_itz_me_deepak.007/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/deepak-sharma-2319601b7/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        
                    </div>
                    <div className="col-md-4 col-sm-6">
                        <div className="our-team">
                            <div className="team-img">
                                <img style={{ maxHeight: "350px" }} src={rani} />
                            </div>
                            <div className="team-content">
                                <h3 className="name">Rani Solanki</h3>
                                <span className="post">Full Stack Developer</span>
                            </div>
                            <ul className="social">
                                <li><a href="https://github.com/rani-solanki?tab=repositories"><i class="fab fa-github"></i></a></li>
                                <li><a href="https://www.instagram.com/ranisolanki308/"><i className="fa fa-instagram"></i></a></li>
                                <li><a href="https://www.linkedin.com/in/rani-solanki-65a2a2207/"><i className="fa fa-linkedin"></i></a></li>
                            </ul>
                        </div>
                        
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default OurTeam

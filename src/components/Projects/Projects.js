import React from 'react';
import ReactTyped from 'react-typed';
import fancy from '../../image/fancyCar.jpg'
import travel from '../../image/Traveller.jpg'
import doctor from '../../image/doctor.jpg'
import honda from '../../image/honda.jpg'
import coaching from '../../image/coaching.jpg'
import nike from '../../image/nike.jpg'
import './Projects.css'

const Projects = () => {
    return (
        <div className="container text-center text-white mt-5 pb-5" id="project">
            <div className="fs-3 pb-4">
                <ReactTyped
                    // typedRef={typedRef()}
                    loop
                    typeSpeed={99}
                    backSpeed={99}
                    strings={["MY PROJECTS"]}
                    smartBackspace
                    shuffle={false}
                    backDelay={1}
                    fadeOut={false}
                    fadeOutDelay={100}
                    loopCount={0}
                    showCursor
                    cursorChar="|"
                />
            </div>
            <div className="row g-3">
                <div className="col-12 col-lg-6 ">
                    <div className="bg-colors p-3 rounded">
                        <h4>Fancy Car</h4>
                        <img className="rounded pb-3" width="100%" src={fancy} alt="" />
                        <ul>
                            <li>It’s a car selling based website & new features can be added</li>
                            <li>Used Material UI, React JS, React Router, Firebase Authentication ,CSS3</li>
                            <li>MongoDB, Express JS, Heroku, Firebase hosting</li>
                        </ul>

                        <a className="btn-style  me-1" target="_blank" href="https://fancy-world-bfd6a.web.app/">Live Site</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Fancy-car">Client Code</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Fancy-car-server">Server Code</a>

                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <div className="bg-colors p-3 rounded">
                        <h4>Travellers</h4>
                        <img className="rounded pb-3" width="100%" src={travel} alt="" />
                        <ul>
                            <li>It’s a travel agency based website & new features can be added</li>
                            <li>Used Bootstrap, React JS, React Router, Firebase Authentication ,CSS3</li>
                            <li>MongoDB, Express JS, Heroku, Firebase hosting</li>
                        </ul>

                        <a className="btn-style  me-1" target="_blank" href="https://travellers-6e665.web.app/">Live Site</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Travellers">Client Code</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Travellers-server">Server Code</a>

                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <div className="bg-colors p-3 rounded">
                        <h4>Doctors Lab</h4>
                        <img className="rounded pb-3" width="100%" src={doctor} alt="" />
                        <ul>
                            <li>It’s a health service based website& new features can be added</li>
                            <li>Used Bootstrap, React JS, React Router, Firebase Authentication ,CSS3</li>
                            <li>Firebase hosting</li>
                        </ul>

                        <a className="btn-style  me-1" target="_blank" href="https://doctors-lab-ba40b.web.app/">Live Site</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Fancy-car">Client Code</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Fancy-car-server">Server Code</a>

                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <div className="bg-colors p-3 rounded">
                        <h4>Honda CBR</h4>
                        <img className="rounded pb-3" width="100%" src={honda} alt="" />
                        <ul>
                            <li>It’s a honda selling based website & new features can be added</li>
                            <li>Used Bootstrap, CSS3</li>
                            <li>Hosted in Netlify</li>
                        </ul>

                        <a className="btn-style  me-1" target="_blank" href="https://honda-shantanuahmed.netlify.app/">Live Site</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/honda">Client Code</a>


                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <div className="bg-colors p-3 rounded">
                        <h4>Coaching Centre</h4>
                        <img className="rounded pb-3" width="100%" src={coaching} alt="" />
                        <ul>
                            <li>It’s a Coaching center based website & new features can be added</li>
                            <li>Used Bootstrap, React JS, React Router, Firebase Authentication ,CSS3</li>
                            <li>MongoDB, Node.js, Express.js, Firebase hosting</li>
                        </ul>

                        <a className="btn-style  me-1" target="_blank" href="https://romantic-poincare-771391.netlify.app/">Live Site</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/Coaching-center">Client Code</a>

                    </div>
                </div>
                <div className="col-12 col-lg-6 ">
                    <div className="bg-colors p-3 rounded">
                        <h4>Nike Shoes</h4>
                        <img className="rounded pb-3" width="100%" src={nike} alt="" />
                        <ul>
                            <li>It’s a Product selling based website & new features can be added</li>
                            <li>Used Bootstrap, CSS3</li>
                            <li>Hosted in Netlify</li>
                        </ul>

                        <a className="btn-style  me-1" target="_blank" href="https://serene-wiles-53bc3e.netlify.app/">Live Site</a>
                        <a className="btn-style  me-1" target="_blank" href="https://github.com/Shantanuahmed/nike">Client Code</a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects;
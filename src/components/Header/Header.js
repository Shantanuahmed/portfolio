import React from 'react';
import photo from '../../image/myphoto.jpg';
import './Header.css'


const Header = () => {
    return (
        <div className="pt-lg-5 text-white container pb-5">
            <div className="row">
                <div className="col-12 col-lg-6 text-center pb-5 pt-lg-5">
                    <h4 className="">Hi there!</h4>
                    <h6>This is MD Shahil</h6>
                    <h6>Full stack junior web developer</h6>
                    <p>I have started my journey as a web developer with Programming Hero and my mentor Jhankar Mahbub. I have completed few full stack projects. They are fully functional, responsive and interactive. Please check out my works</p>
                    <a target="_blank" className="btn-style  me-2" href="https://drive.google.com/file/d/1QO2q2C9V7Krih4HQP7e3oYwzhkbc_24h/view?usp=sharing" download="MD.Shahil.pdf">Download Resume</a>
                    <a className="btn-style" target="_blank" href="mailto:shahilahmed.sa@gmail.com">Hire me</a>
                </div>
                <div className="col-12 col-lg-6 text-center">
                    <img className="w-50" src={photo} alt="" />
                    <div className="mt-2">
                        <a target="_blank" className="btn-style  me-2" href="https://github.com/Shantanuahmed">GitHub</a>
                        <a target="_blank" className="btn-style" href="https://www.linkedin.com/in/md-shahil-a65372227/">Linkedln</a>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Header;
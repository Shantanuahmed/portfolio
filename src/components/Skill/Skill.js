import React from 'react';
import ReactTyped from 'react-typed';
import './Skill.css'

const Skill = () => {
    return (
        <div className="container text-white text-center pb-5" id="skill">
            {/* <h2>SKILL & TECHNOLOGY</h2> */}
            <div className="fs-3 pb-4">
                <ReactTyped
                    // typedRef={typedRef()}
                    loop
                    typeSpeed={99}
                    backSpeed={99}
                    strings={["SKILL AND TECHNOLOGY"]}
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
            <div className="skill">
                <a className="skill-btn m-lg-5" href="">HTML</a>
                <a className="skill-btn m-lg-5" href="">CSS</a>
                <a className="skill-btn m-lg-5" href="">JavaScript</a>
            </div>
            <br />
            <div className="skill">
                <a className="skill-btn m-lg-5" href="">Material UI</a>
                <a className="skill-btn m-lg-5" href="">Bootstrap</a>
                {/* <a href="">Tailwind</a> */}
            </div>
            <br />
            <div className="skill">
                <a className="skill-btn m-lg-5" href="">Node.js</a>
                <a className="skill-btn m-lg-5" href="">Mongodb</a>
                <a className="skill-btn m-lg-5" href="">Tailwind</a>
            </div>
            <br />
            <div className="skill">
                <a className="skill-btn m-lg-5" href="">Firebase</a>
                <a className="skill-btn m-lg-5" href="">Express.js</a>
            </div>


        </div>
    );
};

export default Skill;
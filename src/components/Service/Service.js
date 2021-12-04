import React from 'react';
import ReactTyped from 'react-typed';
import './Service.css'

const Service = () => {
    return (
        <div className="fw-bold text-white fs-4 text-center pt-5 container pb-4" id="service">
            <ReactTyped
                // typedRef={typedRef()}
                loop
                typeSpeed={99}
                backSpeed={99}
                strings={["MY SERVICES"]}
                smartBackspace
                shuffle={false}
                backDelay={1}
                fadeOut={false}
                fadeOutDelay={100}
                loopCount={0}
                showCursor
                cursorChar="|"
            />
            <div className="row g-3 pt-4">
                <div className="col-12 col-lg-4">
                    <div className="bg-1">
                        <h4>Web Development</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="bg-1" >
                        <h4>Web Design</h4>
                    </div>
                </div>
                <div className="col-12 col-lg-4">
                    <div className="bg-1">
                        <h4>Problem Solving</h4>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Service;
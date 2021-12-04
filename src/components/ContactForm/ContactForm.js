import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import './ContactForm.css'
import ReactTyped from 'react-typed';

const ContactForm = () => {
    let form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_wtzgipg', 'template_o58i6wo', form.current, 'user_UOV0aWv3bUSwegzQZRNgF')
            .then((result) => {
                console.log(result.text);
                if (result.text) {
                    alert('successfully')
                    form.current.reset()
                }
            }, (error) => {
                console.log(error.text);
            });

    };

    return (
        <div className="text-center pb-5 container text-white pt-5" id="contact">
            <div className="fs-4">
                <ReactTyped
                    // typedRef={typedRef()}
                    loop
                    typeSpeed={99}
                    backSpeed={99}
                    strings={["CONTACT ME"]}
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
            <form ref={form} onSubmit={sendEmail}>
                <label>Name</label> <br />
                <input className="w-50" type="text" name="user_name" /> <br />
                <label>Email</label> <br />
                <input className="w-50" type="email" name="user_email" /> <br />
                <label>Message</label> <br />
                <textarea className="w-50" name="message" /> <br />
                <input type="submit" value="Send" />
            </form>
        </div>
    );
};

export default ContactForm;
import React from 'react';
import ContactForm from '../ContactForm/ContactForm';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Projects from '../Projects/Projects';
import Service from '../Service/Service';
import Skill from '../Skill/Skill';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Header></Header>
            <Skill></Skill>
            <Projects></Projects>
            <Service></Service>
            <ContactForm></ContactForm>
            <Footer></Footer>

        </div>
    );
};

export default Home;
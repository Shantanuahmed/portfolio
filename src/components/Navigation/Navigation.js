import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import ReactTyped from 'react-typed';
import './Navigation.css';

const Navigation = () => {
    return (
        <div className="">
            <Navbar collapseOnSelect expand="lg" className="bg-color border-0 mb-5" bg="" variant="dark">
                <Container className="border-0">
                    <Navbar.Brand className="fw-bold text-white fs-4" href="#home">
                        <ReactTyped
                            // typedRef={typedRef()}
                            loop
                            typeSpeed={99}
                            backSpeed={99}
                            strings={["THIS IS MD SHAHIL"]}
                            smartBackspace
                            shuffle={false}
                            backDelay={1}
                            fadeOut={false}
                            fadeOutDelay={100}
                            loopCount={0}
                            showCursor
                            cursorChar="|"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            {/* <Nav.Link href="#features">Features</Nav.Link>
                            <Nav.Link href="#pricing">Pricing</Nav.Link> */}
                        </Nav>
                        <Nav>
                            <Nav.Link className="fw-bold text-white" href="#skill">Skills</Nav.Link>
                            <Nav.Link className="fw-bold text-white" href="#service">
                                Services
                            </Nav.Link>
                            <Nav.Link className="fw-bold text-white" href="#project">
                                Projects
                            </Nav.Link>
                            <Nav.Link className="fw-bold text-white" href="#contact">
                                Contact me
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </div>
    );
};

export default Navigation;
import React, { Component } from 'react';
import Datas from '../data/counter/number-counter.json';
import { Container, Row, Col } from 'react-bootstrap';
import CountUp from 'react-countup';
import { Styles } from "./styles/numberCounter.js";

class NumberCounter extends Component {
    render() {
        return (
            <Styles>
                {/* Counter Area */}
                <section className="counter-area" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                    <h4>{Datas.secTitle}</h4>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                   
                                   
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                    <div className="counter-icon">
                                        <i className="las la-graduation-cap"></i>
                                    </div>
                                    <div className="counter-number">
                                        <h4><CountUp end={2500} duration={5} delay={1.5} />+</h4>
                                        <p> Students</p>
                                    </div>
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                  
                                </div>
                            </Col>
                            <Col md="3" xs="6">
                                <div className="counter-box">
                                    <div className="counter-icon">
                                        <i className="las la-book-reader"></i>
                                    </div>
                                    <div className="counter-number">
                                        <h4><CountUp end={20} duration={5} delay={1.5} />+</h4>
                                        <p>Teachers</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default NumberCounter

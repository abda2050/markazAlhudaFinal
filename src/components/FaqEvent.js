import React, { useEffect, useContext } from 'react';
import Datas from '../data/faq-event/faq-event.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/faqEvent.js";
import { LangContext } from "../components/common/contexts/LangContext"; 

function FaqEvent() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const accordionButton = document.querySelectorAll(".accordion-button");
        accordionButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "accordion-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "accordion-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Faq & Event */}
            <section className="event-faq-area">
                <Container>
                    <Row>
                        <Col md="6">
                            <div className="event-area">
                                <Row>
                                    <Col md="12">
                                        <div className="sec-title">
                                            {lang === "ar" ? (<h4><span>أحداث </span> ألمركز </h4>) : (<h4>Center  <span>Events</span></h4>)}
                                            
                                        </div>
                                    </Col>
                                    <Col md="12">
                                        {
                                            Datas.eventDataList.map((eventData, i) => (
                                                <div className="event-box d-flex" key={i}>
                                                    <div className="event-date text-center">
                                                        <p>{eventData.eventDate}</p>
                                                    </div>
                                                    <div className="event-details">
                                                        <h6><Link to={eventData.eventLink}>{eventData.eventTitle}</Link></h6>
                                                        <ul className="list-unstyled list-inline">
                                                            <li className="list-inline-item"><i className="las la-clock"></i>{eventData.eventTime}</li>
                                                            <li className="list-inline-item"><i className="las la-map-marker"></i>{eventData.eventLocation}</li>
                                                        </ul>
                                                        <p>{eventData.eventdesc}</p>
                                                    </div>
                                                </div>
                                            ))
                                        }
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                        <Col md="6">
                            <div className="faq-area">
                                <div className="sec-title">
                                    {lang === "ar" ? (<h4>ألتعلم في   <span> مركز الهدا</span></h4>) : (<h4>Learning  <span>at Al Hada Center</span></h4>)}
                                    
                                </div>
                                <div className="faq-box">
                                    {
                                        Datas.faqDataList.map((faqData, i) => (
                                            <div className="faq-item" key={i}>
                                                <button className="accordion-button active">
                                                    <div className="accordion-icon"><i className="las la-plus"></i></div>
                                                    {lang === "ar" ? ( <p>{faqData.faqTitleArabic}</p>) : (<p>{faqData.faqTitle}</p>)}
                                                   
                                                </button>
                                                <div className="accordion-content show">
                                                {lang === "ar" ? (<p>{faqData.faqDescArabic}</p> ) : (<p>{faqData.faqDesc}</p>)}
                                                    
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default FaqEvent

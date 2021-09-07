import React, { Component } from 'react';
import Datas from '../data/team/team-slider.json';
import { Container, Row, Col } from 'react-bootstrap';
import Swiper from 'react-id-swiper';
import { Styles } from "./styles/teamSlider.js";
import {LangContext} from "./common/contexts/LangContext";

class TeamSlider extends Component {
    static contextType = LangContext;
    render() {
        const lang = this.context.lang;
        const settings = {
            slidesPerView: 4,
            loop: true,
            speed: 1000,
            autoplay: {
                delay: 3000,
                disableOnInteraction: false
            },
            spaceBetween: 30,
            watchSlidesVisibility: true,
            pagination: {
                el: '.slider-dot.text-center',
                clickable: true
            },
            breakpoints: {
                0: {
                    slidesPerView: 1
                },
                576: {
                    slidesPerView: 2
                },
                768: {
                    slidesPerView: 3
                },
                992: {
                    slidesPerView: 4
                }
            }
        };

        return (
            <Styles>
                {/* Team Slider */}
                <section className="team-member-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="sec-title text-center">
                                {lang === "ar" ? (<h4>{Datas.secTitleArabic}</h4>):( <h4>{Datas.secTitle}</h4>)}
                                    
                                </div>
                            </Col>
                            <Col md="12" className="team-slider">
                                <Swiper {...settings}>
                                    {
                                        Datas.dataList.map((data, i) => (
                                            <div className="team-item" key={i}>
                                                <img src={process.env.PUBLIC_URL + `/assets/images/${data.personImage}`} alt="" className="img-fluid" />
                                                <div className="img-content text-center">
                                                {lang === "ar" ? ( <h5>{data.personNameArabic}</h5>):( <h4>{data.personName}</h4>)}
                                                   
                                                    
                                                    <ul className="list-unstyled list-inline">
                                                        <li className="list-inline-item"><a href={process.env.PUBLIC_URL + data.socialLinks.google}><i class="fab fa-internet-explorer"></i></a></li>
                                                        
                                                    </ul>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </Swiper>
                            </Col>
                        </Row>
                    </Container>
                </section>
            </Styles>
        )
    }
}

export default TeamSlider

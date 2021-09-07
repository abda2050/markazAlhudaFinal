import React, { Component } from 'react';
import Datas from '../data/footer/footer.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerOne.js";

import { LangContext } from "./common/contexts/LangContext";

class Footer extends Component {
    static contextType = LangContext;
    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Footer Area */}
                <footer className="footer1" style={{ backgroundImage: `url(assets/images/${process.env.PUBLIC_URL + Datas.backgroundImage})` }}>
                    <Container>
                        <Row>
                            <Col md="4">
                                <div className="footer-logo-info">
                                    <img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" className="img-fluid" />
                                    {lang === "ar" ? (<p>يعد مركز الهدى من أبرز مراكز تحفيظ القرآن الكريم في إمارة دبي، إذ تأسس عام 2002م، وحرص على اتباع أحدث الأساليب الإدارية لتحقيق الريادة والتميز والإبداع في مسيرة تحفيظ كتاب الله تعالى </p>):(<p>About the center Al-Huda Center is one of the most prominent centers for memorizing the Holy Qur’an in the Emirate of Dubai.</p>)}
                                    <ul className="list-unstyled">
                                        <li><i className="las la-map-marker"></i>Al Mamzar 1 AL Mamzar 1 - Dubai.</li>
                                        <li><i className="las la-envelope"></i>Markazalhudadubai@gmail.com</li>
                                        <li><i className="las la-phone"></i>+971 (04) 263 3338<br /> +971 (04) 265 7438<br />+971 (056) 851 1618<br />+971 (050) 852 2004<br/> +971 (050) 466 9770</li>
                                    </ul>
                                </div>
                            </Col>
                         

                                    
                            <Col md="3">
                            <div className="f-post">
                            <h5>{lang === "ar" ? (<>منشورات تويتر</>):(<>Twitter Posts</>)}</h5>
                                
                                <div className="post-box d-flex">
                                    <div className="po-icon">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="po-content">
                                        <Link to={process.env.PUBLIC_URL + "/blog-details"}>تلاوة سورة الملك "تبارك" كل ليلة قبل نومك قال صلى الله عليه وسلم: إنَّ سورةً منَ القرآنِ ثلاثونَ آيةً شفعَت لرجلٍ حتّى غُفِرَ لَهُ، وَهيَ سورَةُ:  تَبارَكَ الَّذِي بِيَدِهِ الْمُلْكُ</Link>
                                        <span>Aug 28, 2020</span>
                                    </div>
                                </div>
                                <div className="post-box d-flex">
                                    <div className="po-icon">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="po-content">
                                        <Link to={process.env.PUBLIC_URL + "/blog-details"}>قال ابن عيينة رحمه الله لا تتركوا الدعاء ولا يمنعكم منه ما تعلمون  من أنفسكم..</Link>
                                        <span>Aug 23, 2020</span>
                                    </div>
                                </div>
                                <div className="post-box d-flex">
                                    <div className="po-icon">
                                        <i className="fab fa-twitter"></i>
                                    </div>
                                    <div className="po-content">
                                        <Link to={process.env.PUBLIC_URL + "/blog-details"}>ن الأمور إذا ما الله يسرها أتتك من حيث لا ترجو وتحتسبُ ثق بالإله ولا تركن إلى أحد فالله أكرم من يُرجى ويُرتقبُ</Link>
                                        <span>Aug 23, 2020</span>
                                    </div>
                                </div>
                            </div>
                        </Col>
                            <Col md="4">
                                <div className="f-post">
                                    <h5>Barcodes</h5>
                                    <div className="post-box d-flex">
                                        <div className="post-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-2.jpg"} alt="" />
                                        </div>
                                  
                                      
                                    </div>
                                    <div className="post-box d-flex">
                                        <div className="post-img">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/blog-3.jpg"} alt="" />
                                        </div>
                                        
                                    </div>
                                    <div className="post-box d-flex">
                                        <div className="tour-box">
                                            <img src={process.env.PUBLIC_URL + "/assets/images/lolym.png"} alt="" />
                                        </div>
                                       
                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </footer>

                {/* Copyright Area */}
                <section className="copyright-area">
                    <Container>
                        <Row>
                            <Col md="6">
                                <div className="copy-text">
                                    <p>Copyright &copy; 2017 | Markazalhuda</p>
                                </div>
                            </Col>
                            <Col md="6" className="text-right">
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/markazalhuda_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://wa.me/+9710508522004" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                                    <li className="list-inline-item"><a href="https://t.me/markazalhudaduba" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a></li>
                                    <li className="list-inline-item"><a href={process.env.PUBLIC_URL + "/"}><i className="fab fa-youtube"></i></a></li>

                                </ul>
                            </Col>
                        </Row>
                    </Container>

                    {/* Back To Top */}
                    <BackToTop />
                </section>
            </Styles>
        );
    }
}

export default Footer;

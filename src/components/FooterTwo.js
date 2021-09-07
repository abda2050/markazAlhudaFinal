import React, { useContext, useEffect } from 'react';
import Datas from '../data/footer/footer2.json';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BackToTop from './common/BackToTop';
import { Styles } from "./styles/footerTwo.js";
import {LangContext} from "./common/contexts/LangContext";

function FooterTwo() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const form = document.getElementById("form4");
        const email = document.getElementById("email4");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const emailValue = email.value.trim();

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".input-msg4");
            formControl.className = "form-control error";
            errorMsg.innerText = message;
        }

        function setSuccess(input) {
            const formControl = input.parentElement;
            formControl.className = "form-control success";
        }

        function isEmail(email) {
            return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
        }
    });

    return (
        <Styles>
            {/* Footer Two */}
            <footer className="footer2" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/assets/images/${Datas.backgroundImage})` }}>
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="footer-logo-info">
                                <img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" className="img-fluid" />
                                {lang === "ar" ? (<p>يعد مركز الهدى من أبرز مراكز تحفيظ القرآن الكريم في إمارة دبي، إذ تأسس عام 2002م، وحرص على اتباع أحدث الأساليب الإدارية لتحقيق الريادة والتميز والإبداع في مسيرة تحفيظ كتاب الله تعالى </p>):(<p>About the center Al-Huda Center is one of the most prominent centers for memorizing the Holy Qur’an in the Emirate of Dubai.</p>)}
                                
                                <ul className="list-unstyled">
                                    <li><i className="las la-map-marker"></i>Al Mamzar 1 AL Mamzar 1 - Dubai.</li>
                                    <li><i className="las la-envelope"></i>Markazalhudadubai@gmail.com</li>
                                    <li><i className="las la-phone"></i>+971 (04) 265 7438<br/>+971 (056) 851 1618<br/>+971 (050) 852 2004</li>
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
                        <Col md="3">
                            <div className="f-newsletter">
                            <h5>{lang === "ar" ? (<> لكي يوصلك كل جديد عن المركز </>):(<>Connect with Markaz Al Huda</>)}</h5>
                               {lang === "ar" ? (<p>قم بوضع بريدك الالكتروني</p>):(<p>Enter your Email Adress</p>)}

                                <form id="form4" className="form">
                                    <p className="form-control">
                                    {lang === "ar" ? (<input type="email" placeholder="قم بوضع ايميلك" id="email4" />):(<input type="email" placeholder="Enter email here" id="email4" />)}
                                       
                                        <span className="input-msg4"></span>
                                    </p>
                                    {lang === "ar" ? (<button>أرسال</button>):(<button>Submit</button>)}
                                    
                                </form>
                            </div>
                        </Col>
                        <Col md="12">
                            <div className="copytext-area text-center">
                                <p>Copyright &copy; 2017 | Markazalhuda</p>
                                <ul className="social list-unstyled list-inline">
                                    <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                                    <li className="list-inline-item"><a href="https://twitter.com/markazalhuda_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                                    <li className="list-inline-item"><a href="https://wa.me/+9710508522004" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                                    <li className="list-inline-item"><a href="https://t.me/markazalhudaduba" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a></li>
                                    <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCCrGSQOE6Yiq3LYXkLbma0g" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                                    
                                </ul>
                            </div>
                        </Col>
                    </Row>
                </Container>

                {/* Back To Top  */}
                <BackToTop />
            </footer>
        </Styles>
    );
}

export default FooterTwo

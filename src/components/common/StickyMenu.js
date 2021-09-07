import React, { useEffect, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import { Styles } from "./styles/stickyMenu.js";
import { LangContext } from "./contexts/LangContext";
import ChatBotButton from "../../components/common/ChatBotButton";

function StickyMenu() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        window.addEventListener("scroll", () => {
            const stickyMenu = document.querySelector(".sticky-menu");

            if (window.scrollY > 160) {
                stickyMenu.classList.add("sticky");
            } else {
                stickyMenu.classList.remove("sticky");
            }
        });
    });

    return (
        <Styles>
            {/* Sticky Menu */}
            <section className="sticky-menu">
                <Container>
                    <Row>
                        <Col md="3">
                            <div className="logo">
                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link>
                            </div>
                        </Col>
                        <Col md="9">
                            <div className="menu-box d-flex justify-content-end">
                                <ul className="nav menu-nav">
                                    <li className="nav-item dropdown active">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الصفحة الرئيسية</>) : (<>Home</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                                <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>{lang === "ar" ? (<>قسم الناطقين باللغه العربيه </>) : (<>Arabic Section For Arabs</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>{lang === "ar" ? (<>قسم لغير الناطقين باللغه العربيه</>) : (<>English Section For Non - Arabs </>)}</Link></li>
                                            </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الصفحات</>):(<>Pages</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>{lang === "ar"?(<> معلومات عنا </>):(<>About Us</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>{lang === "ar"?(<> الصور </>):(<>Gallery</>)}</Link></li>
                                            {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>{lang === "ar"? (<>تسجيل الدخول</>):(<>Log in</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>{lang === "ar" ? (<>التسجيل</>) : (<>Registration</>)}</Link></li> */}
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>{lang === "ar" ? (<>تواصل معنا</>):(<>Contact</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>{lang==="ar" ? (<>أسئلة شائعة</>):(<>Faq</>)}</Link></li>
                                            
                                                
                                        </ul>
                                    </li>
                                    <li className="nav-item dropdown">
                                           {/* <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>الدورات</>) : (<>Courses</>)} <i className="las la-angle-down"></i></Link>
                                            <ul className="dropdown list-unstyled">
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>{lang === "ar" ? (<> الدورات الخاصه للعرب</>) : (<>Courses For Arab Speakers</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>{lang === "ar" ? (<> الدورات الخاصه بغير الناطقين باللغة العربية</>) : (<>Courses For NON-Arabs</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>{lang === "ar" ? (<>تفاصيل الدورات</>) : (<>Course Details</>)}</Link></li>
                                        </ul>*/}
                                        
                                        </li>
                                        
                                    
                                   
                                    <li className="nav-item dropdown">
                                        <Link className="nav-link dropdown-toggle" to={process.env.PUBLIC_URL + "/"} data-toggle="dropdown">{lang === "ar" ? (<>مدّونة</>):(<>Blog</>)} <i className="las la-angle-down"></i></Link>
                                        <ul className="dropdown list-unstyled">
                                               {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>{lang === "ar" ? (<>مقالات</>) : (<>Articles</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>{lang === "ar" ? (<>مقترحات للناطقين باللغه العربيه</>) : (<>Blog for Arab Speakers</>)}</Link></li>*/}
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>{lang === "ar" ? (<>مقترحات لغير الناطقين باللغه العربيه</>) : (<>Blog For non-Arabs</>)}</Link></li>
                                            </ul>
                                    </li>
                                   
                                </ul>
                                <div className="apply-btn">
                                    <a href="https://github.com/abda2050/projectMarkaz" target="_blank" rel="noopener noreferrer"><i className="las la-clipboard-list"></i>{lang === "ar" ? (<>سجل الان </>):(<>Apply Now</>)}</a>
                                </div>
                            </div>
                            <li className="list-inline-item">
                                        <ChatBotButton />
                                    </li>
                        </Col>
                    </Row>
                </Container>
            </section>
        </Styles>
    )
}

export default StickyMenu
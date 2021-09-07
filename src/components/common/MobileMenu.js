import React, { useEffect,useContext } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col,  } from 'react-bootstrap';
import { Styles } from "./styles/mobileMenu.js";
import {LangContext} from "./contexts/LangContext";
import ChatBotButton from "../../components/common/ChatBotButton";


 

function MobileMenu() {
    const { lang, setLang } = useContext(LangContext);

    const toggleArabic = () => {
        setLang("ar");
    };

    const toggleEnglish = () => {
        setLang("en");
    };
    
    useEffect(() => {
        // Mobile Menu
        const hmBtn = document.getElementById("mb-sidebar-btn");

        if (hmBtn) {
            const mdSidebarOverlay = document.getElementById("mb-sidebar-overlay");
            const mdSidebarBody = document.getElementById("mb-sidebar-body");
            const mdSidebarExit = document.getElementById("close-mb-sidebar");

            hmBtn.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.toggle("visible");
                mdSidebarBody.classList.toggle("opened");
            });

            mdSidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });

            mdSidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                mdSidebarOverlay.classList.remove("visible");
                mdSidebarBody.classList.remove("opened");
            });
        }

        // Menu Accordion -----------------
        const menuButton = document.querySelectorAll(".mb-menu-button");
        menuButton.forEach(button => {
            button.addEventListener("click", () => {
                button.classList.toggle("active");
                const content = button.nextElementSibling;

                if (button.classList.contains("active")) {
                    content.className = "mb-menu-content show";
                    content.style.maxHeight = content.scrollHeight + "px";
                } else {
                    content.className = "mb-menu-content";
                    content.style.maxHeight = "0";
                }
            });
        });
    });

    return (
        <Styles>
            {/* Mobile Menu */}
            <section className="mobile-menu-area">
                <Container>
                    <Row>
                        <Col md="0" sm="12">
                            <div className="mb-topbar d-flex justify-content-between">
                                <div className="topbar-item">
                                    <p><i className="las la-phone"></i>+971 (04) 263 3338</p>
                                </div>
                                <div className="topbar-item">
                                    { <ul className="list-unstyled list-inline">
                                        <li className="list-inline-item"><a href="https://github.com/abda2050/projectMarkaz">{lang === "ar" ? (<>تسجيل الدخول</>):(<>Login</>)}</a></li>
                                        <li className="list-inline-item">/</li>
                                        <li className="list-inline-item"><a href="https://github.com/abda2050/projectMarkaz" target="_blank">{lang === "ar" ? (<>تسجيل</>):(<>Register</>)}</a></li>
                                    </ul> }
                                     <ul>
                                    <li className="list-inline-item">     
                                                <button as="li" onClick={toggleArabic}>العربية</button>
                                                <button as="li" onClick={toggleEnglish}> English</button>
                                               
                                    </li>
                                </ul>
                               
                                 <ul>
                                    <li className="list-inline-item">
                                        <ChatBotButton />
                                    </li>
                                </ul>
                                </div>
                            </div>
                            
                            <div className="mb-logo-area d-flex justify-content-between">
                                <div className="mb-logo-box d-flex">
                                    <div className="hm-button">
                                        <a href={process.env.PUBLIC_URL + "/"} id="mb-sidebar-btn">
                                            <i className="las la-bars"></i>
                                        </a>
                                    </div>
                                    <div className="mb-logo">
                                        <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/f-logo.png"} alt="" /></Link>
                                    </div>
                                </div>
                                <div className="mb-search-box">
                                    <form action="#">
                                        <input type="text" name="search" placeholder="Search Here" />
                                        <button type="submit"><i className="las la-search"></i></button>
                                    </form>
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>

            {/* Mobile Menu Sidebar */}
            <section className="mb-sidebar" id="mb-sidebar-body">
                <div className="mb-sidebar-heading d-flex justify-content-between">
                {lang === "ar" ? ( <div><h5>القائمه</h5></div>) : ( <div><h5>Menu</h5></div> )}
                   
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-mb-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="mb-sidebar-menu">
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        {lang === "ar" ? (<p>الصفحه الرئيسيه<i className="las la-plus"></i></p>) : ( <p>Home page<i className="las la-plus"></i></p>)}
                          
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                            <li className="nav-item active"><Link className="nav-link" to={process.env.PUBLIC_URL + "/"}>{lang === "ar" ? (<>قسم الناطقين باللغه العربيه </>) : (<>Arabic Section For Arabs</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/home-two"}>{lang === "ar" ? (<>قسم لغير الناطقين باللغه العربيه</>) : (<>English Section For Non - Arabs </>)}</Link></li>
                            </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        {lang === "ar" ? (<p>الصفحات<i className="las la-plus"></i></p>) : ( <p>Pages<i className="las la-plus"></i></p>)}
                            
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/about"}>{lang === "ar"?(<> معلومات عنا </>):(<>About Us</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/gallery"}>{lang === "ar"?(<> الصور </>):(<>Gallery</>)}</Link></li>
                                            {/* <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/login"}>{lang === "ar"? (<>تسجيل الدخول</>):(<>Log in</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/registration"}>{lang === "ar" ? (<>التسجيل</>) : (<>Registration</>)}</Link></li> */}
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/contact"}>{lang === "ar" ? (<>تواصل معنا</>):(<>Contact</>)}</Link></li>
                                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/faq"}>{lang==="ar" ? (<>أسئلة شائعة</>):(<>Faq</>)}</Link></li>
                                          
                                            
                                        </ul>
                        </div>
                    </div>
                    <div className="mb-menu-item">
                        <button className="mb-menu-button active">
                        {lang === "ar" ? (<p>ألدورات<i className="las la-plus"></i></p>) : ( <p>Courses <i className="las la-plus"></i></p>)}
                           
                        </button>
                        <div className="mb-menu-content show">
                            <ul className="list-unstyled">
                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-grid"}>{lang === "ar" ? (<> الدورات الخاصه للعرب</>) : (<>Courses For Arab Speakers</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-list"}>{lang === "ar" ? (<> الدورات الخاصه بغير الناطقين باللغة العربية</>) : (<>Courses For NON-Arabs</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/course-details"}>{lang === "ar" ? (<>تفاصيل الدورات</>) : (<>Course Details</>)}</Link></li>
                                </ul>
                        </div>
                    </div>
                   
                        
                      
                  
                    <div className="mb-menu-item">
                        <button className="mb-menu-button">
                        {lang === "ar" ? (<p>المقالات<i className="las la-plus"></i></p>) : ( <p>Blog <i className="las la-plus"></i></p>)}
                            
                        </button>
                        <div className="mb-menu-content">
                            <ul className="list-unstyled">
                            <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-classic"}>{lang === "ar" ? (<>مقالات</>) : (<>Articles</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-grid"}>{lang === "ar" ? (<>مقترحات للناطقين باللغه العربيه</>) : (<>Blog for Arab Speakers</>)}</Link></li>
                                                <li className="nav-item"><Link className="nav-link" to={process.env.PUBLIC_URL + "/blog-details"}>{lang === "ar" ? (<>مقترحات لغير الناطقين باللغه العربيه</>) : (<>Blog For non-Arabs</>)}</Link></li>
                                            </ul>
                        </div>
                    </div>
                   
                </div>
                
            </section>
            <div className="mb-sidebar-overlay" id="mb-sidebar-overlay"></div>
        </Styles>
    )
}

export default MobileMenu
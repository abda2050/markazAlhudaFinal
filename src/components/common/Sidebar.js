import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Styles } from "./styles/sidebar.js";
import {LangContext} from "./contexts/LangContext";

function Sidebar() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const sidebarBtn = document.getElementById("sidebar-btn");

        if (sidebarBtn) {
            const sidebarOverlay = document.getElementById("sidebar-overlay");
            const sidebarBody = document.getElementById("sidebar-body");
            const sidebarExit = document.getElementById("close-sidebar");

            sidebarBtn.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.add("visible");
                sidebarBody.classList.add("opened");
            });

            sidebarOverlay.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });

            sidebarExit.addEventListener("click", function (e) {
                e.preventDefault();
                sidebarOverlay.classList.remove("visible");
                sidebarBody.classList.remove("opened");
            });
        }
    });

    return (
        <Styles>
            {/* Sidebar */}
            <a href={process.env.PUBLIC_URL + "/"} className="nav-link nav-sidebar" id="sidebar-btn">
                <i className="las la-bars"></i>
            </a>

            <div className="sidebar" id="sidebar-body">
                <div className="side-logo d-flex justify-content-between">
                    <div><Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + "/assets/images/logo.png"} alt="" /></Link></div>
                    <div><a href={process.env.PUBLIC_URL + "/"} id="close-sidebar"><i className="las la-times"></i></a></div>
                </div>
                <div className="side-content">
                    <h5>{lang === "ar" ? (<>معلومات عنا</>) : (<>About Us</>)}</h5>
                    {lang === "ar" ? (<p>يعد مركز الهدى من أبرز مراكز تحفيظ القرآن الكريم في إمارة دبي، إذ تأسس عام 2002م، وحرص على اتباع أحدث الأساليب الإدارية لتحقيق الريادة والتميز والإبداع في مسيرة تحفيظ كتاب الله تعالى</p>) : (<p>Al-Huda Center is one of the most prominent centers for memorizing the Holy Qur’an in the Emirate of Dubai.</p>)}
                   
                </div>
                <div className="side-post">
                    <h5>{lang === "ar" ? (<>المنشور الاخير</>) : (<>Recent Post</>)}</h5>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/gal.jfif"} alt="" />
                        </div>
                        <div className="post-title">
                            <p></p>
                            <span></span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/gal5.jfif"} alt="" />
                        </div>
                        <div className="post-title">
                            <p></p>
                            <span></span>
                        </div>
                    </div>
                    <div className="post-box d-flex">
                        <div className="post-img">
                            <img src={process.env.PUBLIC_URL + "/assets/images/gal3.jfif"} alt="" />
                        </div>
                       
                        <div className="post-title">
                            <p></p>
                            <span></span>
                        </div>
                    </div>
                </div>
                <div className="side-gallery">
                    <h5>{lang === "ar" ? (<>صالة عرض</>) : (<>Gallery</>)}</h5>
                    <img src={process.env.PUBLIC_URL + "/assets/images/gal6.jfif"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gal2.jfif"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gal4.jfif"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-04.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-05.jpg"} alt="" />
                    <img src={process.env.PUBLIC_URL + "/assets/images/gallery-06.jpg"} alt="" />
                </div>
                <div className="side-contact">
                    <h5>{lang === "ar" ? (<>اتصل بنا</>) : (<>Contact Us</>)}</h5>
                    <ul className="list-unstyled">
                        <li><i className="las la-map-marker"></i>Al Mamzar 1  - Dubai.</li>
                        <li><i className="las la-phone"></i>+971 (04) 263 3338</li>
                        <li><i className="las la-envelope"></i>Markazalhudadubai@gmail.com</li>
                    </ul>
                </div>
                <div className="side-social">
                    <ul className="list-unstyled list-inline">
                        <li className="list-inline-item"><a href="https://www.facebook.com/markazalhuda" target="_blank"rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                        <li className="list-inline-item"><a href="https://twitter.com/markazalhuda_" target="_blank" rel="noopener noreferrer"><i className="fab fa-twitter"></i></a></li>
                        
                        <li className="list-inline-item"><a href="https://www.youtube.com/channel/UCCrGSQOE6Yiq3LYXkLbma0g" target="_blank" rel="noopener noreferrer"><i className="fab fa-youtube"></i></a></li>
                        <li className="list-inline-item"><a href="https://wa.me/+9710508522004" target="_blank" rel="noopener noreferrer"><i className="fab fa-whatsapp"></i></a></li>
                        <li className="list-inline-item"><a href="https://t.me/markazalhudaduba" target="_blank" rel="noopener noreferrer"><i className="fab fa-telegram"></i></a></li>
                        <li className="list-inline-item"><a href="https://www.instagram.com/markazalhuda/" target="_blank"rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                    </ul>
                </div>
            </div>
            <div className="sidebar-overlay" id="sidebar-overlay"></div>
        </Styles>
    )
}

export default Sidebar

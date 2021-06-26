import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/account.js';
import {LangContext} from "../../components/common/contexts/LangContext";
function Register() {
    const {lang} = useContext(LangContext);
    useEffect(() => {
        const form = document.getElementById("form_registration");
        const fname = document.getElementById("registration_fname");
        const lname = document.getElementById("registration_lname");
        const email = document.getElementById("registration_email");
        const user = document.getElementById("registration_user");
        const password = document.getElementById("registration_password");
        const cpassword = document.getElementById("registration_cpassword");

        form.addEventListener("submit", formSubmit);

        function formSubmit(e) {
            e.preventDefault();

            const fnameValue = fname.value.trim();
            const lnameValue = lname.value.trim();
            const emailValue = email.value.trim();
            const userValue = user.value.trim();
            const passwordValue = password.value.trim();
            const cpasswordValue = cpassword.value.trim();

            if (fnameValue === "") {
                setError(fname, "First name can't be blank");
            } else {
                setSuccess(fname);
            }

            if (lnameValue === "") {
                setError(lname, "Last name can't be blank");
            } else {
                setSuccess(lname);
            }

            if (emailValue === "") {
                setError(email, "Email can't be blank");
            } else if (!isEmail(emailValue)) {
                setError(email, "Not a valid email");
            } else {
                setSuccess(email);
            }

            if (userValue === "") {
                setError(user, "User name can't be blank");
            } else {
                setSuccess(user);
            }

            if (passwordValue === "") {
                setError(password, "Password can't be blank");
            } else {
                setSuccess(password);
            }

            if (cpasswordValue === "" || passwordValue !== cpasswordValue) {
                setError(cpassword, "Password doesn't match");
            } else {
                setSuccess(cpassword);
            }
        }

        function setError(input, message) {
            const formControl = input.parentElement;
            const errorMsg = formControl.querySelector(".registration_input-msg");
            formControl.className = "form-control text-left error";
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
            {/* Main Wrapper */}
            <div className="main-wrapper registration-page">

                {/* Header 2 */}
                <HeaderTwo />

                {/* Breadcroumb */}
                {lang === "ar" ? (<BreadcrumbBox title="التسجيل" />) : (<BreadcrumbBox title="Registration" />)}
                

                {/* Registration Area */}
                <section className="registration-area">
                    <Container>
                        <Row>
                            <Col md="12">
                                <div className="registration-box">
                                    <div className="registration-title text-center">
                                        <h3>{lang === "ar" ? (<>التسجيل</>) : (<>Registeration</>)}</h3>
                                    </div>
                                    <form id="form_registration" className="form">
                                        <p className="form-control">
                                            <label htmlFor="registration_fname">{lang === "ar" ? (<>الاسم الأول</>) : (<>First Name</>)}</label>
                                            {lang === "ar" ? (<input type="text" placeholder="الاسم الاول" id="registration_fname" />) : (<input type="text" placeholder="First name" id="registration_fname" />)}
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>الاسم الاخير</>) : (<>Last Name</>)}</label>
                                            {lang === "ar" ? ( <input type="text" placeholder="الاسم الاخير" id="registration_lname" />) : ( <input type="text" placeholder="Last name" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_email">{lang === "ar" ? (<>عنوان البريد الإلكتروني</>) : (<>Email Address</>)}</label>
                                            {lang === "ar" ? ( <input type="email" placeholder="عنوان البريد الإلكتروني" id="registration_email" />) : ( <input type="email" placeholder="Email address" id="registration_email" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_user">{lang === "ar" ? (<>اسم االمستخدم</>) : (<>User Name</>)}</label>
                                            {lang === "ar" ? (  <input type="text" placeholder="اسم المستخدم" id="registration_user" />) : (  <input type="text" placeholder="Username" id="registration_user" />)}
                                          
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_password">{lang === "ar" ? (<>كلمه السر</>) : (<>Password</>)}</label>
                                            {lang === "ar" ? ( <input type="كلمه السر" placeholder="*******" id="registration_password" />) : ( <input type="password" placeholder="*******" id="registration_password" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_cpassword">{lang === "ar" ? (<>تأكيد كلمة المرور</>) : (<>Confirm Password</>)}</label>
                                            {lang === "ar" ? (<input type="password" placeholder="تأكيد كلمة المرور" id="registration_cpassword" />) : (<input type="password" placeholder="Confirm password" id="registration_cpassword" />)}
                                            
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>تاريخ الميلاد</>) : (<>Date of Birth</>)}</label>
                                            {lang === "ar" ? ( <input type="number" placeholder="05/08/2005" id="registration_lname" />) : ( <input type="number" placeholder="05/08/2005" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>رقم الهاتف</>) : (<>Contact Number</>)}</label>
                                            {lang === "ar" ? ( <input type="number" placeholder="971589745124" id="registration_lname" />) : ( <input type="number" placeholder="971589745124" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>رقم الهويه</>) : (<>Emirates ID No</>)}</label>
                                            {lang === "ar" ? ( <input type="number" placeholder="784-2009-9452158-7" id="registration_lname" />) : ( <input type="number" placeholder="784-2009-9452158-7" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>تاريخ انتهاء الهويه</>) : (<>Emirates ID Expiry Date</>)}</label>
                                            {lang === "ar" ? ( <input type="number" placeholder="28-05-2022" id="registration_lname" />) : ( <input type="number" placeholder="28-05-2022" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>رقم جواز السفر</>) : (<>Passport Number</>)}</label>
                                            {lang === "ar" ? ( <input type="number" placeholder="ادخل رقم جواز السفر " id="registration_lname" />) : ( <input type="number" placeholder="Enter Passport Number" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>
                                        <p className="form-control">
                                            <label htmlFor="registration_lname">{lang === "ar" ? (<>تاريخ انتها جواز السفر</>) : (<>Passport Expiry Date</>)}</label>
                                            {lang === "ar" ? ( <input type="number" placeholder="ادخل تاريخ انتهاء جواز" id="registration_lname" />) : ( <input type="number" placeholder=" Enter Passport Expiry Date" id="registration_lname" />)}
                                           
                                            <span className="registration_input-msg"></span>
                                        </p>

                                        <button>{lang === "ar" ? (<>سجل الان</>) : (<>Register Now</>)}</button>
                                    </form>
                                    <div className="have_account-btn text-center">
                                    {lang === "ar" ? (<> <p>هل لديك حساب؟ <Link to="/login">تسجيل الدخول هنا</Link></p></>) : (<> <p>Already have an account? <Link to="/login">Login Here</Link></p></>)}
                                       
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                </section>

                {/* Footer 2 */}
                <FooterTwo />

            </div>
        </Styles>
    )
}

export default Register
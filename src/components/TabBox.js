import React, { Component } from 'react';
import { Container, Row, Col, Tab, Nav } from 'react-bootstrap';
import { Styles } from "./styles/tabBox.js";
import { LangContext } from "../components/common/contexts/LangContext";

class TabBox extends Component {
    static contextType = LangContext;
    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Tab Box Area */}
                <section className="tab-section">
                    <Container>
                        <Tab.Container defaultActiveKey="why">
                            <Row>
                                <Col lg="3" md="4">
                                    <Nav className="flex-column">
                                        <Nav.Item>
                                            <Nav.Link eventKey="why"><i className="las la-arrow-right"></i>{lang === "ar" ? ( <>البرامج التعليمية  </> ):( <>Educational programs</>)}</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="mission"><i className="las la-arrow-right"></i>{lang === "ar" ? (<> الخطط التعليمية </>  ):(<>  Educational plans </> )}</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="vision"><i className="las la-arrow-right"></i>{lang === "ar" ? ( <> البرامج التدريبيه</>  ):(  <> Study Programs </>  )}</Nav.Link>
                                        </Nav.Item>
                                        <Nav.Item>
                                            <Nav.Link eventKey="ranking"><i className="las la-arrow-right"></i>{lang === "ar" ? (<>  استراجيات التعلم </>):(<> Learning Strategies</>)}</Nav.Link>
                                        </Nav.Item>
                                       
                                    </Nav>
                                </Col>
                                <Col lg="9" md="8">
                                    <Tab.Content>
                                        <Tab.Pane eventKey="why">
                                            <h4 className="tab-title">{lang === "ar" ? ( <>البرامج التعليمية </> ):( <>Educational programs</>)}</h4>
                                            {lang === "ar" ? ( <p className="tab-desc">لدى المركز خطة تعليمية بإتقان تجويد القرآن الكريم مقسمة إلى عدة مستويات </p>):(<p className="tab-desc">The center has an educational plan for mastering the recitation of the Noble Qur’an, divided into several levels </p>)}
                                           
                                            <ul className="list-unstyled check-list">
                                            {lang === "ar" ? (  <li><i className="fa fa-check"></i>تحفة الأطفال	¬ مستويان </li> ):( <li><i className="fa fa-check"></i>Children's Masterpiece ¬ Two Levels </li>)}
                                               
                                                {lang === "ar" ? ( <li><i className="fa fa-check"></i>الجزرية ¬ ٣ مستويات </li> ):(<li><i className="fa fa-check"></i>Al-Jazriah ¬ 3 levels</li>)}
                                                {lang === "ar" ? ( <li><i className="fa fa-check"></i>القاعدة النورانية ¬ مستويان </li> ):(<li><i className="fa fa-check"></i>Al-Nooraniah Base ¬Two Levels </li> )}
                                               
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="mission">
                                            <h4 className="tab-title">{lang === "ar" ? (<> الخطط التعليمية </>  ):(<>  Educational plans </> )}</h4>
                                            {lang === "ar" ? (<p className="tab-desc">لدى المركز خطط تعليمية لختم القرآن واضحة ومحددة خلال</p>  ):(<p className="tab-desc">The center has clear and specific educational plans for sealing the Qur’an during</p> )}
                                            
                                            <ul className="list-unstyled check-list">
                                            {lang === "ar" ? ( <li><i className="fa fa-check"></i>٧ سنوات</li> ):( <li><i className="fa fa-check"></i>7 years</li> )}
                                            {lang === "ar" ? ( <li><i className="fa fa-check"></i>٦ سنوات </li> ):( <li><i className="fa fa-check"></i>6 years</li> )}
                                            {lang === "ar" ? ( <li><i className="fa fa-check"></i>٥ سنوات </li>  ):( <li><i className="fa fa-check"></i>5 Years</li> )}
                                            {lang === "ar" ? ( <li><i className="fa fa-check"></i>سنتين </li>  ):( <li><i className="fa fa-check"></i>2 Years</li> )}
                                            {lang === "ar" ? ( <li><i className="fa fa-check"></i>سنه</li>  ):( <li><i className="fa fa-check"></i>1 Year</li> )}
                                                
                                                
                                            </ul>
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="vision">
                                            <h4 className="tab-title">{lang === "ar" ? ( <> البرامج التدريبيه</>  ):(  <> Study Programs </>  )}</h4>
                                            {lang === "ar" ? ( <p className="tab-desc">لدى المركز برامج تدريبية  تخصصية تهدف إلى تطوير و  تحسين أداء فريق العمل والمنتسبين </p>  ):(<p className="tab-desc">The center has specialized training programs aimed at developing and improving the performance of the work team and its affiliates</p>  )}
                                           
                                           
                                        </Tab.Pane>
                                        <Tab.Pane eventKey="ranking">
                                            <h4 className="tab-title">{lang === "ar" ? (<>  استراجيات التعلم </>):(<> Learning Strategies</>)}</h4>
                                            {lang === "ar" ? (<p className="tab-desc">يستخدم أعضاء هيئة التدريس أحدث الاستراتيجيات والوسائل في عملية التعليم و التحفيظ بهدف تخريج حافظات متقنات لكتاب الله</p>):(<p className="tab-desc">Faculty members use the latest strategies and means in the process of teaching and memorization with the aim of graduating perfect memorizers of the Book of God</p>)}
                                            
                                           
                                        </Tab.Pane>
                                       
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </Container>
                   
                </section>
            </Styles>
        )
    }
}

export default TabBox

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import HeaderTwo from '../../components/HeaderTwo';
import { BreadcrumbBox } from '../../components/common/Breadcrumb';
import BlogSidebar from './components/BlogSidebar';
import CommentForm from './components/CommentForm';
import FooterTwo from '../../components/FooterTwo';
import { Styles } from './styles/blogDetails.js';
import {LangContext} from "../../components/common/contexts/LangContext";

class BlogDetails extends Component {
    static contextType = LangContext;
    render() {
        const lang = this.context.lang;
        return (
            <Styles>
                {/* Main Wrapper */}
                <div className="main-wrapper blog-details-page">

                    {/* Header 2 */}
                    <HeaderTwo />

                    {/* Breadcroumb */}
                   <BreadcrumbBox title="Blog For non-Arabic speakers" />
                   

                    {/* Blog Details */}
                    <section className="blog-details-area">
                        <Container>
                            <Row>
                                <Col lg="9" md="8" sm="7">
                                    <div className="blog-details-box">
                                        <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/book.jfif`} alt="" className="img-fluid" />
                                        </div>
                                        <div className="heading">
                                            <h4></h4>
                                        </div>
                                        <div className="blog-auth_date d-flex">
                                            <div className="author-img d-flex">
                                                <Link to={process.env.PUBLIC_URL + "/"}><img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" /></Link>
                                                <p><Link to={process.env.PUBLIC_URL + "/"}>Al Huda</Link></p>
                                            </div>
                                            <div className="post-date">
                                                <p><i className="las la-calendar"></i> April 23, 2020</p>
                                            </div>
                                            
                                            <div className="post-comment">
                                                <p><Link to={process.env.PUBLIC_URL + "/"}><i className="las la-comment"></i> (23)</Link></p>
                                            </div>
                                        </div>
                                        <div className="blog-details-desc">
                                            <p>தமிழ் மொழியில் தஜ்வீத் சட்டங்களை விரிவாக விவரிக்கும் சிறப்பான நூல் இல்முத் தஜ்வீத் எனும் இந்நூல். மர்கஸ் அல் ஹுதாவின் கல்வி குழு கடந்த 2019 ஆம் ஆண்டில் வெளியிட்ட  இல்முத் தஜ்வீத் எனும் தஜ்வீத் நூல் உலக  தமிழ் மக்களிடையே அன்பான வரவேற்பை பெற்று உலகின் பல மதரஸாக்களிலும் அதன் மூலம் தமிழ் மக்கள் பயன் பெற்று வருகின்றனர்.  தஜ்வீதை கற்க விரும்பக்கூடிய அடிப்படையான மாணவர்களுக்கு எளிமையான முறையில் பாடங்களை விளக்குவதோடு அதனைக் கற்பிக்கும் ஆசிரியர்களுக்கும் மிகப் பெரும் உதவியாக இந்த நூல் அமைந்துள்ளது. மாணவர்கள் தங்களை மேம்படுத்திக் கொள்ளும் வகையில்  பாடங்களுடன்  அவற்றின் பயிற்சிகளும் சேர்க்கப்பட்டுள்ளது, எழுத்துக்களின் உச்சரிப்பை  விளக்கக்கூடிய பாடத்தில் அதற்கான படங்கள் சேர்க்கப்பட்டுள்ளது, சட்டங்களை எளிதாக புரியும் விதத்தில் அட்டவணைப்படுத்தி உதாரணங்களுடன் அவற்றை தொகுத்துள்ளது  என பல சிறப்பம்சங்களை இந்நூல் பெற்றுள்ளது.  இந் நூலை அடிப்படையாகக் கொண்டு இணையவழியில் 'இல்முத் தஜ்வீத் ஆன்லைன் வகுப்புகள்' - என வாராந்திர தொடர் வகுப்புகள் நடத்தப்பட்டு உலகின் பல்வேறு பகுதிகளில் இருந்தும் ஆயிரக்கணக்கான சகோதரிகள் அதன் மூலம் பயன் பெற்றது அல்லாஹ்வின் மிகப்பெரிய அருளாகும்.  அல்லாஹ்வின் மாபெரும் கிருபையினால் இந்த நூலை கொண்டு  ஆயிரக்கணக்கான தமிழ் மக்கள் நற்பயன் பெற்று வருவதை  அவர்களின் கருத்துக்களின் மூலம் அறியப் பெறுகின்றோம். அனைத்து புகழுக்கும் நன்றிக்கும்  உரியவன் அல்லாஹ் ஒருவன் மட்டுமே.الحمد لله رب العالمين</p>
                                            <ul className="list-unstyled">
                                            <div className="heading">
                                            <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/gg1.jfif`} alt="" className="img-fluid" />
                                        </div>
                                            <h4>NOOR AL QUR’AN  </h4>
                                        </div>
                                                <li>“His character was the Qur’an ” was what Aisha ( May Allah be pleased with her) referred to when asked about the Messenger of Allah ( (peace and blessings of Allah be upon him) ( Bukhari). </li>
                                                <li>A person’s character is upon that which he or she loves and practices, how they nurture it and ensure that it is done the right way. This is what the Noor Al Qur’an class aspires to do for your child. To create that love, respect and closeness to the Holy Qur’an and acting upon it. Our knowledgeable, experienced, patient and loving teachers of different nationalities have taken this responsibility upon their shoulders with a great passion with the help of Allah Subhanahu wa Ta’ala. </li>
                                                <li>The recitation of Ubayy bin Ka’ab ( May Allah be pleased with him) was described  by the Messenger ( peace and blessings of Allah be upon him) as being that of the “ best way a person could recite the holy book from his ummah”. 
*The emphasis on Tajweed while ensuring the correct use of the makharij, focusing on the quality of the tilawah and memorizing the words of our Creator is what can help our children emulate the recitation of Ubayy ( May Allah be pleased with him). </li>
<li>Based on an activity-based learning methodology, your child will be constantly engaged during their time spent in this programme. Parents also get to track and coordinate with the teachers and admin on the progress of their little ones through reports around general performance. Periodic assessments and competitions are undertaken to ensure that we are able to review and validate that the students have clearly learnt and understood the different content that is covered within the subjects. It ensures that their character building is well- rounded, they are also taken through the understanding and memorization of duas that can be applied at the appropriate times and situations.</li>

        </ul>
                                        </div>
                                        <div>
                                        <ul className="list-unstyled">
                                            <div className="heading">
                                            <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/gg3.jfif`} alt="" className="img-fluid" />
                                        </div>
                                            <h4>NAHW AL JANNAH </h4>
                                        </div>
                                                <li>'(This is) a Book (the Qur'an) which We have sent down to you, full of blessings that they may ponder over its Verses, and that men of understanding may remember.' [Surah Saad, Ayah 29]</li>
                                                <li>The NAHW AL JANNAH weekend programme is designed around the  learning methodology that lays emphasis on striving to understand and enact each verse that was memorized and make the teachings of those verses an integral part of the children's character, in his mind, heart, speech and action similar to that which were used by our beloved companions during their memorizations .We reinforce in our students  the ability to practically implement the teachings of the Holy Qur’an in their daily lives. This programme is targeted towards our young learners between the age group of 6yrs to 16yrs and ensures that each student completes it having attained the necessary skills though the progressive key stages of “Memorize-Understand-Reflect-Apply”</li>
                                               {/* <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>*/}
        </ul>
                                        </div>
                                        <div>
                                        <ul className="list-unstyled">
                                            <div className="heading">
                                            <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/gg2.jfif`} alt="" className="img-fluid" />
                                        </div>
                                            <h4>Tafseer Al Qur’an</h4>
                                        </div>
                                                <li>An in-depth Tafseer programme designed around immersive learning and understanding of the key teachings of the Holy Qur’an while providing guidance to the students on how to go about applying those in their daily lives. </li>
                                                <li>The Tafseer classes are based upon major Tafseer sources, which include: Ibn Katheer, As-Sa’adi, Ibn Uthaymeen and Al -Jaza’iri. </li>
                    <li> The course offers unique insights to the deeper meanings of the words of our creator and help us make an impactful change to our lives both in this world and for the hereafter in sha Allah. The  programme aims to move the hearts of the students, giving them a clear understanding of the verses as they were revealed to our beloved Prophet (Peace and blessings of Allah ve upon him) and in the way they were taught to our pious predecessors.</li>
        </ul>
                                        </div>
                                        <div>
                                        <ul className="list-unstyled">
                                            <div className="heading">
                                            <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/gg.jfif`} alt="" className="img-fluid" />
                                        </div>
                                            <h4>KUNOOZ AL TAMILIYAH</h4>
                                        </div>
                                                <li>அல்லாஹ்வின் மாபெரும் கிருபையால் அமீரகத்தின் துபாய் நகரில் மர்கஸ் அல் ஹுதாவின்  தமிழ் பிரிவு  கடந்த 2010 ஆம் ஆண்டு முதல் தொடங்கப்பட்டு சிறப்பான முறையில் நடைபெற்று வருகிறது. தாய்மொழியான தமிழ் மொழியிலேயே தஜ்வீத் கற்பித்தல், அல் குர்ஆன் மனனம், என இஸ்லாமிய மார்க்கத்தினை அழகான முறையில் தமிழ் மக்களுக்கு போதித்து வருகின்றோம்.  மர்கஸ் அல் ஹுதாவின் கல்வி குழு வெளியிட்ட  இல்முத் தஜ்வீத் எனும் தஜ்வீத் நூல் உலக  தமிழ் மக்களிடையே அன்பான வரவேற்பை பெற்று உலகின் பல மதரஸாக்களிலும் அதன் மூலம் தமிழ் மக்கள் பயன் பெற்று வருகின்றனர். அல்ஹம்து லில்லாஹ். அல்லாஹ்வின் வேதமான அல் குர்ஆனை அழகான முறையில் ஓத வேண்டும் என்ற ஆவல் உள்ள சகோதரிகள் இணைந்து, சரியான கல்வியை பெற அல்லாஹ் நல்லருள் புரிவானாக! ஆமீன்!</li>
                                               {/* <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>
                                                <li> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum amet quo eius saepe et quis necessitatibus hic natus facere Quae impedit eligendi perspiciatis animi maxime ab minus corporis omnis similique excepturi.</li>*/}
        </ul>
                                        </div>
                                        <div>
                                        <ul className="list-unstyled">
                                            <div className="heading">
                                            <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/gg4.jfif`} alt="" className="img-fluid" />
                                        </div>
                                            <h4>KUNOOZ AL JUMU’A</h4>
                                        </div>
                                                <li>The Prophet (blessings and peace of Allah be upon him) said: “The one who is skilled in reciting Qur’an will be with the noble, honourable scribes and the one who recites Qur’an and falters therein, and finds it difficult, will have a double reward.”</li>
                                               <li>Narrated by al-Bukhaari (4937) and Muslim (798).</li>
                                                <li> Targeted to support our sisters of different nationalities and diverse backgrounds the KUNOOZ AL JUMU’A programme is designed with the core objective of memorization (Hifdh) of the Qur’an. </li>
                                            <li> The learning methodology is designed around 8 levels of Hifd/ tajweed  with emphasis on the theoretical sciences behind it, mainly with the correct pronunciation ( Makharij) and how to go about currently applying those learnings when reciting the Words of our Creator. </li>
                                        <li> Taught in the English language, the programme also ensures that students’ learning efforts are fruitful and reinforced through undertaking periodic assessments and competitions. As with most of our other programmes, the KUNOOZ AL JUMU’A also lays stress on the foundations of reading ( Qaaida Nooraniyah) and recitation (tilawat) to ensure that the students have a well-rounded experience when learning about the noble Qur’an.</li>
                                    
        </ul>
                                        </div>
                                        <div>
                                        <ul className="list-unstyled">
                                            <div className="heading">
                                            <div className="blog-details-banner">
                                            <img src={process.env.PUBLIC_URL + `/assets/images/quran1.jfif`} alt="" className="img-fluid" />
                                        </div>
                                            <h4>KUNOOZ AL SINHALIYAH</h4>
                                        </div>
                                                <li>A Qur’an class designed for the Sinhalese speaking ( specially the revert sisters ) on Friday mornings. Our students of different backgrounds are taught basic Arabic letters, writing, reading. Gradually, along with the study of Qaaida Nooraniyah they learn to read the Qur’an. The students also memorize the short Surahs starting from the end of the Qur’an. This is complemented by the tafseer of the Surahs in the sinhalese language encouraging them to understand and apply the lessons and let it impact their lives. This way they interact with the Qur’an in a holistic manner.</li>
                                             
                                               
        </ul>
                                        </div>
                                        <div className="blog-tag_share d-flex justify-content-between">
                                            
                                           
                                        </div>
                                        <div className="blog-comments">
                                            <h5>Comments (16)</h5>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Asbah Nawaz</h6>
                                                            <p>| Sept 2020 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Alhamdulilah. May Allah(swt) bless you all for your efforts which i can't describe in a sentence. Markaz al huda is a treasure in the desert and the best thing happened in our Dubai life Alhamdulilah. May Allah accept all our good intentions and ease all our worries Aameen. Love you all for the sake of Allah.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Mawiyah Morad</h6>
                                                            <p>| Sept 2020 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Alhamdulillah,I am very happy to be a student in this Markaz.The course is excellently taught with tremendous effort Masha Allah.May Allah bless everything</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Nilofer Moradi</h6>
                                                            <p>| Sept 2020 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Jazakallahu khair. The teaching method is very nice and easy to understand May Allah reward all Teachers for their hard work.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Shudun Azad</h6>
                                                            <p>| Feb 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Assalamu alaikum dear sisters, Alhamdulilah this term concluded wirh new learnings. Every term iam learning something very beneficial not only surah memorizing but also patience, discipline etc... Increasing my confidence level, for example this term i thought i won't able to fully memorize surah Al jinn because time is too short but with the help of Almighty Allah and my teacher's encouragement iam able to finish thoroughly Alhamdulilah. There is not a single unsatisfied moment for me in markaz Al huda such a dedicated organization which is rarely found anywhere else. MashaAllah may Allah reward immensely for the hardwork of all the sisters, teachers,volunteers Aameen. JazakhAllah khairan dear sisters l love you all for the sake of Almighty Allah.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Reshma Nour</h6>
                                                            <p>| Feb 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>அல்ஹம்துலில்லாஹ் அல்ஹம்துலில்லாஹ் மழை எப்படி தரிசு நிலங்களை உயிர்ப்புள்ளதாக ஆக்குகிறதோ, அதுபோன்றுதான் கல்வியும் மனதையும், இதயத்தையும் உயிர்ப்புள்ளதாக ஆக்குகிறது. கல்வியை பயன்று தரும் எங்கள் ஆசிரிய சகோதரிகள் அனைவருக்கும் அவர்களின் இந்த கல்வியின் பயனம் மேலும் மேலும் சிறப்பாக தொடர..... அல்லாஹ்விடம் பிரார்திக்கிறேன்</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Razan Hakeem</h6>
                                                            <p>| Aug2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Alhumdulillah I feel blessed to be a part of markaz. I got to learn tajweed from basics and our teachers MashaAllah are very hard working and teaches with loads of patience 💙</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Alima Malek</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Bismillaah… I really appreciate and love the class , it was great learning of Quran with the correct teachings it, applying the rules and tajweed with it. And teacher is so helpful and clear teaching it.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Nathifa Hoque</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Alhumdulillah i feel my self very blessed to be a part of markarz ,u all do sincere efforts its really appreciable, Allah teward u all immensely</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Anbar Bangura</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Alhamdulillah so far I have felt very comfortable in the classes and the teacher has been very understanding and supportive.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Shermin Habib</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>This is the best platform for me to learn Quran in a proper manner.May Allah bless all the staf members of Markaz al Huda.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Tehzeeb Shahin</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Excellent teaching and appreciate each and every efforts of the Markaz al Huda team</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Ahlam Hatem</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>MAH masha allah a truely honourable institution…alhamdulillah..teachers r very humble and polite towards the student..we r lucky to have our children on MAH…</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Riham Ghaffari</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>The teachers are great. My child has made great progress in good recitation and hifdh of the holy Qur'an.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Qindeel Turay</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>I have found the class very effective, my daughters have improved very well in their Hifdh and Thajweed</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Ifra Aziz</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Appreciate your support n effort in giving my child the best of knowledge. May Allah bless all those involved in Markaz with the goodness in this world and here after.</p>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="comment-box d-flex">
                                                <div className="comment-image">
                                                    <img src={process.env.PUBLIC_URL + `/assets/images/profile.jpg`} alt="" />
                                                </div>
                                                <div className="comment-content">
                                                    <div className="content-title d-flex justify-content-between">
                                                        <div className="comment-writer">
                                                            <h6>Sakhira Abdella</h6>
                                                            <p>| Aug 2021 |</p>
                                                        </div>
                                                        <div className="reply-btn">
                                                            <button type="button"><i className="las la-reply-all"></i> Reply</button>
                                                        </div>
                                                    </div>
                                                    <div className="comment-desc">
                                                        <p>Usefull for life and ahirah.. Teaching method fantastic.. Alhamthulillah. May Allah reward it for ur noble act</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>

                                        <CommentForm />
                                    </div>
                                </Col>
                                <Col lg="3" md="4" sm="5">
                                    <BlogSidebar />
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
}

export default BlogDetails
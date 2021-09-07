import React, { Component } from 'react';
import Header from './components/Header';
import HeroSlider from './components/HeroSlider';
import IconBox from './components/IconBox';
import AboutUs from './components/AboutUs';
import CourseFilter from './components/CourseFilter';
import TestimonialSlider from './components/TestimonialSlider';
import FaqEvent from './components/FaqEvent';
import TeamSlider from './components/TeamSlider';
import HelpArea from './components/HelpArea';
import HomeBlog from './components/HomeBlog';
import CampusTour from './components/CampusTour';
import Footer from './components/Footer';
import CourseSlider from './components/CourseSlider';
import AboutUsTwo from './components/AboutUsTwo';

export default class HomeOne extends Component {
    render() {
        return (
            <div className="main-wrapper" >

                {/* Header */}
                < Header />

                {/* Hero Slider */}
                < HeroSlider />

                {/* Icon Box */}
                < IconBox />

               


                {/* About Area */}
                < AboutUs />

                {/* Course Filter */}
               
 {/* Course Slider */}
 <CourseSlider/>  
  {/* About Us 2 */}
  
                {/* Testimonial Slider */}
                < TestimonialSlider />

                {/* Faq & Event Area */}
              

                {/* Team Slider */}
                <TeamSlider/>

              
                
            

                {/* Blog Area */}
                

                {/* Campus Tour */}
                < CampusTour />

                {/* Newsletter Form */}


                {/* Footer */}
                < Footer />

            </div >
        );
    }
}

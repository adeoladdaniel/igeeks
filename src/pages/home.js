import React from "react"; 
import Seo from '../components/Seo';
import Navigation from '../components/Navigation';
import HomeSection from "../components/HomeSection";
import ServiceCards from "../components/ServiceCards";
import Portfolio from "../components/Portfolio";
import Testimonial from "../components/Testimonial";
import Footer from "../components/Footer";





function Home (){

  return(
      <React.Fragment>
          <Seo page = "Home">
          <header className="header">
            <Navigation/>


            <h1 className="header-text">
            <b className="inner-color">  IGEEKS </b> TECHNOLOGY  
            </h1>

            <h3 className="header-text-sub">WELCOME TO THE FUTURE</h3>

            <div class="wrapper">
               <button className="headerbut">Get Started</button>
            </div>
          </header>
            <HomeSection/>


            <ServiceCards/>

            <Portfolio/>

            <Testimonial/>
          </Seo>
          <Footer/>
        
      </React.Fragment>


  );
  
}

export default Home;


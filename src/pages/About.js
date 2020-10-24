import React from "react"; 
import Seo from '../components/Seo';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import Aboutcard from "../components/Aboutcard";
import Blender from "../components/Blender";





function About (){

  return(
      <React.Fragment>
          <Seo page = "About">
          <header className="a-header">
            <Navigation/>
            <div className="about-header-text">
              <h1>About Us</h1>
            </div>
        
         
          </header>

          <Aboutcard/>

          <Blender/>

           <Footer/>  
          </Seo>
        
        
      </React.Fragment>


  );
  
}

export default About;


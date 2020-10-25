import React from "react"; 
import Seo from '../components/Seo';
import Navigation from '../components/Navigation';
import Footer from "../components/Footer";
import {Container,Row, Col} from "react-bootstrap"






function Contact (){

  return(
      <React.Fragment>
          <Seo page = "Contact">
          <header className="c-header">
            <Navigation/>
            <div className="about-header-text">
              <h1>Contact Us</h1>
            </div>
        
         
          </header>

          <div className="contact_header">
             
               
              </div>

              <div className="temple">

                <Container>
                  <Row>
                    <Col md={4}>
                      <div className="templar">
                    <i class="fa fa-mobile"></i>
                    </div>

                      <h3>Contact Us</h3>

                      <p><b>Africa</b></p>
                      <p> +1 (317) 869-2103</p>
              

             
                    </Col>
                    
                    <Col md={4}>
                      <div className="templar">
                    <i class="fa fa-location-arrow"></i>
                    </div>
                    <h3>Come see Us</h3>

                    <p><b>Ibadan Nigeria</b></p>
                
                    <p>No. 2 Sankore Street, Univrsity of Ibadan, Ibadan Nigeria.</p>
                    </Col>
                    
                    <Col md={4}>
                      <div className="templar">

                      
                    <i class="fa fa-history"></i>
                      </div>
                    <h3>Support </h3>

                    <p><b>we provide round the call support</b></p>

                    </Col>
                  </Row>
                </Container>
              </div>

               


           <Footer/>  
          </Seo>
        
        
      </React.Fragment>


  );
  
}

export default Contact;


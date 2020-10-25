import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  ServiceCards extends React.Component{
    render(){
      return(

        <React.Fragment>
                 
                 <div className="card-header-text">
                         <h3> Services</h3>
                    
                     </div> 
                 <div className ="card-section">

                         
                   <Container>
                     <Row>
                       <Col md={4}>
                   
                            <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-desktop sizer"></i>
                                </span>
                                    <h6> DEVLOPMENT SERVICES</h6>
                                    <hr/>
                                <p>We have years of expereince in desktop application developmeand our products speeks.</p>
                            </div>
                       </Col>
                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-bar-chart"></i> 
                                </span>
                             

                                <h6> MARKETING SERVICES</h6>
                                <hr/>
                                <p>We are expert in online marketing using latest technique and technologies like Google Adwords, Facebook Marketing, Youtube Video ads, mobile adverts and other social media plateforms.</p>
                            </div>
                       </Col> 

                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-cloud"></i>
                                </span>
                        

                                <h6> CLOUD SERVICES</h6>
                                <hr/>
                                <p>Web Hosting, Dedicated Servers, Data Servers etc</p>
                            </div>
                     </Col> 
                     </Row>
                   </Container>
                   <div className="card-but-text">
                   <a href="about"><button className="card-but">
                     Learn More
                   </button>
                  </a>
                   </div>
                 </div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default ServiceCards;


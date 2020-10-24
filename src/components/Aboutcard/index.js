import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  Aboutcard extends React.Component{
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
                                    <h6> DESKTOP APPLICATION DEVELOPMENT </h6>
                                    <hr/>
                                <p>We have years of expereince in desktop application developmeand our products speeks.</p>
                            </div>
                       </Col>
                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-code"></i>
                                </span>
                             

                                <h6> WEB DEVELOPMENT</h6>
                                <hr/>
                                <p>
                                    We are great at creating stunning and unique Content Management Systems, e-commerce portals, mobile sites etc with beautiful user interface and great user expereince.</p>
                            </div>
                       </Col> 

                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-mobile"></i>
                                </span>
                        

                                <h6>MOBILE APPLICATION DEVELOPMENT</h6>
                                <hr/>
                                <p>We develop native and cross plateform mobile applications which are user friendly with great user experince.</p>
                            </div>
                     </Col> 
                     </Row>
                   </Container>

                   <Container>
                     <Row>
                       <Col md={4}>
                   
                            <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-paint-brush"></i>
                                </span>
                                    <h6> GRAPHIC DESIGN </h6>
                                    <hr/>
                                <p>With our great team of Graphic designers we have got you covered..</p>
                            </div>
                       </Col>
                       <Col md={4}>
                       <div className="cards">
                                <span className="card-head">
                                <i class="fa fa-bar-chart"></i> 
                                </span>
                             

                                <h6> MARKETING SERVICES</h6>
                                <hr/>
                                <p>
                                
                                We are expert in online marketing using latest technique and technologies like Google Adwords, Facebook Marketing, Youtube Video ads, mobile adverts and other social media plateforms.
                                </p>
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
                   {/* <div className="card-but-text">
                   <button className="card-but">
                     Learn More
                   </button>

                   </div> */}
                 </div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default Aboutcard;


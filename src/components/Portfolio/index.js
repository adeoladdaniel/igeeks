import React from "react"; 
import {Container, Row, Col, Carousel} from 'react-bootstrap'






class  Portfolio extends React.Component{
    render(){
      return(

        <React.Fragment>

         
                
                <div className="portfolioslider">

                <div className="portfolio-head">
                    <h1>
                        Portfolio
                  
                    </h1>
                    <hr/>
                    <p>Works we've done</p>
                </div>
                    <Container style={{background:"white"}}>
                    
                        <Row>
                        
                             <Col md={6}>
                                    <Carousel>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="./asset/img/slider1.png"
                                            alt="First slide"
                                            />
                                          
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="./asset/img/slider2.png"
                                            alt="Third slide"
                                            />

                                      
                                        </Carousel.Item>
                                        <Carousel.Item>
                                            <img
                                            className="d-block w-100"
                                            src="./asset/img/slider3.png"
                                            alt="Third slide"
                                            />

                                        </Carousel.Item>
                                    </Carousel>
                            </Col>
                                    
                            <Col md={6}>
                            <div>
                                        <h1 style={{color: "#dddddd"}}>O1</h1>
                                        <br/>

                                        <h3>Your Technical Partner Towards Web Success.</h3><br/>

                                        <p>It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                                  
                                   <button className="portbut">
                                       Get started
                                   </button>
                                    </div>
                            </Col>
                        </Row>                
                    </Container> 
                </div>
        </React.Fragment>
  
  
    );

    }
  
    
}

export default Portfolio;


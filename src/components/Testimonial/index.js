import React from "react"; 
import {Container, Row, Col, Carousel} from 'react-bootstrap'






class  Testimonial extends React.Component{
    render(){
      return(

        <React.Fragment>
                <div className="testimonailsection">
                    <Container>
                        <Row>
                            <Col md={6}>
                        <div className="test-head">
                         <span className="vertical"> WHO WE ARE</span>

                         <h2>Don’t Take <br/>
                          <strong> Our Word</strong> For it</h2>
                       </div>
                            </Col>

                            <Col md={6}>
                            <div>
                            <Carousel>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./asset/img/Group 17.png"
      alt="First slide"
    />

    <Carousel.Caption>
      <h3>Feedback</h3>
      <p>We have been using MPPTIMER for our conferences and short courses for about 3 years and the software has helped to organise and keep to time during powerpoint presentation </p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src="./asset/img/Group 16.png"
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3>Feedback</h3>
      <p>
                  iRegisterKids has really made check-In and check-out kids faster and easier,
                  what we love most is the classroom andriod TV app which updates child list in real time. 
                  great product from iGeeksNG. 
                </p>
    </Carousel.Caption>
  </Carousel.Item>

</Carousel>
                            </div>
                            </Col>
                        </Row>
                    </Container>
                </div>

                
  
        </React.Fragment>
  
  
    );

    }
  
    
}

export default Testimonial;


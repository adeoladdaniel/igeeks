import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  HomeSection extends React.Component{
    render(){
      return(

        <React.Fragment>
                 <div className ="section1">
                   <Container>
                     <Row>
                       <Col md={6 }>
                       <div>
                         <span className="vertical"> WHO WE ARE</span>

                         <h2>A <strong>Professional</strong> <br/>
                                & Hard Working Team</h2>
                       </div>
                       </Col>
                       <Col md={6}>
                      <p>iGeeksNG is an evolving company, providing enterprise ICT services to mid range and large scale companies and organisations in Nigeria and USA.

                  Our passion, zeal, teamwork combined with our quest for innovative solutions and passion to deliver an exceptional customer experience, have been rewarding and have earned us an enormous amount of goodwill despite the highly competitive terrain of our business environment.

                                As a complete ICT Services and Infrastructure provider we remain committed to delivering ICT solutions that make IT simpler faster and better!</p>
                       </Col> 

                     </Row>
                   </Container>
                 </div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default HomeSection;


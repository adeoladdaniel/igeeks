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
                      <p>Lorem ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.<br/><br/>

                          It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum</p>
                       </Col> 

                     </Row>
                   </Container>
                 </div>
        </React.Fragment>
  
  
    );

    }
  
  
}

export default HomeSection;


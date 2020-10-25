import React from "react"; 
import {Container, Row, Col} from 'react-bootstrap'






class  Blender extends React.Component{
    render(){
      return(

        <React.Fragment>
                 <div className ="blender">

                 <div>
                         <span className="vertical"> WHO WE ARE</span>

                         <h2 style={{color:"white"}}>A <strong>Professional</strong> <br/>
                                & Hard Working Team</h2>
                       </div>
                       <br/>
                       <br/>
                       <br/>
                   <Container>
                     <Row>
                       <Col md={3 }>
                            <div className="blendercard">
                                 <i style={{fontSize:"3rem"}} class="fa fa-thumbs-up"></i>
                                 <br/>  <br/>
                                <div style={{color:"white"}}>
                                     <h2>125</h2>
                                 <p >WORKS COMPLETED</p>
                                 </div>
                            </div>
                      </Col>
                      <Col md={3 }>
                          <div className="blendercard">
                         
                      <i style={{fontSize:"3rem"}} class="fa fa-calendar"></i>
                      <br/> <br/>
                      <div style={{color:"white"}}>
                                     <h2>12</h2>
                                 <p > YEARS OF EXPERIENCE</p>
                                 </div>
                      </div>
                      </Col>
                      <Col md={3 }>
                          <div className="blendercard">
                   
                      <i style={{fontSize:"3rem"}} class="fa fa-users"></i> 
                      <br/>  <br/>
                      <div style={{color:"white"}}>
                                     <h2>25</h2>
                                 <p >TOTAL CLIENTS</p>
                                 </div>
                      </div>
                      </Col>
                      <Col md={3 }>
                          <div className="blendercard">
                              
                      <i style={{fontSize:"3rem"}} class="fa fa-trophy"></i>
                      <br/> <br/>
                      <div style={{color:"white"}}>
                                     <h2>2</h2>
                                 <p >AWARDS WON</p>
                                 </div>
                      </div>
                      </Col>
                     </Row>
                   </Container>
                 </div>
        </React.Fragment>
  
  
  
    );

    }
  
  
}

export default Blender;


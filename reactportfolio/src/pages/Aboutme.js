import React from 'react';
import Container from 'react-bootstrap/esm/Container';
import Hero from '../components/Hero';
// import Content from '../components/Content';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Me from '../images/me5.jpg'
// import Image from 'react-bootstrap/Image'
import Card from '../components/Card'
function AboutPage(props) {

    return(
        <div >
            <Hero title={props.title} />
            
         <Container fluid={true}>
        
        
            <Row className="justify-content-center">
                <Col md={8}>
                    {props.children}
                    
            <p className="justify-float-right">Hello! My name is Isaac Tazak Mckittrick. I'm from northern Wisconsin but currently live in Sierra Vista, Arizona. Shortly after graduating from the University of Wisconsin-La Crosse with a Bachelor's degree in Exercise Science, I decided to move and attempt a career change. I am proud to say I have completed a coding boot camp at the University of Arizona. The program consisted of a rigorous, immersive curriculum, that taught me the skills needed to become proficient in front-end and back-end technologies. .</p>
            <img src={Me}/>
            </Col>
            </Row>
        </Container>
        
    


            {/* <p>dog</p>

            <p></p>

            <p>M</p>

            <p></p> */}
            {/* </Content> */}
        </div>
    );

}

export default AboutPage;
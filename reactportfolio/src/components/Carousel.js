import React from 'react';

import Card from '../components/Card';

import burger from '../images/burger.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';

class Carousel extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            items: [
                {
                    id: 0,
                    title: 'Pro 1',
                    subTitle: 'description',
                    imgSrc: burger,
                    selected: false
                },
                {
                    id: 1,
                    title: 'Garrett Love',
                    subTitle: 'YouTube channel',
                    // imgSrc: ,
                    // link: ,
                    selected: false
                },
                {
                    id: 2,
                    title: 'Evverest',
                    subTitle: 'A social network for developers',
                    // imgSrc: 
                    // link: ,
                    selected: false
                },
                {
                    id: 3,
                    title: 'Pro 1',
                    subTitle: 'description',
                    // imgSrc: ,
                    selected: false
                },
                {
                    id: 4,
                    title: 'Pro 1',
                    subTitle: 'description',
                    // imgSrc: ,
                    selected: false
                },
                {
                    id: 5,
                    title: 'Pro 1',
                    subTitle: 'description',
                    // imgSrc: ,
                    selected: false
                }
            ]
        }
    }


    handleCardClick = (id, card) => {

        let items = [...this.state.items];

        items[id].selected = items[id].selected ? false : true;

        items.forEach(item => {
            if(item.id !== id) {
                item.selected = false;
            }
        });

        this.setState({
            items
        });
    }


    makeItems = (items) => {
        return items.map(item => {
            return <Card item={item} click={(e => this.handleCardClick(item.id, e))} key={item.id} />
        })
    }


    render() {
        return(
            <Container fluid={true}>
                <Row className="justify-content-around">
                    {this.makeItems(this.state.items)}
                </Row>
            </Container>
        );
    }

}

export default Carousel;
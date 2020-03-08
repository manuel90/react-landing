import React from 'react';
import { Container, Row, Col } from 'react-grid-system';
import MainMenu from '../mainMenu';
import './styles.scss';
import MainFeed from '../mainFeed';

const Header = () => {

    return (
        <header>
            <div className="bg bg-pope">
                <div className="gradient"></div>
                <Container>
                    <Row>
                        <Col sm={10} md={4}>
                            <div className="wrap-logo">
                                <h1><a href="/">Rule of Thumb.</a></h1>
                            </div>
                        </Col>
                        <Col sm={2} md={7}>
                            <MainMenu />
                        </Col>
                    </Row>
                </Container>
                <MainFeed />
            </div>
        </header>
    )
}

export default Header;
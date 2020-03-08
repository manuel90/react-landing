import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';
import {Animated} from "react-animated-css";

import './styles.scss';


const VanishBanner = () => {
    const [isVisible,setIsVisible] = useState(true);
    const onVanishBanner = (e) => {
        e.preventDefault();
        setIsVisible(false);
    }
    return (
        <Animated animationIn="fadeIn" animationOut="fadeOut" animationInDuration={800} animationOutDuration={800} isVisible={isVisible}>
            <Container>
                <article className="vanish-banner margin-section">
                    <div className="wrap-vanish-banner">
                        <div className="wrap-title">
                            <h3>Speak out. Be heard</h3>
                            <h2>Be counted</h2>
                        </div>
                        <div className="text">Rule of Thumb is a crowd sourced court of public opinion where anyone and everyone can speak out and speak freely. It's easy. You share your opinion. We analyze and put the data in a public report.</div>
                        <button className="close btn-plain" onClick={onVanishBanner}></button>
                        <div className="clr"></div>
                    </div>
                </article>
            </Container>
        </Animated>
    );
}

export default VanishBanner;
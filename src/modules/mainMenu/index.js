import React, { useState } from 'react';
import './styles.scss';

const MainMenu = () => {

    const [isOpened,setIsOpened] = useState(false);

    const onToggleMenu = () => {
        setIsOpened(!isOpened)
    }

    return (
        <>
            <nav>
                <span className="menu-burguer" onClick={onToggleMenu}>Menu</span>
                <ul className={isOpened ? 'open' : ''}>
                    <li><a href="#">Past Trials</a></li>
                    <li><a href="#">How It Works</a></li>
                    <li><a href="#">Log In / Sign Up</a></li>
                </ul>
            </nav>
            <div className="clr"></div>
        </>
    )
}

export default MainMenu;
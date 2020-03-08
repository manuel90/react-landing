import React from 'react';
import './styles.scss';

const MainFeed = () => {



    return (
        <div className="box-main-feed">
            <div className="wrap-content">
                <div className="wrap-text">
                    <small>What's your opinion on</small>
                    <h3>Pope Francis?</h3>
                    <p>He's talking togh clergy sexual abuse, but is he just another papal pervert protector? (thumbs down) or a true pedophile punishing pontiff? (thumbs up)</p>
                    <span className="more-info"><a href="#more" target="_blank">More information</a></span>
                    <h5>What's Your Veredict?</h5>
                </div>
                <div className="bg-pope"></div>
                <div className="bg-gray"></div>
            </div>
            <div className="wrap-buttons">
                <button className="btn btn-thumb btn-thumb-up"><i></i></button>
                <button className="btn btn-thumb btn-thumb-down"><i></i></button>
            </div>

        </div>
    );
}


export default MainFeed;
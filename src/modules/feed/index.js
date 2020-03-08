import React, { useState } from 'react';

import './styles.scss';


const Feed = (props) => {
    const {
        id,
        imageUrl,
        title,
        timeAgo,
        nameSource,
        excerpt,
        nThumbUp,
        nThumbDown,
        storeVote
    } = props;

    const [isVoting,setIsVoting] = useState(true);
    const [selection,setSelection] = useState('up');

    const [valsThumbs,setValsThumbs] = useState({
        up: nThumbUp,
        down: nThumbDown,
    });

    const selectThumb = (valSelection) => {
        setSelection(valSelection);
    }

    const onVoteAgain = (e) => {
        e.preventDefault();
        setIsVoting(true);
    }

    const onVote = (e) => {
        e.preventDefault();
        const newVals = {...valsThumbs,...{ [selection]: valsThumbs[selection] + 1 }};
        setValsThumbs(newVals);
        storeVote(id,{
            nThumbUp: newVals.up,
            nThumbDown: newVals.down
        });
        setIsVoting(false);
    }

    const ThumbPerc = ({ perc, type = '' }) => {
        return (
            <div className={"wrap-perc-thumb "+type}>
                <span className="icon-thumb"></span>
                <span className="lbl-perc">{Math.floor(perc)}%</span>
                <div className="clr"></div>
            </div>
        );
    }

    const getPercentage = (val) => {
        return (val*100)/(valsThumbs.up + valsThumbs.down);
    }

    const percUp = Math.ceil(getPercentage(valsThumbs.up));
    const percDown = Math.floor(getPercentage(valsThumbs.down));

    return (
        <article className="single-feed" style={{
            backgroundImage: `url('${imageUrl}')`,
        }}>
            <div className="gradient"></div>
            <div className="sf-content">
                <div className="wrap-title">
                    <span className={`current-rate thumb-${valsThumbs.up > valsThumbs.down ? 'up' : 'down'}`}><i></i></span>
                    <h3>{ title }</h3>
                </div>
                <div className="wrap-information">
                    <small><b>{ timeAgo }</b> in {nameSource}</small>
                    <p>{ excerpt }</p>
                    {
                        isVoting && <div className="wrap-vote-action">
                            <div className="wrap-selection">
                                <span className={"wrap-radio-thumb thumb-up"+(selection == 'up' ? ' selected' : '')} onClick={() => selectThumb('up')}><i></i></span>
                                <span className={"wrap-radio-thumb thumb-down"+(selection == 'down' ? ' selected' : '')} onClick={() => selectThumb('down')}><i></i></span>
                            </div>
                            <button className="btn-plain btn-vote-now" onClick={onVote}>Vote Now</button>
                            <div className="clr"></div>
                        </div>
                    }
                    {
                        !isVoting && <div className="wrap-vote-action thank-you">
                            <p>Thank you for voting!</p>
                            <button className="btn-plain btn-vote-now" onClick={onVoteAgain}>Vote again</button>
                            <div className="clr"></div>
                        </div>
                    }
                </div>
            </div>
            <div className="results-voting">
                <div className="bar-thumb bar-thumb-up" style={{
                    width: percUp+'%',
                }}>
                    <ThumbPerc perc={percUp} type="up" />
                </div>
                <div className="bar-thumb bar-thumb-down" style={{
                    width: percDown+'%',
                }}>
                    <ThumbPerc perc={percDown} type="down" />
                </div>
            </div>
        </article>
    );
}

export default Feed;
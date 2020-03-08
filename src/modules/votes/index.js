import React, { useState } from 'react';
import { Container, Row, Col } from 'react-grid-system';

import './styles.scss';
import Feed from '../feed';


const Votes = () => {

    const loadFeeds = (initialVal) => {

        if( !window.localStorage ) {
            return initialVal;
        }

        let storeVal = localStorage.getItem('allFeeds');
        if( storeVal ) {
            return JSON.parse(storeVal);
        }
        return initialVal;
    }

    const allFeeds = loadFeeds([
        {
            id: 1,
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tests-d0ba7.appspot.com/o/kanye.png?alt=media&token=69279cdd-a6fd-4083-a9c5-143dc3bcafac',
            title: 'Kanye West',
            timeAgo: '1 month ago',
            nameSource: 'Entertaiment',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus libero, tincidunt ac turpis quis, ornare pulvinar dui.',
            nThumbUp: 79,
            nThumbDown: 76,
        },
        {
            id: 2,
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tests-d0ba7.appspot.com/o/mark.png?alt=media&token=21d06de6-57da-4fc0-aab0-4e97146896f2',
            title: 'Mark Zuckerberg',
            timeAgo: '1 month ago',
            nameSource: 'Business',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus libero, tincidunt ac turpis quis, ornare pulvinar dui.',
            nThumbUp: 53,
            nThumbDown: 125,
        },
        {
            id: 3,
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tests-d0ba7.appspot.com/o/cristina.png?alt=media&token=991359e7-e903-492e-9460-5b074a8f4739',
            title: 'Cristina Fernández de Kirchner',
            timeAgo: '1 month ago',
            nameSource: 'Polítics',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus libero, tincidunt ac turpis quis, ornare pulvinar dui.',
            nThumbUp: 29,
            nThumbDown: 68,
        },
        {
            id: 4,
            imageUrl: 'https://firebasestorage.googleapis.com/v0/b/tests-d0ba7.appspot.com/o/malala.png?alt=media&token=2b874d65-9a8e-4b68-89a4-680c077bca57',
            title: 'Malala Yousafzai',
            timeAgo: '1 month ago',
            nameSource: 'Entertaiment',
            excerpt: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus lacus libero, tincidunt ac turpis quis, ornare pulvinar dui. tincidunt ac turpis quis, ornare pulvinar dui. Consectetur adipiscing elit. Phasellus lacus libero, tincidunt ac turpis quis, ornare pulvinar dui.',
            nThumbUp: 75,
            nThumbDown: 47,
        },
    ]);

    const storeVoteFeed = (id,votes) => {
        const feed = allFeeds.find((feed) => feed.id === id);
        if( feed ) {
            feed.nThumbUp = votes.nThumbUp;
            feed.nThumbDown = votes.nThumbDown;
            window.localStorage.setItem('allFeeds',JSON.stringify(allFeeds));
        }
    }
    return (
        <Container>
            <section className="votes-section margin-section">
                <Row>
                    {
                        allFeeds.map((feed,indexFeed) => {

                            return <Col className="col-feed" key={indexFeed} sm={12 } md={6}>
                                <Feed {...feed} storeVote={storeVoteFeed} />
                            </Col>;
                        })
                    }
                </Row>
            </section>
        </Container>
    );
}

export default Votes;
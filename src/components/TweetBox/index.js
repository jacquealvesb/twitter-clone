import React from 'react';

import { Avatar, Button } from '@material-ui/core';

import './styles.css'

function TweetBox() {
    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox__input">
                    <Avatar src=""/>
                    <input placeholder="What's happening?" type="text" />
                </div>
                <input 
                    className="tweetBox__imageInput"
                    placeholder="Optional: Enter image URL" 
                    type="text" 
                />

                <Button className="tweetBox__tweetButton">Tweet</Button>
            </form>
        </div>
    );
}

export default TweetBox;
import React from 'react';

import { Avatar } from '@material-ui/core';
import VerifiedUserIcon from '@material-ui/icons/VerifiedUser';
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
import RepeatIcon from '@material-ui/icons/Repeat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import PublishIcon from '@material-ui/icons/Publish';

import './styles.css';

function Post({
    displayName,
    userName,
    verified,
    text,
    image,
    avatar
}) {
    return (
        <div className="post">
            <div className="post__avatar">
                <Avatar src="" />
            </div>
            <div className="post__body">
                <div className="post__header">
                    <div className="post__headerText">
                        <h3>
                            Rafeh Qazi 
                            <span className="post__headerSpecial">
                                <VerifiedUserIcon className="post__badge" /> @cleverqazi
                            </span>
                        </h3>
                    </div>
                    <div className="post__headerDescription">
                        <p>I challenge you to build a Twitter clone in React!!!</p>
                    </div>
                </div>
                <img src="https://img.buzzfeed.com/buzzfeed-static/static/2017-12/6/14/asset/buzzfeed-prod-fastlane-02/anigif_sub-buzz-22161-1512589653-2.gif?output-quality=auto&output-format=auto&downsize=360:*"/>
                <div className="post__footer">
                    <ChatBubbleOutlineIcon font-size="small" />
                    <RepeatIcon font-size="small" />
                    <FavoriteBorderIcon font-size="small" />
                    <PublishIcon font-size="small" />
                </div>
            </div>
        </div>
    );
}

export default Post;
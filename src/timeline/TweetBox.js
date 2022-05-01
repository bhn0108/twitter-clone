import { Avatar, Button } from '@mui/material';
import React, { useState } from "react";
import './TweetBox.css';
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import db from "../firebase";

function TweetBox() {

    const [tweetMessage, setTweetMessage] = useState("");
    const [tweetImage, setTweetImage] = useState("");

    /* firebaseにデータ送信 */
    const sendTweet = (e) => {
        e.preventDefault();

        addDoc(collection(db, "posts"), {
            displayName: "Twitter Clone",
            username: "test",
            verified: true,
            text: tweetMessage,
            image: tweetImage,
            avatar: "",
            timestamp: serverTimestamp(), 
        });

        setTweetMessage("");
        setTweetImage("");
    }

    return (
        <div className="tweetBox">
            <form>
                <div className="tweetBox-input">
                    <Avatar />
                    <input
                        value={tweetMessage}
                        placeholder="今どうしてる？"
                        type="text"
                        onChange={(e) => setTweetMessage(e.target.value)}
                    ></input>
                </div>
                <input
                    value={tweetImage}
                    className="tweetBox-imageInput"
                    placeholder="画像のURLを入力してください" type="text"
                    onChange={(e) => setTweetImage(e.target.value)}
                ></input>
            </form>
            <Button
                className="tweetBox-tweetButton"
                type="submit"
                onClick={sendTweet}
            >
                ツイートする
            </Button>
        </div>
    );
}

export default TweetBox;
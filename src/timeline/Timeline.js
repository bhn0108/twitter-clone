import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Timeline.css';
import TweetBox from "./TweetBox";
import db from "../firebase";
import { collection, getDocs, onSnapshot, orderBy, query, } from "firebase/firestore";
import FlipMove from 'react-flip-move';

function Timeline() {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postData = collection(db, "posts");
        const q = query(postData, orderBy("timestamp", "desc"));

        /* スナップショットで最新のツイートを表示する */
        onSnapshot(q, (querySnapshot) => {
            setPosts(querySnapshot.docs.map((doc) => doc.data()));
        });
    }, []);

    return (
        <div className="timeline">
            {/* ヘッダー */}
            <div className="timeline-header">
                <h2>ホーム</h2>
            </div>

            {/* ツイートボックス */}
            <TweetBox />

            {/* ポスト */}
            <FlipMove>
                {posts.map((post) => (
                    <Post
                        key={post.text}
                        displayName={post.displayName}
                        username={post.username}
                        verified={post.verified}
                        text={post.text}
                        image={post.image}
                        avatar={post.avatar}
                    />
                ))}
            </FlipMove>
        </div>
    );
}

export default Timeline;
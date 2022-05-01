import Search from "@mui/icons-material/Search";
import React from "react";
import { TwitterTimelineEmbed, TwitterShareButton, TwitterFollowButton, TwitterHashtagButton, TwitterMentionButton, TwitterTweetEmbed, TwitterMomentShare, TwitterDMButton, TwitterVideoEmbed, TwitterOnAirButton } from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
        <div className="widgets-input">
            <Search className="widgets-serachIcon" />
            <input placeholder="キーワード" type="text" />
        </div>
        <div className="widgets-widgetContainer">
            <h2>いまどうしてる？</h2>

            {/* ライブラリ */}
              <TwitterTweetEmbed tweetId={"1510069716605616128"} />

            {/* タイムライン */}
            <TwitterTimelineEmbed
                sourceType="profile"
                  screenName="jfa_samuraiblue"
                options={{ height: 400 }}
            />

            {/* ツイートボタン */}
            <TwitterShareButton
                url={"https//:twitter.com/jfa_samuraiblue"}
                  options={{ text: "#サッカー日本代表", via: "jfa_samuraiblue" }}
            />
        </div>
    </div>
  );
}

export default Widgets;
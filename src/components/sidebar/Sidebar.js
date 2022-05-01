import React from 'react';
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from "@mui/icons-material/Search";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import BookmarkBorderIcon from "@mui/icons-material/BookmarkBorder";
import ListAltIcon from "@mui/icons-material/ListAlt";
import PermIdentityIcon from "@mui/icons-material/PermIdentity";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { Button } from '@mui/material';
import './Sidebar.css';

function Sidebar() {
  return (
    <div className="sidebar">
      {/* アイコン(MaterialUI) */}
      <TwitterIcon className="twitter-icon" />

      {/* ホーム */}
      <SidebarOption text="ホーム" Icon={HomeIcon}  active />
      {/* 話題を検索 */}
      <SidebarOption text="話題を検索" Icon={SearchIcon} />
      {/* 通知 */}
      <SidebarOption text="通知" Icon={MailOutlineIcon} />
      {/* メッセージ */}
      <SidebarOption text="メッセージ" Icon={NotificationsNoneIcon} />
      {/* ブックマーク */}
      <SidebarOption text="ブックマーク" Icon={BookmarkBorderIcon} />
      {/* リスト */}
      <SidebarOption text="リスト" Icon={ListAltIcon} />
      {/* プロフィール */}
      <SidebarOption text="プロフィール" Icon={PermIdentityIcon} />
      {/* もっと見る */}
      <SidebarOption text="もっと見る" Icon={MoreHorizIcon} />

      {/* ボタン */}
      <Button variant="outlined" className="tweet-button" fullWidth>ツイートする</Button>
    </div>
  );
}

export default Sidebar;
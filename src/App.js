import React, {useState} from 'react';
import './App.css';
import Header from './Components/Header/Header';
import Notify from './Components/Notify/Notify';
import Mark from './images/avatar-mark-webber.webp';
import Angela from './images/avatar-angela-gray.webp';
import Anna from './images/avatar-anna-kim.webp';
import Jacob from './images/avatar-jacob-thompson.webp';
import Kim from './images/avatar-kimberly-smith.webp';
import Natan from './images/avatar-nathan-peterson.webp';
import Riz from './images/avatar-rizky-hasanuddin.webp';
import Chess from './images/image-chess.webp';

function App() {

  const [toggle, setToggle] = useState({
    isOpen: false,
    markAsRead: false,
    unreadCount: 3
  })

  function handelToggle() {
    setToggle(preToggle => {
      return {
        ...preToggle,
        isOpen: !preToggle.isOpen
      }
    })
  }

  function handelAllRead() {
    setToggle(preToggle => ({
      ...preToggle,
      markAsRead: !preToggle.markAsRead,
      unreadCount: 0
    }))
  }

  return (
    <div className="container col-lg-6 col-sm-12 bg-white mt-5 mb-5 all">
      <Header
      isReden={toggle.markAsRead}
      handelAllRead={() => handelAllRead()}
      title="Notifications"
      number={toggle.unreadCount}
      markRead="Mark all as"
      />
      <div className="not-contain">
        <Notify profilePic={Mark}
        name="Mark Webber"
        mesg="reacted to your recent post"
        party="My first tournament today!"
        time="1m ago"
        opened={toggle.isOpen}
        markedRead={toggle.markAsRead}
        dm={true}
        dmContent="Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and 
        I'm already having lots of fun and improving my game."
        picture={false}
        likedPic={Chess}
        />
        <Notify profilePic={Mark}
        name="Mark Webber"
        mesg="reacted to your recent post"
        party="My first tournament today!"
        time="1m ago"
        opened={toggle.isOpen}
        markedRead={toggle.markAsRead}
        dm={false}
        picture={true}
        likedPic={Chess}
        />
      </div>
    </div>
  );
}

export default App;

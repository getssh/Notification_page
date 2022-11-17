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
    markAsRead: false
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
      markAsRead: !preToggle.markAsRead
    }))
  }

  return (
    <div className="container col-lg-6 col-sm-12 bg-white mt-5">
      <Header title="Notifications" number="3"/>
      <Notify profilePic={Mark}
      name="Mark Webber"
      mesg="reacted to your recent post"
      party="My first tournament today!"
      time="1m ago"
      opened={toggle.isOpenisOpen}
      markedRead={toggle.markAsRead}
      picture={false}
      likedPic={Chess}
      />
    </div>
  );
}

export default App;

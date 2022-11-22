import React, {useState, useEffect} from 'react';
import './App.css';
import { nanoid } from 'nanoid';
import {Data} from './Data/Notifications';
import Header from './Components/Header/Header';
import Notify from './Components/Notify/Notify';


function App() {

  const [toggle, setToggle] = useState({
    isOpen: false,
    markAsRead: false,
  })

  const [note, setNote] = useState(Data)

  const [count, setCount] = useState(0)

  useEffect(() => {
      function countNottification() {
        let total = 0;
        note.map((note) => {
          if (!note.isOpen) {
            total += 1;
          }
    
        })
        return total;
      }
      setCount(countNottification())
  }, note)
  // let tem = [1, 2, 3]
  // console.log(Array.isArray(toggle.data), "hello")
  function handelToggle(id) {
    setNote(preNote => preNote.map((not) => {
      return id == not.id ? {...not, isOpen: !not.isOpen} : not;
    }))
    // setToggle(preToggle => {
    //   return {
    //     ...preToggle,
    //     isOpen: !preToggle.isOpen
    //   }
    // })
  }

  function handelAllRead() {
    let allReaden = note.every(not => not.isOpen === true)
    if (allReaden) {
      setCount(0)
      
      setToggle(preToggle => ({
        ...preToggle,
        markAsRead: true,
      }))
    } else {
      setCount(note.length)
      setToggle(preToggle => (
        {
          ...preToggle,
          markAsRead: false,
        }
      ))
    }
    // setCount(count <= 0 ? note.length : 0)
  }

  const showNote = note.map(note =>
    <Notify
      profilePic={note.profilePic}
      handelToggle={() => handelToggle(note.id)}
      name={note.name}
      mesg={note.mesg}
      party={note.party}
      time={note.time}
      opened={note.isOpen}
      markedRead={toggle.markAsRead}
      dm={note.dm}
      dmContent={note.dmContent}
      picture={note.picture}
      likedPic={note.likedPic}
    />
    )

  return (
    <div className="container col-lg-6 col-sm-12 bg-white mt-5 mb-5 all">
      <Header
      isReden={toggle.markAsRead}
      handelAllRead={() => handelAllRead()}
      title="Notifications"
      number={count}
      markRead="Mark all as"
      />
      <div className="not-contain">
        {/* <Notify
        profilePic={Mark}
        onClick={(id) => handelToggle(id)}
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
        <Notify
        profilePic={Mark}
        name="Mark Webber"
        mesg="reacted to your recent post"
        party="My first tournament today!"
        time="1m ago"
        opened={toggle.isOpen}
        markedRead={toggle.markAsRead}
        dm={false}
        picture={true}
        likedPic={Chess}
        /> */}
        {showNote}
      </div>
    </div>
  );
}

export default App;

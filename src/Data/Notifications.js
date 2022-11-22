import { nanoid } from "nanoid";
import Mark from '../images/avatar-mark-webber.webp';
import Angela from '../images/avatar-angela-gray.webp';
import Anna from '../images/avatar-anna-kim.webp';
import Jacob from '../images/avatar-jacob-thompson.webp';
import Kim from '../images/avatar-kimberly-smith.webp';
import Natan from '../images/avatar-nathan-peterson.webp';
import Riz from '../images/avatar-rizky-hasanuddin.webp';
import Chess from '../images/image-chess.webp';

export const Data = [
    {
        profilePic: Mark,
        id: nanoid(),
        name:"Mark Webber",
        mesg:"reacted to your recent post",
        party:"My first tournament today!",
        time:"1m ago",
        isOpen:false,
        dm: false,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:false,
        likedPic:Mark
    },
    {
        profilePic: Angela,
        id: nanoid(),
        name:"Angela Gray",
        mesg:"followed you",
        party:"",
        time:"5m ago",
        isOpen:false,
        dm: false,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:false,
        likedPic:Chess
    },
    {
        profilePic: Jacob,
        id: nanoid(),
        name:"Jacob Thompson",
        mesg:"has joined your group",
        party:"Chess Club",
        time:"1 day ago",
        isOpen:false,
        dm: false,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:false,
        likedPic:Chess
    },
    {
        profilePic: Riz,
        id: nanoid(),
        name:"Rizky Hasanuddin",
        mesg:"sent you a private message",
        party:"",
        time:"5 days ago",
        isOpen:true,
        dm: true,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:false,
        likedPic:Chess
    },
    {
        profilePic: Kim,
        id: nanoid(),
        name:"Kimberly Smith",
        mesg:"commented on your picture",
        party:"",
        time:"1 week ago",
        isOpen:true,
        dm: false,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:true,
        likedPic:Chess
    },
    {
        profilePic: Natan,
        id: nanoid(),
        name:"Nathan Peterson",
        mesg:"reacted to your recent post",
        party:"5 end-game strategies to increase your win rate",
        time:"2 weeks ago",
        isOpen:true,
        dm: false,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:false,
        likedPic:Chess
    },
    {
        profilePic: Anna,
        id: nanoid(),
        name:"Anna Kim",
        mesg:"left the group",
        party:"Chess Club",
        time:"2 weeks ago",
        isOpen:true,
        dm: false,
        dmContent:"Hello, thanks for setting up the Chess Club. I've been a member for a few weeks now and I'm already having lots of fun and improving my game.",
        picture:false,
        likedPic:Chess
    },
]
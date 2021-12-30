import React, { Component } from "react";
import "./chatList.css";
import ChatListItems from "./ChatListItems";

export default class ChatList extends Component {
 
  allChatUsers = [
    {
      image:
        "https://images.pexels.com/photos/9865050/pexels-photo-9865050.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 1,
      name: "Prateek Gupta",
      active: true,
      isOnline: true,
    },
    {
      image:
        "https://images.pexels.com/photos/9604596/pexels-photo-9604596.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 2,
      name: "Mansi Mathane",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.pexels.com/photos/9410735/pexels-photo-9410735.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 3,
      name: "Abhishek",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.pexels.com/photos/10163268/pexels-photo-10163268.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 4,
      name: "Avani Agrawal",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.pexels.com/photos/10084173/pexels-photo-10084173.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      id: 5,
      name: "Sanskriti Sharma",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.pexels.com/photos/10392363/pexels-photo-10392363.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 6,
      name: "Honey Goyal",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.pexels.com/photos/5793030/pexels-photo-5793030.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 7,
      name: "Prabhat",
      active: false,
      isOnline: true,
    },
    {
      image:
        "https://images.pexels.com/photos/10353498/pexels-photo-10353498.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 8,
      name: "Subhi Sethi",
      active: false,
      isOnline: false,
    },
    {
      image:
        "https://images.pexels.com/photos/10334932/pexels-photo-10334932.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 9,
      name: "Niharika ",
      active: false,
      isOnline: true,
    },
    {
      image: "https://images.pexels.com/photos/10220586/pexels-photo-10220586.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
      id: 10,
      name: "Sneha",
      active: false,
      isOnline: true,
    },
  ];
  constructor(props) {
    super(props);
    this.state = {
      allChats: this.allChatUsers,
    };
  }
  
  render() {
    return (
      <div className="main__chatlist">
        <button className="btn">
          <i className="fa fa-plus"></i>
          <span>New conversation</span>
        </button>
        <div className="chatlist__heading">
          <h2>Chats</h2>
          <button className="btn-nobg">
            <i className="fa fa-ellipsis-h"></i>
          </button>
        </div>
        <div className="chatList__search">
          <div className="search_wrap">
            <input type="text" placeholder="Search Here" required />
            <button className="search-btn">
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>
        <div className="chatlist__items">
          {this.state.allChats.map((item, index) => {
            return (
              <ChatListItems
                name={item.name}
                key={item.id}
                animationDelay={index + 1}
                active={item.active ? "active" : ""}
                isOnline={item.isOnline ? "active" : ""}
                image={item.image}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

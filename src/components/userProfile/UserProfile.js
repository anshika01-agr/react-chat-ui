import React, { Component } from "react";
import "./userProfile.css";

export default class UserProfile extends Component {
  toggleInfo = (e) => {
    e.target.parentNode.classList.toggle("open");
  };
  render() {
    return (
      <div className="main__userprofile">
        <div className="profile__card user__profile__image">
          <div className="profile__image">
            <img src="https://images.pexels.com/photos/10290644/pexels-photo-10290644.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
          </div>
          <h4>Anshika Agrawal</h4>
          <p>Software Trainee at Lirisoft</p>
        </div>
        <div className="profile__card">
          <div className="card__header" onClick={this.toggleInfo}>
            <h4>Information</h4>
            <i className="fa fa-angle-down"></i>
          </div>
          <div className="card__content">
            I am Anshika Agrawal, from Nalkheda MP.
            anshikaagrawal141@gmail.com
            9109045641
       
          </div>
        </div>
      </div>
    );
  }
}

import React, { Component } from 'react';
import axios from 'axios';

class FriendsList extends Component {

  constructor() {
    super();
    this.state = {
      friends: []
    }
  }

  render() {
    return (
      <div>
        <div className="friend-title">Lambda Friends</div>
        <ul className="friend-grid">
          {this.state.friends.map(friend => {
            return (
              <li key={friend.id} className="friend">
                <div className="friend-name">{friend.name}</div>
                <div className="friend-age">{`Age: ${friend.age}`}</div>
                <div className="friend-email">{`Email: ${friend.email}`}</div>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  componentDidMount() {
    axios.get('http://localhost:5000/friends')
        .then(response => {
        console.log(response);
        this.setState({ friends : response.data });
      })
        .catch(error => {
          console.log(`There was an error in finding friends: ${error}`)
        });
  }

}

export default FriendsList;
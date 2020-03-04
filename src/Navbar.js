import React from 'react';
import './style.css';
import Logo from './logo.png';


export default class Navbar extends React.Component{
    render() {
        return (
          <div class="navbar">
            <div className="topnav">
                <img  src={Logo}/>
                <div className="mySearch">
                    <input type="text" placeholder="Search" size="100"  />
                    
                </div>
            </div>
            <div >
              <ul id="nav">
                <li><a href="#">Manage Roles</a></li>
                <li><a href="#">Manage Priviliges</a></li>
                <li><a href="#">Manage Users</a></li>
              </ul>
            </div>
          </div>
        );
    }
}

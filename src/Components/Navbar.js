import React from 'react';
import '../style.css';
import Logo from '../nykaa_logo.svg';
import { Button} from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
export default class Navbar extends React.Component{
    render() {
        return (
			<nav class="navbar navbar-expand-sm bg_info navbar-dark">
			<div class="container-fluid">
			  <div class="navbar-header">
				<a class="navbar-brand" href="#" style={{fontSize:20}}>Beans Love Beers</a>
			  </div>

			  <ul class="nav navbar-nav navbar-right">
			  <li class="active" style={{color:'white'}}><a href="#">Home</a></li>
			   <li><a href="#">Favorite</a></li>
			  </ul>
			</div>
		  </nav>
        );
    }
}

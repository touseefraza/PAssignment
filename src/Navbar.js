import React from 'react';
import './style.css';
import Logo from './Logo.png';
import { Button} from 'react-bootstrap';
import { AiOutlineLogout } from 'react-icons/ai';
export default class Navbar extends React.Component{
    render() {
        return (
          <div class="navbar" >
            <div className="topnav" style={{display:'inline'}}>
			<img  src={Logo}/>
			<div style={{display:'flex',flexDirection: 'row-reverse',marginTop:-27,marginRight:20,fontSize:10}}>
			<Button variant="secondary" size="sm" >
			<AiOutlineLogout style={{marginLeft:-2}}/>
    Logout
  </Button>
  </div>
             
            </div>
          </div>
        );
    }
}

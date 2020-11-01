import React from 'react';
import Navbar from './Components/Navbar';
import CardItems from './Home';
import ScrollTopArrow from './Components/ScrollTopArrow';
import './style.css';
import { right } from '@popperjs/core';
 class App extends React.Component {
	constructor(props){
		console.log(props,"props");
	  super(props);
	  this.state = {
		postId:[]
		};
	  }
  
  render() {
	console.log("postId",this.state.postId);
    return(
      <div className="body">
      <Navbar />
     <CardItems data={this.data}/>
	 <div style={{'float':'left'}}>
	 <ScrollTopArrow/>
	 </div>
    </div>
  );
}
}

export default App;

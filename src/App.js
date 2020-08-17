import React from 'react';
import Navbar from './Navbar';
import Tile from './Tiles';
import DataTable from './DataTable';
import { Button, Card, Accordion} from 'react-bootstrap';

import './style.css';


 class App extends React.Component {
	constructor(props){
		console.log(props,"props");
	  super(props);
	  this.state = {
		postId:[]
		};
	  }
   data = [
    { "#": "01", Name: "Vishal", Email: "Bangalore",Role: "Credit,Accounts",none: "Bangalore",pen: "Credit,Accounts",Action:""},
    { "#": "02", Name: "Abhishek", Email: "Bangalore",Role: "IT",none: "Bangalore",pen: "Credit,Accounts",Action:""},
    { "#": "03", Name: "Anil", Email: "Bangalore",Role: "Digital Marketing",none: "Bangalore",pen: "Credit,Accounts",Action:"" }
  ];
  componentDidMount() {
    // POST request using fetch with error handling
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
			"clientId": 10,
			"dataRecord": {
			  "userRoleId": 4,
			  "userRoleName": "COMPANY",
			  "userId": 10
			},
			"fromDate": 1577888571659,
			"toDate": 1593613371659,
			"tripId": 36
		  })
    };
    fetch('http://staging.watsoo.com:8080/watsoo-amazon-api//trip-controller-web/v1/vehicle/wise/summary/36', requestOptions)
        .then(async response => {
            const data = await response.json();
             console.log("ok",data);
            // check for error response
            if (!response.ok) {
                // get error message from body or default to response status
                const error = (data && data.message) || response.status;
                return Promise.reject(error);
            }
            this.setState({ postId: data })
        })
        .catch(error => {
            this.setState({ errorMessage: error.toString() });
            console.error('There was an error!', error);
        });
}
  render() {
	if(this.state.postId.data!==undefined)
	console.log("postId",this.state.postId.data.tripDetails)
    return(
      <div className="body">
      <Navbar />
	  <Tile data={this.state.postId.data}/>
      {this.state.postId.data!==undefined?<DataTable data={this.state.postId.data.tripDetails[0].tripLists}/>:null}
    </div>
  );
}
}

export default App;

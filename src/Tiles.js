import React from 'react';
import './style.css';
import { FaTruckMoving,FaTachometerAlt } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';
export default class Tiles extends React.Component{
    render() {
		console.log("toles:",this.props.data)
        return (
		<>	
		<div className="tilesContainer1" style={{display:'flex'}}>
          <div class="tiles">
            <div className="whiiteHeading" style={{fontWeight:'bold',	background: '#5bc0de'}}>
			<h3><FaTruckMoving style={{marginLeft:10}}/> <span style={{fontSize:15}}>{this.props.data!==undefined?this.props.data.vehicleNo:''}</span> </h3>
            </div>
          </div>
		  <div class="tiles">
            <div className="whiiteHeading" style={{fontWeight:'bold',background: '#f0ad4e'}}>
			<h3><FaTruckMoving style={{marginLeft:10}}/> <span style={{fontSize:15}}>Total Trip :{this.props.data!==undefined?this.props.data.totalTrips:''}  </span> </h3>
            </div>
          </div>
		  <div class="tiles">
            <div className="whiiteHeading" style={{fontWeight:'bold',background: '#0275d8'}}>
			<h3><FaTachometerAlt style={{marginLeft:10}}/> <span style={{fontSize:15}}>Total KM :{this.props.data!==undefined?this.props.data.totalKm:''} </span> </h3>
            </div>
          </div>
		  </div>
		  <div className="tilesContainer2" style={{display:'flex'}}>
          <div class="tiles">
            <div className="whiiteHeading" style={{fontWeight:'bold',	background: '#5cb85c'}}>
			<h3><MdWatchLater style={{marginLeft:10}}/> <span style={{fontSize:15}}>Trip Time :{this.props.data!==undefined?this.props.data.totalTripTime:''} </span> </h3>
            </div>
          </div>
		  <div class="tiles">
            <div className="whiiteHeading" style={{fontWeight:'bold',background: '#bf28c4'}}>
			<h3><MdWatchLater style={{marginLeft:10}}/> <span style={{fontSize:15}}>Total Time :{this.props.data!==undefined?this.props.data.totalTime:''} </span> </h3>
            </div>
          </div>
		  <div class="tiles">
            <div className="whiiteHeading" style={{fontWeight:'bold',background: '#dbc04b'}}>
			<h3><GiWallet style={{marginLeft:10}}/> <span style={{fontSize:15}}>Total Exp Rs: {this.props.data!==undefined?this.props.data.totalExpences:''} </span> </h3>
            </div>
          </div>
		  </div>
		  <div className="tilesContainer3" style={{display:'flex',flexDirection: 'row-reverse'}}>
          <div class="otherExptiles">
		  <div className="whiiteHeading" style={{fontWeight:'bold',marginTop:20}}>
		  <h3><GiWallet style={{marginLeft:10}}/> <span style={{fontSize:12}}>Other Exp Rs: {this.props.data!==undefined?this.props.data.otherExpenses:''} </span> </h3>
		  </div>
          </div>
		  </div>
		  </>
        );
    }
}

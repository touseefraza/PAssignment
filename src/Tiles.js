import React from 'react';
import './style.css';
import { FaTruckMoving,FaTachometerAlt } from 'react-icons/fa';
import { MdWatchLater } from 'react-icons/md';
import { GiWallet } from 'react-icons/gi';
import Breadcrumb from 'react-bootstrap/Breadcrumb'
import Datepicker from './DatePicker';
import { Button} from 'react-bootstrap';
import { AiOutlineSearch,AiOutlineExport } from 'react-icons/ai';
export default class Tiles extends React.Component{
    render() {
		console.log("toles:",this.props.data)
        return (
		<>	
		<div class="breadCrumbContainer">
			<h3>Trip Summary</h3>
			<div style={{display:'flex'}}>
		<Breadcrumb >
  <Breadcrumb.Item href="#"active>DashBoard</Breadcrumb.Item>
  <Breadcrumb.Item href="https://getbootstrap.com/docs/4.0/components/breadcrumb/">
    Trip Summary
  </Breadcrumb.Item>
</Breadcrumb>
<div style={{display:'flex',marginLeft: 'auto',
  order: 2}}>
<span style={{fontSize:12,padding:14}}>From:</span>
<div style={{flexDirection: 'row-reverse',textAlign: 'right'}}> <Datepicker/>
	</div>
	<span style={{fontSize:12,padding:14}}> To :</span>
<div style={{flexDirection: 'row-reverse',textAlign: 'right',paddingRight:5}}> <Datepicker/>
	</div>
	<Button id='btnSearch'variant="info" size="sm" style={{marginTop:2,marginRight:10}}>
			<AiOutlineSearch style={{padding:0}}/>
  </Button>	
  <Button variant="outline-info" size="sm" style={{display: 'inline-flex',
	height: '2.7rem',
	alignItems: 'center',
	width: '5rem',
	WebkitAppearance: 'none',
	marginTop:2}}>
			<AiOutlineExport style={{padding:0}}/>
			Export
  </Button>	
</div>	
</div>
	</div>
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

import * as React from 'react';
import './style.css';
import { Button, Card, Accordion, Row,Col} from 'react-bootstrap';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt,faPenSquare,faToggle } from '@fortawesome/free-solid-svg-icons'
import Modal from './CreateForm';
import { right } from '@popperjs/core';
export default class Table extends React.Component {
  constructor(props){
    console.log(props,"props");
  super(props);
  this.state = {
    modal: false,
    name: "",
	modalInputName: "",
	postId:[]
    };
  this.getHeader = this.getHeader.bind(this);
  this.getRowsData = this.getRowsData.bind(this);
  this.getKeys = this.getKeys.bind(this);
  }

  getKeys = function(){
    return Object.keys(this.props.data[0]);
  }

  getHeader = function(){
    var keys = this.getKeys();
 return keys.map((key, index)=>{
 return <th key={key}>{key.toUpperCase()}</th>
 })
  }

  getRowsData = function(){
    let items = this.props.data;
    let keys = this.getKeys();
    return items.map((row, index)=>{
    return <tr key={index}><RenderRow key={index} data={row} keys={keys}/></tr>
    })
  }

handleChange(e) {
    const target = e.target;
    const name = target.name;
    const value = target.value;

    this.setState({
      [name]: value
    });
}

handleSubmit(e) {
    this.setState({ name: this.state.modalInputName });
    this.modalClose();
  }

  modalOpen() {
    this.setState({ modal: true });
  }
  modalClose() {
    this.setState({
      modalInputName: "",
      modal: false
    });
  }
  render() {
  return (
<div id="cointainer" >
 <Accordion defaultActiveKey="0" >
  <Card>
    <Card.Header style={{backgroundColor:'#062b45',height:40}}>
	<Row>
    <Col><p class="whiiteHeading">date:10:08:2020 at 5:20pm</p></Col>
    <Col ><p class="whiiteHeading">Total Km:65km</p></Col>
	<Accordion.Toggle as={Button} variant="link" eventKey="0">
        <p class="whiiteHeading"style={{fontSize:20,fontWeight:'bold',marginTop:-10}}>-</p>
      </Accordion.Toggle>
  </Row>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>     
	 <table  class="table table-bordered table-sm table-responsive" >
      <thead class="" style={{backgroundColor:'#5bc0de'}}>
        <tr>{this.getHeader()}</tr>
      </thead>
      <tbody>
        {this.getRowsData()}
      </tbody>
   </table></Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
  </div>
  );
  }
 }
 const RenderRow = (props) =>{
  console.log(props,"dekho dekho");
  return props.keys.map((key, index)=>{
    let column;
    if(key === "Action"){
      column = <td><div class="row"><div class="col-md-4 col-sm-4 col-12"><button class="btn btn-info btn-sm">MovementReport</button></div><div class="col-md-4 col-sm-4 col-12"><button class="btn btn-info btn-sm">MovementReport</button></div></div></td>;
    }else{
        column = <td>{props.data[key]}</td>;
    }
    return column;
    })
 }

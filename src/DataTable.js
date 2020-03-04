import * as React from 'react';
import './style.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShieldAlt,faPenSquare,faToggle } from '@fortawesome/free-solid-svg-icons'
import Modal from './CreateForm';
export default class Table extends React.Component {
  constructor(props){
    console.log(props,"props");
  super(props);
  this.state = {
    modal: false,
    name: "",
    modalInputName: ""
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
  <div id="cointainer" style={{marginTop:65}}>
    <div>
    <br/>
      <h4 id="align">Manage Users</h4>
      <hr/>
    </div>
    <div>
    <div  className="text-center">
      <button className ="btn btn-lg btn btn-success form-control"href="javascript:;" onClick={e => this.modalOpen(e)} ><i class="fa fa-plus-circle" aria-hidden="true"></i>
            Open Modal
      </button>
    </div>
    <br/>
      <Modal show={this.state.modal} handleClose={e => this.modalClose(e)}  >
        <div class="modal-header">
          <h4 class="modal-title">Add New User</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
          <div class="modal-body">
            <div className="form-group">
          <label for="usr">Name</label>
          <input type="text" placeholder="Enter Name here" class="form-control" id="usr" name="modalInputName" value={this.state.modalInputName} onChange={e => this.handleChange(e)} />

          <label for="usr">Email</label>
          <input type="text" placeholder="Enter email here" class="form-control" id="usr" name="modalInputName" value={this.state.modalInputName} onChange={e => this.handleChange(e)} />

          <label for="usr">Phone Number</label>
          <input type="text" placeholder="Enter phone number here" class="form-control" id="usr" name="modalInputName" value={this.state.modalInputName} onChange={e => this.handleChange(e)} />

          <label for="usr">Role</label>
          <input type="text" placeholder="Please select role" class="form-control" id="usr" name="modalInputName" value={this.state.modalInputName} onChange={e => this.handleChange(e)} />
            </div>
          </div>
          <div className="form-group">
            <button type="submit" class="btn btn-success form-control">Submit</button>
          </div>
        </Modal>
     </div>

    <div>
      <table className="table">
      <thead>
        <tr>{this.getHeader()}</tr>
      </thead>
      <tbody>
        {this.getRowsData()}
      </tbody>
   </table>

   </div>
  </div>

  );
  }
 }
 const RenderRow = (props) =>{
  console.log(props,"dekho dekho");
  return props.keys.map((key, index)=>{
    let column;
    if(key === "Action"){
      column = <td><FontAwesomeIcon icon={faPenSquare} className="fa-2x fa-custom"/><FontAwesomeIcon icon={faShieldAlt} className="fa-2x fa-custom" /></td>;
    }else if (key === "Status") {
      if(props.data[key]){
        column = <td><input checked className="fa-2x" type="checkbox" data-toggle="toggle" /></td>;
      }else{
        column = <td><input className="fa-2x" type="checkbox" data-toggle="toggle" /></td>;
      }
    }else{
        column = <td>{props.data[key]}</td>;
    }
    return column;
    })
 }

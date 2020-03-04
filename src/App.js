import React from 'react';
import Navbar from './Navbar';
import DataTable from './DataTable';

import './style.css';


 class App extends React.Component {
   data = [
    { "S.No.": "01", Name: "Vishal", Email: "Bangalore",Role: "Credit,Accounts",Action:"",Status:true },
    { "S.No.": "02", Name: "Abhishek", Email: "Bangalore",Role: "IT",Action:"",Status:false },
    { "S.No.": "03", Name: "Anil", Email: "Bangalore",Role: "Digital Marketing",Action:"",Status:true },
    { "S.No.": "04", Name: "Ajay", Email: "Bangalore",Role: "IT",Action:"",Status:true },
    { "S.No.": "05", Name: "Saurabh", Email: "Bangalore",Role: "Verifications",Action:"",Status:true },
    { "S.No.": "06", Name: "Javed", Email: "Bangalore",Role: "Verifications",Action:"",Status:false }
  ];
  render() {
    return(
      <div className="body">
      <Navbar />
      <DataTable data={this.data} />

    </div>
  );
}
}

export default App;

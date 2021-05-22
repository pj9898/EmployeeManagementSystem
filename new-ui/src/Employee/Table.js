import React, { Component } from 'react';  
import axios from 'axios';  
import { Link } from 'react-router-dom';  


class Table extends Component {  
  constructor(props) {  
    super(props);  
    }  

    


    DeleteEmployee= () =>{  
     axios.delete('http://localhost:59007/api/Employee/' + this.props.obj.id)  
    .then(json => {  
    if(json.data.Status==='Delete'){  
    alert('Record deleted successfully!!');  
    }  
    })  
    }  

  

render() {  
    return (  
        <div class="row">
  <div class="col-sm-3">
        <div className="card" style={{width: 40 + 'rem',border: '5px solid red',display: 'flex', flexDirection: 'row',flex: 1}}>
               <div className="card-body">
                  <h1 className="card-title">Name: {this.props.obj.fullName}</h1>
                    <h2 className="card-text">Role: {this.props.obj.role} </h2>
<ul className="list-group list-group-flush">
              <li className="list-group-item"><h3>Mobile:  {this.props.obj.mobile}  </h3></li>
              <li className="list-group-item"><h3>Manager: {this.props.obj.manager}</h3> </li>
              <li className="list-group-item"><h3>Office: {this.props.obj.office}</h3> </li>
              <li className="list-group-item"><h3>Joining Date: {this.props.obj.joiningdate}(YYYY-MM-DD)</h3></li>
              <li className="list-group-item"><h3><Link to={"/edit/"+this.props.obj.id} className="btn btn-success">Edit</Link></h3></li>
              <li><button type="button" onClick={this.DeleteEmployee} className="btn btn-danger">Delete</button></li>
              </ul>
              </div>
              </div>
              </div>
          </div>
    );  
  }  
}  








  
export default Table;  
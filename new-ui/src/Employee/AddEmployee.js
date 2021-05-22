import React from 'react';  
import axios from 'axios';  
import '../Employee/AddEmployee.css'  
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
class AddEmployee extends React.Component{  
constructor(props){  
super(props)  
this.state = {  
    fullName:'',
    role:'',
    mobile:'',
    manager:'',
    office:'',
    joiningdate:''
}  
}   
AddEmployee=()=>{  
  axios.post('http://localhost:59007/api/Employee', {fullName:this.state.fullName,role:this.state.role,  
  mobile:this.state.mobile, manager:this.state.manager,office:this.state.office,joiningdate:this.state.joiningdate})  
.then(json => {  
if(json.data.Status==='Success'){  
  console.log(json.data.Status);  
  alert("Data Save Successfully");  
this.props.history.push('/EmployeeList')  
}  
else{  
alert('Data not Saved');  
debugger;  
this.props.history.push('/EmployeeList')  
}  
})  
}  
   
handleChange= (e)=> {  
this.setState({[e.target.name]:e.target.value});  
}  
   
render() {  
return (  
   <Container className="App">  
    <h4 className="PageHeading">Enter Employee Informations</h4>  
    <Form className="form">  
      <Col>  
        <FormGroup row>  
          <Label for="fullName" sm={2}>Full Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="fullName" onChange={this.handleChange} value={this.state.fullName} placeholder="Enter Full Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="role" sm={2}>Role</Label>  
          <Col sm={10}>  
            <Input type="text" name="role" onChange={this.handleChange} value={this.state.role} placeholder="Enter Role" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="mobile" sm={2}>Mobile</Label>  
          <Col sm={10}>  
            <Input type="text" name="mobile" onChange={this.handleChange} value={this.state.mobile} placeholder="Enter Class" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="manager" sm={2}>Manager</Label>  
          <Col sm={10}>  
            <Input type="text" name="manager" onChange={this.handleChange} value={this.state.manager} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="office" sm={2}>Office</Label>  
          <Col sm={10}>  
            <Input type="text" name="office" onChange={this.handleChange} value={this.state.office} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="joiningdate" sm={2}>joiningdate</Label>  
          <Col sm={10}>  
            <Input type="text" name="joiningdate" onChange={this.handleChange} value={this.state.joiningdate} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.AddEmployee} className="btn btn-success">Submit</button>  
          </Col>  
          <Col sm={1}>  
            <Button color="danger">Cancel</Button>{' '}  
          </Col>  
          <Col sm={5}>  
          </Col>  
        </FormGroup>  
      </Col>  
    </Form>  
  </Container>  
);  
}  
   
}  
   
export default AddEmployee; 
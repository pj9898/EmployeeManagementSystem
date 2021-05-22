import React from 'react';   
import { Container, Col, Form, Row, FormGroup, Label, Input, Button } from 'reactstrap';  
import axios from 'axios'  
import '../Employee/AddEmployee.css'  
class Edit extends React.Component {  
    constructor(props) {  
        super(props)  
     
    this.onChangefullname = this.onChangefullname.bind(this);  
    this.onChangerole = this.onChangerole.bind(this);  
    this.onChangemobile = this.onChangemobile.bind(this);  
    this.onChangemanager = this.onChangemanager.bind(this);  
    this.onChangeoffice = this.onChangeoffice.bind(this); 
    this.onChangejoiningdate = this.onChangejoiningdate.bind(this); 
    this.onSubmit = this.onSubmit.bind(this);  
  
         this.state = {  
            fullName:'',
            role:'',
            mobile:'',
            manager:'',
            office:'',
            joiningdate:''
  
        }  
    }  
  
  componentDidMount() {  
      axios.get('http://localhost:59007/api/Employee/'+this.props.match.params.id)  
          .then(response => {  
              this.setState({   
                fullName: response.data.fullName,   
                role: response.data.role,  
                mobile: response.data.mobile,  
                manager: response.data.manager,
                office: response.data.office,  
                joiningdate: response.data.joiningdate
             });  
  
          })  
          .catch(function (error) {  
              console.log(error);  
          })  
    }  
  
    onChangefullname(e) {  
    this.setState({  
        fullName: e.target.value  
    });  
  }  
  onChangerole(e) {  
    this.setState({  
        role: e.target.value  
    });    
  }  
  onChangemobile(e) {  
    this.setState({  
        mobile: e.target.value  
    });  
}  
onChangemanager(e) {  
        this.setState({  
            manager: e.target.value  
        });  
  }  
  onChangeoffice(e) {  
    this.setState({  
        office: e.target.value  
    });  
} 
onChangejoiningdate(e) {  
    this.setState({  
        joiningdate: e.target.value  
    });  
} 
  
  onSubmit(e) {  
    debugger;  
    e.preventDefault();  
    const obj = {  
        id:this.props.match.params.id,  
      fullName: this.state.fullName,  
      role: this.state.role,  
      mobile: this.state.mobile,  
      manager: this.state.manager,
      office: this.state.office,
      joiningdate: this.state.joiningdate      
  
    };  
    axios.put('http://localhost:59007/api/Employee'+obj.id, { fullName: this.state.fullName,  
    role: this.state.role,  
    mobile: this.state.mobile,  
    manager: this.state.manager,
    office: this.state.office,
    joiningdate: this.state.joiningdate })  
        .then(res => console.log(res.data));  
        debugger;  
        this.props.history.push('/EmployeeList')  
  }  
    render() {  
        return (  
            <Container className="App">  
  
             <h4 className="PageHeading">Update Employee Informations</h4>  
                <Form className="form" onSubmit={this.onSubmit}>  
                <Col>  
                
        <FormGroup row>  
          <Label for="fullName" sm={2}>Full Name</Label>  
          <Col sm={10}>  
            <Input type="text" name="fullName" onChange={this.onChangefullname} value={this.state.fullName} placeholder="Enter Full Name" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="role" sm={2}>Role</Label>  
          <Col sm={10}>  
            <Input type="text" name="role" onChange={this.onChangerole} value={this.state.role} placeholder="Enter Role" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="mobile" sm={2}>Mobile</Label>  
          <Col sm={10}>  
            <Input type="text" name="mobile" onChange={this.onChangemobile} value={this.state.mobile} placeholder="Enter Class" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="manager" sm={2}>Manager</Label>  
          <Col sm={10}>  
            <Input type="text" name="manager" onChange={this.onChangemanager} value={this.state.manager} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="office" sm={2}>Office</Label>  
          <Col sm={10}>  
            <Input type="text" name="office" onChange={this.onChangeoffice} value={this.state.office} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
        <FormGroup row>  
          <Label for="joiningdate" sm={2}>joiningdate</Label>  
          <Col sm={10}>  
            <Input type="text" name="joiningdate" onChange={this.onChangejoiningdate} value={this.state.joiningdate} placeholder="Enter Address" />  
          </Col>  
        </FormGroup>  
      </Col>  
      <Col>  
        <FormGroup row>  
          <Col sm={5}>  
          </Col>  
          <Col sm={1}>  
          <button type="button" onClick={this.onSubmit} className="btn btn-success">Submit</button>{' '}  
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
  
export default Edit;  
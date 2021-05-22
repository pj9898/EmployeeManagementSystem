import React, { Component } from 'react';  
import axios from 'axios';  
import Table from './Table';  
  
export default class EmployeeList extends Component {  
  
  constructor(props) {  
      super(props);  
      this.state = {business: []};  
    }  
    componentDidMount(){  
      debugger;  
      axios.get('http://localhost:59007/api/Employee')  
        .then(response => {  
          this.setState({ business: response.data });  
          debugger;  
  
        })  
        .catch(function (error) {  
          console.log(error);  
        })  
    }  
      
    tabRow(){  
      return this.state.business.map(function(object, i){  
          return <Table obj={object} key={i} />;  
      });  
    }  

    
  
    render() {  
      return (  
        <div>  
      <h1 align="center">Employe List</h1>
             { this.tabRow() }   
          
        
        </div> 
       

      );  
    }  
  }  
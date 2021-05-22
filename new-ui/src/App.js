import React from 'react';  
import AddEmployee from './Employee/AddEmployee';  
import Employeelist from './Employee/EmployeeList';  
import EditEmployee from './Employee/EditEmployee';  
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';  
import './App.css';  
function App() {  
  return (  
    <Router>  
      <div className="container">  
        <nav className="navbar navbar-expand-lg navheader">  
          <div className="collapse navbar-collapse" >  
            <ul className="navbar-nav mr-auto">  
              <li className="nav-item">  
                <Link to={'/AddEmployee'} className="nav-link">Add</Link>  
              </li>  
              <li className="nav-item">  
                <Link to={'/EmployeeList'} className="nav-link">Home</Link>  
              </li>  
            </ul>  
          </div>  
        </nav> <br />  
        <Switch>  
          <Route exact path='/AddEmployee' component={AddEmployee} />  
          <Route path='/edit/:id' component={EditEmployee} />  
          <Route path='/EmployeeList' component={Employeelist} />  
        </Switch>  
      </div>  
    </Router>  
  );  
}  
  
export default App;  
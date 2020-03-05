import React, { Component } from "react";
import Col from "./components/col"
import Card from "./components/card"
import axios from "axios"
import EmployeeRow from "./components/emplyeeRow"
import Table from 'react-bootstrap/Table'
import Form from "./components/form";
import API from "./utils/API"

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
    originalEmp:[],
    title: "first",
    search: ""
  };

  componentDidMount() {
    this.getdata()
  }
  searchEmployees = query => {
    console.log('---------------------------first employee', this.state.employees)
    
  };

  getdata = () => {
    let currentThis = this
    axios.get("https://randomuser.me/api/?results=200&nat=us")
      .then(function (db) {
        console.log(db.data.results);

        // let data = db.data.results.map(elem => {
        //   return {
        //     name: elem.name.last,
        //     email: elem.email,
        //     phone: elem.phone
        //   }
        // })
        // console.log(data)
        currentThis.setState({ employees: db.data.results, originalEmp:db.data.results, title: "Directory" })
      })
  }
  handleInputChange = event => {
    const value = event.target.value;
    //const name = event.target.name;
    console.log("search input: ", value)
  //  console.log(this.state.employees)
   // console.log(this.state.originalEmp)
    let temp = this.state.originalEmp.filter(emp=>emp.name.last.includes(value))
    console.log("TEMP:", temp)
    this.setState({employees:temp, search: value})
    // this.setState({
    //   [name]: value
    // });
  };
  handleFormSubmit = event => {
    event.preventDefault();
    console.log("search input: ", this.state.search)
    console.log(this.state.employees)
    console.log(this.state.originalEmp)
    let temp = this.state.originalEmp.filter(emp=>emp.name.last.includes(this.state.search))
console.log("TEMP:", temp)
    this.setState({employees:temp})
    //this.searchEmployees(this.state.search);
  };



  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <h1>Employee - {this.state.title}</h1>
        <Col size="md-4">
            <Card heading="Search">
              <Form
               value={this.state.search}
               handleFormSubmit={this.handleFormSubmit}
               handleInputChange={this.handleInputChange}
              />
            </Card>
          </Col>

        <Table striped bordered hover>
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
            </tr>
          </thead>
          <tbody>
            {this.state.employees.map(emp => (
              <EmployeeRow
                name={emp.name.last}
                email={emp.email}
                phone={emp.phone}
              />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;

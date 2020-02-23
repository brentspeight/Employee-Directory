import React, { Component } from "react";

// import Wrapper from "./components/Wrapper";
// import Title from "./components/Title";
import axios from "axios"
import EmployeeRow from "./components/emplyeeRow"
import Table from 'react-bootstrap/Table'

class App extends Component {
  // Setting this.state.friends to the friends json array
  state = {
    employees: [],
  
    title: "first"
  };

  componentDidMount() {
    this.getdata()
  }

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
        currentThis.setState({ employees: db.data.results, title: "test" })
      })
  }


  // Map over this.state.friends and render a FriendCard component for each friend object
  render() {
    return (
      <div>
        <h1>EMPLOYEE - {this.state.title}</h1>

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

              //   <FriendCard
              //     removeFriend={this.removeFriend}
              //     id={friend.id}
              //     key={friend.id}
              //     name={friend.name}
              //     image={friend.image}
              //     occupation={friend.occupation}
              //     location={friend.location}
              //   />
            ))}
          </tbody>
        </Table>
      </div>
    );
  }
}

export default App;

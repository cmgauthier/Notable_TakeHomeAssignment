import React, { Component } from 'react';
import PhysicianList from './PhysicianList';
import PatientList from './PatientList';
import e from 'express';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
      patients: [],
    }

    this.getAllPhysicians = this.getAllPhysicians.bind(this);
    this.getCalendar = this.getCalendar.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getAllPhysicians();
  }

  getAllPhysicians() {
    fetch('/physicians')
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            physicians: response
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  getCalendar(id) {
    fetch(`/physicians/${id}/patients`)
      .then(res => res.json())
      .then(
        (response) => {
          this.setState({
            calendar: response
          })
        },
        (error) => {
          console.log(error)
        }
      )
  }

  handleClick(name) {
    this.getCalendar(name.id);
  }


  render() {
    return (
      <div className="wrapper">
        <div className="left-bar">
          <div className="notable-logo"></div>
          <h2>Physicians</h2>
          <PhysicianList physicians={this.state.physicians} onClick={this.handleClick} getCalendar={this.getCalendar}/>
          <div className="logout-btn"></div>
        </div>
        <div className="right-bar">
          <div className="physician-header">header</div>
          <div className="physician-email">email</div>
          <PatientList patients={this.state.patients} />
        </div>
      </div>
     );
  }
}

export default App;
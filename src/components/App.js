import React, { Component } from 'react';
import PhysicianList from './PhysicianList';
import PatientList from './PatientList';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      physicians: [],
    }

    this.getAllPhysicians = this.getAllPhysicians.bind(this);
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

  render() {
    return (
      <div className="wrapper">
        <div className="left-bar">
          <div className="notable-logo"></div>
          <h2>Physicians</h2>
          <PhysicianList physicians={this.state.physicians} />
          <div className="logout-btn"></div>
        </div>
        <div className="right-bar">
          <PatientList patients={this.state.patients} />
        </div>
      </div>
     );
  }
}

export default App;
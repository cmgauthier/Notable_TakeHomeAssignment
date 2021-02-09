import React, { Component } from 'react';

class PhysicianList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            calendar: [],
        };
        this.getCalendar = this.getCalendar.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }

    getCalendar(name) {
        fetch(`/physicians/${name}/patients`)
            .then(res => res.json())
            .then(
                (response) => {
                    this.setState({
                        calendar: response,
                    })
                    console.log(response)
                },
                (error) => {
                    console.log(error)
                }
            )
    }

    handleClick(e) {
        // e.preventDefault();
        this.getCalendar(e.target.innerHTML);
    }

    render() {
        return (
            <div className='datacontent'>
                <ul className='list'>
                    {
                        this.props.physicians.map((physician, index) => (
                            <li
                                key={index}
                                physician={physician}
                                onClick={this.handleClick}
                            > {physician.name}</li>
                        ))
                    }
                </ul>
            </div>
        )
    }

}


export default PhysicianList;
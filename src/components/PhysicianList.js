import React, { Component } from 'react';
import Entry from './Entry';

class PhysicianList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: null,
            calendar: []
        }
        this.getCalendar = this.getCalendar.bind(this);
        this.handleClick = this.handleClick.bind(this);
    }


    getCalendar(id) {
        fetch(`/physicians/${id}/patients`)
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
       this.getCalendar(e)
        console.log(e)
    }


    render() {
        return (
            <div>
                <ul>
                    {
                        this.props.physicians.map((physician, index) => (
                            <div
                                key={index+physician.id}
                                id={physician.id}
                                physician={physician}
                                onClick={(() => this.handleClick(physician.id))}
                            > {physician.name}</div>
                        ))
                    }
            </ul>
            <ul>
                {
                    this.state.calendar.map((entry, index) => (
                        <Entry key={index} entry={entry} />
                    ))
                }
            </ul>

            </div>
        )
    }
}


export default PhysicianList;
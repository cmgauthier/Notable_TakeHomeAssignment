import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
          input: '',
        }

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(e) {
        this.setState({
            input: e.target.value,
        })
    }

    handleSubmit(e) {
        e.preventDefault();
        this.props.saveData(this.state.input);
    }

    render() {
        return (
          <div>
            <form onSubmit={this.handleSubmit}>
              <label> label </label>
              <input
                // className=''
                type='text'
                name='input'
                onChange={this.handleChange}
                value={this.state.input}
                />
            <button>button</button>
            </form>
          </div>
         )
    }
}

export default Form;
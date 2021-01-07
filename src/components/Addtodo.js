import React, { Component } from 'react'
import '../App.css'

export class Addtodo extends Component {
    state = {
        title: ''
    }

    onChange = (e) => {
        this.setState({title: document.getElementById('input').value})
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.addTodo(this.state.title)
        this.setState({title: ''})
    }
    render() {
        return (
            <form onSubmit={this.onSubmit} style={{display  : 'flex'}}>
                <input 
                    id="input"
                    type="text" 
                    style={{flex: '10', padding: '5px'}} 
                    placeholder="Add Todo ..."
                    value={this.state.title}
                    onChange={this.onChange}
                />
                <input 
                    className="btn" 
                    type="submit" 
                    value="Submit" 
                    style={{flex: '1'}}

                />
            </form>
        )
    }
}

export default Addtodo

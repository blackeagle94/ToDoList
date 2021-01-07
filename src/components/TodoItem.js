import React, { Component } from 'react'

export class TodoItem extends Component {
    getStyle = () => {
        return {
            background: '#f4f4f4',
            padding: '10px',
            borderBottom: '1px #ccc dotted',
            textDecoration: this.props.todo.completed ? 'line-through' : 'none'
        }
    }

    btnStyle = {
        background: 'red',
        color: 'white',
        border: 'none',
        padding: '9px',
        borderRadius: '50%',
        float: 'right',
        cursor: 'pointer'
    }

    render() {
        const {id, title} = this.props.todo
        return (
            <div style={this.getStyle()}>
                <p>
                <input type="checkbox" onChange={this.props.markComplete.bind(this, id)}/> {' '}
                {title}
                <button style={this.btnStyle} onClick={this.props.delTodo.bind(this, id)}>x</button>
                </p>
            </div>
        )
    }
}

export default TodoItem

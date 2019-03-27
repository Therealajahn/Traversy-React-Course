import React, { Component } from 'react'
import PropTypes from 'prop-types';



export class TodoItem extends Component {
  getStyle = ()=> {
     return{ 
        background: 'f4f4f4',
        padding: '10px',
        borderBottom: '1px #ccc dotted',
        textDecoration: this.props.completed ? 
        'line-through' :
        'none'
     }
  }

 

  
    render() {
    console.log(this)
    const { id, title } = this.props.todo;
    return (
      
        <div style = {this.getStyle()}>
        <h3>
        <input type='checkbox' 
        onChange={this.props.markComplete.bind(this, id)}/>
        { title }</h3>{' '}
        <button
         onClick={this.props.delTodo.bind(this, id)}
         style={btnStyle}>
         x</button>
      
         </div>
    )
  }
}

//Prop Validation
TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
}

const btnStyle = {
    background: "#ff0000",
    color: 'white',
    border: 'none',
    padding: '5px 9px',
    borderRadius: '50%',
    cursor: 'pointer',
    float: 'right',
    marginTop: '-25px' 
}


export default TodoItem

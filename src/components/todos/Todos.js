import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';

class Todos extends Component {
   
    render() {

    console.log(this.props.todos);
    
    return this.props.todos.map((todo)=>(
      <TodoItem todo={todo}
       key={ todo.id }
       title={todo.title}
       completed={todo.completed}  
       markComplete={this.props.markComplete}
       delTodo={this.props.delTodo}/> 
    ));
    }
}

//Prop Validation
Todos.propTypes = {
    todos: PropTypes.array.isRequired
}

export default Todos;
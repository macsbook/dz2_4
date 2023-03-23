import React from 'react';
import classes from './Todo.module.css'
function Todo({task}) {
    return (
        <p className={classes.todo}>
            {task}
        </p>
    );
}

export default Todo;
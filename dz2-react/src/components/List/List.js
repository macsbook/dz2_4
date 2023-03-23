import  React from 'react'
import  classes from './List.module.css'
import Todo from "../Todo/Todo";
const List = ({list}) => {
    return (
    <div className={classes.MenuList}>
        {list.map(todo => <Todo task={todo.task} />)}
    </div>
    )}
export default List
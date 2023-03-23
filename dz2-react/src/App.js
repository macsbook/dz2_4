import { useState } from 'react';
import './App.css';
import Modal from './components/Modal/Modal';
import Button from './components/Button/Button';
import MenuList from './components/List/List'
function App() {
  const [ show, setShow ] = useState(false)
    const [newTask,SetNewTask] = useState('')
  const handleShow  = () => setShow(!show)
    const list = [
        {
            id:1 ,
            task: 'coding'
        },
        {
            id:2,
            task: 'eat'
        },
        {
            id:3,
            task: 'sleep'
        }
    ]
const addNewText = (event) => {
SetNewTask(event.target.value)
console.log(event.target.value, 'event')
}
  return (
    <div className="App">
      {show && <Modal
          addFunction = {addNewText}
      handleShow={handleShow}  />}
      <Button handleClick={handleShow}>
        Открыть модалку
      </Button>
        <MenuList list={list} />
    </div>
  );
}

export default App;

import React, { useState } from 'react'
import ReadyList from './ReadyList';
import Button from '../Button';

// onSubmit: ({title: string; content: string;}) => void; 


function AddList(props) {


  // const [toDoList, setToDoList] = useState([
  //   { id: 1, title: '예시제목', doList: '해야 할 일', state: false },
  //   { id: 2, title: '예시제목2', doList: '끝마친 일', state: true },
  // ])

  const [title, setTitle] = useState('');
  const [doList, setDoList] = useState('');


  const addTitle = (e) => {
    setTitle(e.target.value)
  }
  const addList = (e) => {
    setDoList(e.target.value)
  }

  const AddButtonHandler = (e) => {
    const addedId = {
      id: Date.now(),
      title,
      doList,
      state: false
    };
    setTitle('')
    setDoList('')
    props.onSubmit(addedId)
  };

  return (
    <>
      <div className='inputData'>
        title : &nbsp;
        <input className='inputTitle' value={title} onChange={addTitle} />
        content :&nbsp;
        <input className='inputDoList' value={doList} onChange={addList} />
      </div>
      <Button clickEventHandler={AddButtonHandler}>제출버튼입니당</Button>
    </>
  )
}

export default AddList
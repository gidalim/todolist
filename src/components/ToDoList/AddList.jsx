import React, { useState } from 'react'
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
    if (!title.trim() && !doList.trim()) {
      alert('제목과 내용을 입력해주세요!');
      return;
    }
    const addedId = {
      id: Date.now(), //동시에 1/1000초를 채울 수도 있다!!! 그럴 땐 UUID를 사용하자.
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
        <input type="text" maxLength={"22"} className='inputTitle' placeholder=' 제목을 작성해주세요.' value={title} onChange={addTitle} />
        <input type="text" className='inputDoList' placeholder='내용을 작성해주세요.' value={doList} onChange={addList} />
      </div>
      <Button clickEventHandler={AddButtonHandler}>기록하기</Button>

    </>
  )
}

export default AddList
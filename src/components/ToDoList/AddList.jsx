import React, { useState } from 'react'
import Button from '../Button';


function AddList(props) {



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
      <Button clickEventHandler={() => {
        window.alert('새로운 일정을 등록했어요!')
        AddButtonHandler()
      }}>기록하기!</Button>

    </>
  )
}

export default AddList
import React, { useState } from 'react'

function AddList() {

  const [title, setTitle] = useState('');
  const [doList, setDoList] = useState('');


  const addTitle = (e) => {
    setTitle(e.target.value)
  }
  const addList = (e) => {
    setDoList(e.target.value)
  }

  return (
    <>
      title : &nbsp;
      <input value={title} onChange={addTitle} />
      content :&nbsp;
      <input value={doList} onChange={addList} />
    </>
  )
}

export default AddList
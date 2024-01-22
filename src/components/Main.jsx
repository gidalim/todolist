import React, { useState } from "react";
import AddList from "./ToDoList/AddList";
import ListBox from "./ToDoList/ListBox";



function Main() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: 'UX강화하기', doList: '알림창과 디자인에 신경써보자', state: false },
    { id: 2, title: 'ToDoList 구현하기', doList: 'ToDoList 기능을 구현해보자', state: true },
  ])

  const removeButton = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id));
  }

  const readyOrNot = (id) => {
    setToDoList((toDoList) => toDoList.map((item) =>
      (item.id === id ? { ...item, state: !item.state } : item)));
  };


  return (
    <>
      <div className="labelArea">
        <AddList onSubmit={(item) => {
          setToDoList([
            ...toDoList, item
          ])
        }} />
      </div>
      <div className="mainArea">
        <ListBox
          toDoList={toDoList}
          removeButton={removeButton}
          readyOrNot={readyOrNot} />
      </div>
    </>
  )
}

export default Main


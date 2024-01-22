import React, { useState } from "react";
import AddList from "./ToDoList/AddList";
import ReadyItem from "./ToDoList/ReadyItem";



function Main() {
  const [toDoList, setToDoList] = useState([
    { id: 1, title: '예시제목', doList: '해야 할 일', state: false },
    { id: 2, title: '예시제목2', doList: '끝마친 일', state: true },
  ])

  const removeButton = (id) => {
    setToDoList(toDoList.filter((list) => list.id !== id));

  }

  const readyOrnot = (id) => {
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
        <div className="ListBox">
          <div className="ReadyItemBox">
            {toDoList
              .filter((item) => !item.state)
              .map((item) => (
                <ReadyItem
                  key={item.id}
                  item={item}
                  isDoneFunction={removeButton}
                  readyOrnot={readyOrnot}
                />
              ))}
          </div>
          <div className="centerLine"></div>
          <div className="DoneItemBox">
            {toDoList
              .filter((item) => item.state)
              .map((item) => (
                <ReadyItem
                  key={item.id}
                  item={item}
                  isDoneFunction={removeButton}
                  readyOrnot={readyOrnot}
                />
              ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Main
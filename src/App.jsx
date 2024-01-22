import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import LayOut from "./components/LayOut";
import AddList from "./components/ToDoList/AddList"
import ReadyList from "./components/ToDoList/ReadyList";




function App() {


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
      <LayOut>
        <div className="labelArea">
          <AddList onSubmit={(item) => {
            setToDoList([
              ...toDoList, item
            ])
          }} />
        </div>
        <div className="mainArea">
          <div className="ListBox">
            <div className="ReadyListBox">
              {toDoList
                .filter((item) => !item.state)
                .map((item) => (
                  <ReadyList
                    key={item.id}
                    item={item}
                    isDoneFunction={removeButton}
                    readyOrnot={readyOrnot}
                  />
                ))}
            </div>
            <div className="DoneListBox">
              {toDoList
                .filter((item) => item.state)
                .map((item) => (
                  <ReadyList
                    key={item.id}
                    item={item}
                    isDoneFunction={removeButton}
                    readyOrnot={readyOrnot}
                  />
                ))}
            </div>
          </div>
        </div>
      </LayOut>
    </>
  )
}

export default App;

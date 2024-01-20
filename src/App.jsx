import React, { useState } from "react";
import "./App.css";
import Button from "./components/Button";
import LayOut from "./components/LayOut";
import AddList from "./components/ToDoList/AddList"
import DeleteList from "./components/ToDoList/DeleteList";
import DoneList from "./components/ToDoList/DoneList";
import EditList from "./components/ToDoList/EditList";



function App() {


  const [toDoList, setToDoList] = useState([
    { id: 1, title: '예시제목', doList: '해야 할 일' },
  ])

  return (
    <>
      <LayOut>
        <div className="labelArea">
          <AddList />
          <Button >제출버튼입니당</Button>
        </div>
      </LayOut>
      <div className="mainArea">
        <div>이곳은 내용이 들어갈 공간입니다.</div>
      </div>


    </>
  )
}

export default App;

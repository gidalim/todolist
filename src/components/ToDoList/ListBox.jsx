import React from "react"
import ReadyItem from "./ReadyItem"


function ListBox({ toDoList, removeButton, readyOrnot }) {
  return (
    <div className="ListBox">
      <div className="ToDoList">ToDoList🛠️</div>
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
        {toDoList.filter((item) => !item.state).length === 0 && (
          <div className="noItemsMessage">모든 일을 다 마쳤어요!</div>
        )}
      </div>
      <div className="DoneLine">Done🎉</div>
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
        {toDoList.filter((item) => item.state).length === 0 && (
          <div className="noItemsMessage">함께 일정을 계획해볼까요?</div>
        )}
      </div>
    </div>
  )
}

export default ListBox
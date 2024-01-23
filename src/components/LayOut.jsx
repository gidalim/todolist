import React from 'react'


function LayOut(props) {
  return (
    <>
      <header className="headerSet">
        <div>ToDoList</div>
        <div>React_4기 박강토</div>
      </header>
      {props.children}
    </>
  );
}

export default LayOut
//헤더가 들어갈 자리입니다.

import React from 'react'


function LayOut(props) {
  return (
    <>
      <header className="headerSet">
        <div>ToDoList</div>
        <div>React_4기박강토</div>
      </header>
      {props.children}
    </>
  );
}

export default LayOut
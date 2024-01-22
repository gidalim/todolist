import React from 'react';
import Button from '../Button';


const ReadyList = ({ item, isDoneFunction, readyOrnot }) => {
  return (
    <div key={item.id} className="listBox">
      <div>
        {item.title}
      </div>
      <div>
        {item.doList}
      </div>
      <div className='deleteBtn'>
        <Button clickEventHandler={() => isDoneFunction(item.id)}>삭제</Button>
      </div>
      <div>
        {item.state ? (
          <>
            <div className='doneBtn'>다 했다!</div>
            <Button clickEventHandler={() => readyOrnot(item.id)}>Done</Button>
          </>
        ) : (
          <>
            <div className='yetBtn'>아직 안했어!</div>
            <Button clickEventHandler={() => readyOrnot(item.id)}>안했어.</Button>
          </>
        )}
      </div>
    </div >
  );
};

export default ReadyList
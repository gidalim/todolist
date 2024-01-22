import React from 'react';
import Button from '../Button';


const ReadyItem = ({ item, isDoneFunction, readyOrNot }) => {
  return (
    <div key={item.id} className="itemBox">
      <div className='contentName'>
        {item.title}
      </div>
      <div className='content'>
        {item.doList}
      </div>
      <div className='btnHandler'>
        <div className='deleteBtn'>
          <Button clickEventHandler={() => {
            window.alert('일정이 삭제되었어요!');
            isDoneFunction(item.id)
          }}>삭제</Button>
        </div>
        <div className='doneYetBtn'>
          {item.state ? (
            <>
              <div className='yetBtn'>
                <Button clickEventHandler={() => {
                  window.alert('일정을 변경했어요.')
                  readyOrNot(item.id)
                }}>변경</Button>
              </div>
            </>
          ) : (
            <>
              <div className='doneBtn'>
                <Button clickEventHandler={() => {
                  window.alert('일정을 끝마쳤어요!')
                  readyOrNot(item.id)
                }}>완료!</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div >
  );
};

export default ReadyItem
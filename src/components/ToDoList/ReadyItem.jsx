import React from 'react';
import Button from '../Button';


const ReadyItem = ({ item, isDoneFunction, readyOrnot }) => {
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
          <Button clickEventHandler={() => isDoneFunction(item.id)}>삭제</Button>
        </div>
        <div className='doneYetBtn'>
          {item.state ? (
            <>
              <div className='yetBtn'>
                <Button clickEventHandler={() => readyOrnot(item.id)}>안했어</Button>
              </div>
            </>
          ) : (
            <>
              <div className='doneBtn'>
                <Button clickEventHandler={() => readyOrnot(item.id)}>해냈다</Button>
              </div>
            </>
          )}
        </div>
      </div>
    </div >
  );
};

export default ReadyItem
import { useState } from "react";

function ShelfLayout() {
  const [option, setOption] = useState('todo');

  function getContent (option) {
    switch (option) {
      case 'todo':
        return <p>todo</p>
      case 'calendar':
        return <p>calendar</p>
      case 'actions':
        return <p>actions</p>
      case 'requests':
        return <p>requests</p>
      case 'classroom':
        return <p>classroom</p>
    }
  }

  return (
    <div className="bg-red-300 w-full h-full px-5">
      <div className="flex flex-col w-full h-full bg-blue-300">
        <div role="tablist" className="flex-initial flex justify-around tabs tabs-box">
          <div className={`flex-initial tab ${option === 'todo' && 'tab-active'}`} onClick={() => setOption('todo')}>
            <p>Todo</p>
          </div>
          <div className={`flex-initial tab ${option === 'calendar' && 'tab-active'}`} onClick={() => setOption('calendar')}>
            <p>Calendar</p>
          </div>
          <div className={`flex-initial tab ${option === 'actions' && 'tab-active'}`} onClick={() => setOption('actions')}>
            <p>Actions</p>
          </div>
          <div className={`flex-initial tab ${option === 'requests' && 'tab-active'}`} onClick={() => setOption('requests')}>
            <p>Requests</p>
          </div>
          <div className={`flex-initial tab ${option === 'classroom' && 'tab-active'}`} onClick={() => setOption('classroom')}>
            <p>Classroom</p>
          </div>
        </div>
        <div className="flex-1 w-full h-full bg-green-900">
          {getContent(option)}
        </div>
      </div>
    </div>
  )
}

export default ShelfLayout;
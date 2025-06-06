import { useState } from "react";

import Todo from "./shelf/Todo";
import Calendar from "./shelf/Calendar";
import Actions from "./shelf/Actions";
import Requests from "./shelf/Requests";
import Classroom from "./shelf/Classroom";

function ShelfLayout() {
  const [option, setOption] = useState('todo');
  const [optionLoading, setOptionLoading] = useState(false);

  function getContent (option, optionLoading) {
    if (optionLoading) {
      return <span className="loading loading-bars loading-lg"></span>
    }

    switch (option) {
      case 'todo':
        return <Todo />
      case 'calendar':
        return <Calendar />
      case 'actions':
        return <Actions />
      case 'requests':
        return <Requests />
      case 'classroom':
        return <Classroom />
    }
  }

  return (
    <div className="w-full h-full px-5">
      <div className="flex flex-col w-full h-full space-y-1">
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
        <div className="flex-1 flex justify-center items-center w-full h-full">
          {getContent(option, optionLoading)}
        </div>
      </div>
    </div>
  )
}

export default ShelfLayout;
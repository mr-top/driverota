import { useState } from "react";

import Todo from "./shelf/Todo";
import Calendar from "./shelf/Calendar";
import Actions from "./shelf/Actions";
import Requests from "./shelf/Requests";
import Classroom from "./shelf/Classroom";

const meetings = [
  {
    id: 1,
    name: 'Leslie Alexander',
    eventName: 'Driving lesson',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '1746968400',
    endDatetime: '1746972000',
  },
  {
    id: 2,
    name: 'Michael Foster',
    eventName: 'Driving lesson',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '1747731600',
    endDatetime: '1747734300',
  },
  {
    id: 3,
    name: 'Dries Vincent',
    eventName: 'Driving lesson',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '1747760400',
    endDatetime: '1747764000',
  },
  {
    id: 4,
    name: 'Leslie Alexander',
    eventName: 'Driving lesson',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '1749470400',
    endDatetime: '1749474000',
  },
  {
    id: 5,
    name: 'Michael Foster',
    eventName: 'Driving exam',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    startDatetime: '1749474900',
    endDatetime: '1749478500',
  },
]

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
        return <Calendar meetings={meetings}/>
      case 'actions':
        return <Actions meetings={meetings}/>
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
        <div className="flex-1 flex justify-center items-start w-full h-full">
          {getContent(option, optionLoading)}
        </div>
      </div>
    </div>
  )
}

export default ShelfLayout;
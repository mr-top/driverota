import { useState } from "react";

import BookSession from "./actions/BookSession";
import BookTimeOff from "./actions/BookTimeoff";
import BookSwap from "./actions/BookSwap";
import CancelSession from "./actions/CancelSession";
import CancelTimeOff from "./actions/CancelTimeOff";

function Actions({meetings}) {
  const [currentAction, setCurrentAction] = useState('book-session');
  const instructor = false;

  function getAction(currentAction) {
    switch (currentAction) {
      case 'book-session':
        return <BookSession meetings={meetings}/>
      case 'cancel-session':
        return <CancelSession />
      case 'book-timeoff':
        // must check if instructor
        return <BookTimeOff />
      case 'cancel-timeoff':
        // must check if instructor
        return <CancelTimeOff />
      case 'book-swap':
        // must check if student
        return <BookSwap />
    }
  }

  return (
    <div className="flex-1 flex flex-col sm:flex-row justify-around items-center rounded-md py-4 space-y-10 min-h-50 bg-base-100">
      <div className="flex flex-col h-full space-y-4 divide-y-1">
        <div className="flex flex-col items-center space-y-2 pb-5">
          <p className="pb-2">Bookings</p>
          <button className="btn w-40" onClick={() => setCurrentAction('book-session')}>Session</button>
          {instructor ?
            <>
              <button className="btn w-40" onClick={() => setCurrentAction('book-timeoff')}>Time off</button>
            </> :
            <>
              <button className="btn w-40" onClick={() => setCurrentAction('book-swap')}>Swap</button>
            </>}
        </div>
        <div className="flex flex-col items-center space-y-2">
          <p className="pb-2">Cancellation</p>
          <button className="btn w-40" onClick={() => setCurrentAction('cancel-session')}>Session</button>
          {instructor ?
            <>
              <button className="btn w-40" onClick={() => setCurrentAction('cancel-timeoff')}>Time off</button>
            </> :
            <>
            </>}
        </div>
      </div>
      <div className="flex flex-col items-center min-h-50 w-80">
        {getAction(currentAction)}
      </div>
    </div>
  )
}

export default Actions;
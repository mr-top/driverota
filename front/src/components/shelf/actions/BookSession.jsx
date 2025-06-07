import { useState, useEffect } from "react";

function BookSession ({meetings}) {
  const [selectedDay, setSelectedDay] = useState();
  const minimumBookingGapMinutes = 15;

  let scheduledMeetings = meetings.map(meeting => ({start: new Date(meeting.startDatetime), end: new Date(meeting.endDatetime)}));

  console.log(scheduledMeetings);

  useEffect(() => {
    console.log(new Date(selectedDay))
  }, [selectedDay]);

  return (
    <>
      <p>Book a session</p>
      <div>
        <label htmlFor="book-session-id">Date: </label>
        <input id='book-session-id' type="date" className='input' onChange={e => setSelectedDay(e.currentTarget.value)}/>
      </div>
      <div>
        <label htmlFor="book-session-id">Time: </label>
        <input id='book-session-id' type="date" className='input' onChange={e => setSelectedDay(e.currentTarget.value)}/>
      </div>
    </>
  )
}

export default BookSession;
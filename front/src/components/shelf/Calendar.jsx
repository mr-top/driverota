import { useState } from 'react'
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid'
import {
  add,
  eachDayOfInterval,
  startOfWeek,
  endOfWeek,
  endOfMonth,
  format,
  getDay,
  isEqual,
  isSameDay,
  isSameMonth,
  isToday,
  parse,
  parseISO,
  startOfToday,
} from 'date-fns';

import Event from './Event';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

let colStartClasses = [
  'col-start-7',
  'col-start-1',
  'col-start-2',
  'col-start-3',
  'col-start-4',
  'col-start-5',
  'col-start-6',
]

function Calendar({ meetings }) {
  let today = startOfToday()
  let [selectedDay, setSelectedDay] = useState(today)
  let [currentMonth, setCurrentMonth] = useState(format(today, 'MMM-yyyy'))
  let firstDayCurrentMonth = parse(currentMonth, 'MMM-yyyy', new Date())

  let days = eachDayOfInterval({
    start: startOfWeek(firstDayCurrentMonth, { weekStartsOn: 1 }),
    end: endOfWeek(endOfMonth(firstDayCurrentMonth), { weekStartsOn: 1 }),
  })

  function previousMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: -1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  function nextMonth() {
    let firstDayNextMonth = add(firstDayCurrentMonth, { months: 1 })
    setCurrentMonth(format(firstDayNextMonth, 'MMM-yyyy'))
  }

  let selectedDayMeetings = meetings.filter((meeting) => {
    return isSameDay(parse(meeting.startDatetime, 't', new Date()), selectedDay)
  }
  )

  return (
    <div className="flex-1 flex justify-center rounded-md py-4 bg-base-100">
      <div className="grid grid-rows-2 flex-1 min-w-100 max-w-200">
        <div className="">
          <div className="flex items-center px-5">
            <h2 className="flex-1 font-semibold text-base-content">
              {format(firstDayCurrentMonth, 'MMMM yyyy')}
            </h2>
            <button
              type="button"
              onClick={previousMonth}
              className="-my-1.5 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Previous month</span>
              <ChevronLeftIcon className="w-5 h-5" aria-hidden="true" />
            </button>
            <button
              onClick={nextMonth}
              type="button"
              className="-my-1.5 -mr-1.5 ml-2 flex flex-none items-center justify-center p-1.5 text-gray-400 hover:text-gray-500"
            >
              <span className="sr-only">Next month</span>
              <ChevronRightIcon className="w-5 h-5" aria-hidden="true" />
            </button>
          </div>
          <div className="grid grid-cols-7 mt-10 text-xs leading-6 text-center text-base-content opacity-60">
            <div>M</div>
            <div>T</div>
            <div>W</div>
            <div>Th</div>
            <div>F</div>
            <div>S</div>
            <div>Su</div>
          </div>
          <div className="grid grid-cols-7 mt-2 text-sm">
            {days.map((day, dayIdx) => (
              <div
                key={day.toString()}
                className={classNames(
                  dayIdx === 0 && colStartClasses[getDay(day)],
                  'py-1.5'
                )}
              >
                <button
                  type="button"
                  onClick={() => setSelectedDay(day)}
                  className={classNames(
                    isEqual(day, selectedDay) && 'text-white',
                    !isEqual(day, selectedDay) &&
                    isToday(day) &&
                    'text-red-500',
                    !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    isSameMonth(day, firstDayCurrentMonth) &&
                    'text-base-content',
                    !isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    !isSameMonth(day, firstDayCurrentMonth) &&
                    'text-base-content opacity-50',
                    isEqual(day, selectedDay) && isToday(day) && 'bg-red-500',
                    isEqual(day, selectedDay) &&
                    !isToday(day) &&
                    'bg-base-300',
                    !isEqual(day, selectedDay) && 'hover:bg-base-200',
                    (isEqual(day, selectedDay) || isToday(day)) && 'font-semibold',
                    'mx-auto flex h-8 w-8 items-center justify-center rounded-full'
                  )}
                >
                  <time dateTime={format(day, 'yyyy-MM-dd')}>
                    {format(day, 'd')}
                  </time>
                </button>

                <div className="w-1 h-1 mx-auto mt-1">
                  {meetings.some((meeting) =>
                    isSameDay(parse(meeting.startDatetime, 't', new Date()), day)
                  ) && (
                      <div className="w-1 h-1 rounded-full bg-sky-500"></div>
                    )}
                </div>
              </div>
            ))}
          </div>
        </div>
        <section className="px-5">
          <h2 className="font-semibold text-base-content">
            Schedule for{' '}
            <time dateTime={format(selectedDay, 'yyyy-MM-dd')}>
              {format(selectedDay, 'MMM dd, yyy')}
            </time>
          </h2>
          <ol className="mt-4 space-y-1 text-sm leading-6">
            {selectedDayMeetings.length > 0 ? (
              selectedDayMeetings.map((meeting) => (
                <Event meeting={meeting} key={meeting.id} />
              ))
            ) : (
              <p>No meetings for today.</p>
            )
            }
          </ol>
        </section>
      </div>
    </div>
  )
}

export default Calendar;
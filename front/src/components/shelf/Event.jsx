import { format, parse } from "date-fns";

function Event({ meeting }) {
  return (
    <div className="flex items-center w-full py-2">
      <div className="flex-1 flex space-x-2">
        <div className="size-15 border-[0.5px] rounded-full overflow-hidden">
          <img src={meeting.imageUrl} alt="" className="object-contain" />
        </div>
        <div>
          <p className="text-sm">{meeting.name}</p>
          <p className="text-xs opacity-80">{meeting.eventName}</p>
          <p className="mt-0.5">
            <time dateTime={parse(meeting.startDatetime, 't', new Date())}>
              {format(parse(meeting.startDatetime, 't', new Date()), 'h:mm a')}
            </time>{' '}
            -{' '}
            <time dateTime={meeting.endDatetime}>
              {format(parse(meeting.endDatetime, 't', new Date()), 'h:mm a')}
            </time>
          </p>
        </div>
      </div>
      <div className="flex-initial">
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn m-1">Options</div>
          <ul tabIndex={0} className="dropdown-content menu bg-base-300 rounded-box z-1 w-30 p-2 shadow-sm">
            <li><a>Item 1</a></li>
            <li><a>Item 2</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Event;
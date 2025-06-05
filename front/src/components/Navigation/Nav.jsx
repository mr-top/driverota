import { useContext } from 'react';

import { UserContext } from '../../context/UserContext';

import HomeIcon from '../../assets/home.png';
import CalendarIcon from '../../assets/calendar.png';
import SettingsIcon from '../../assets/settings.png';

function Nav () {
  const { removeUser } = useContext(UserContext);

  return (
    <div className="flex-1 flex justify-around w-full bg-base-100 py-1">
      <div className="flex-initial flex items-center">
        <p className="text-2xl">Driverota</p>
      </div>
      <div className="flex-initial flex items-center">
        Welcome user!
      </div>
      <div className="flex-initial flex flex-col sm:flex-row items-center space-y-1 sm:space-x-2 sm:space-y-0">
        <button className="btn btn-primary btn-sm sm:btn-md min-w-28 w-fit flex">
          <img src={HomeIcon} alt="" className='size-5 flex-initial'/>
          <p className='flex-1'>Home</p>
        </button>
        <button className="btn btn-primary btn-sm sm:btn-md min-w-28 w-fit flex">
          <img src={CalendarIcon} alt="" className='size-5 flex-initial'/>
          <p className='flex-1'>Calendar</p>
        </button>
        <button className="btn btn-primary btn-sm sm:btn-md min-w-28 w-fit flex">
          <img src={SettingsIcon} alt="" className='size-5 flex-initial'/>
          <p className='flex-1'>Settings</p>
        </button>
        <button className="btn btn-primary btn-sm sm:btn-md min-w-28 w-fit flex" onClick={removeUser}>
          <p>Log out</p>
        </button>
      </div>
    </div>
  )
}

export default Nav;
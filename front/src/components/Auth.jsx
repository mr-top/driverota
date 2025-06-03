import { useState, useContext } from 'react';
import { Outlet, Navigate } from "react-router";

import { UserContext } from "../context/UserContext";

import slateCar from '../assets/slateCar.jpg';
import yellowCar from '../assets/yellowCar.jpg';

function Auth() {
  const { loggedDetails } = useContext(UserContext);
  const [role, setRole] = useState('student');

  return loggedDetails.logged ? <Navigate to='/home' /> :
    <div className="flex justify-center items-center min-h-140 h-screen px-8 py-4">
      <div className="flex-1 flex justify-center h-120 max-w-240 border-[0.5px] rounded-xl overflow-hidden shadow-2xl bg-base-300">
        <div className="hidden sm:flex sm:flex-1">
          <img className='object-cover' src={role === 'student' ? yellowCar : slateCar} alt="" />
        </div>
        <div className="flex-initial flex flex-col min-w-80 px-2 py-4 space-y-5 sm:border-l-2">
          <div className="flex justify-center w-full">
            <div role="tablist" className="tabs tabs-box flex justify-center">
              <a role="tab" className={`tab ${role === 'student' && 'tab-active'}`} onClick={() => setRole('student')}>Student</a>
              <a role="tab" className={`tab ${role === 'instructor' && 'tab-active'}`} onClick={() => setRole('instructor')}>Instructor</a>
            </div>
          </div>
          <Outlet context={{role}}/>
        </div>
      </div>
    </div>;
}

export default Auth;
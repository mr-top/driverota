import { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router';

import { UserContext } from '../context/UserContext';

import { getLoggedUser } from '../appwrite/config';

import Nav from "./Navigation/Nav";
import ShelfLayout from './ShelfLayout';
import Footer from './Navigation/Footer';

function MainLayout() {
  const { loggedDetails } = useContext(UserContext);
  const [loggedProfile, setLoggedProfile] = useState({});

  useEffect(() => {
    async function fetchLoggedProfile() {
      try {
        const result = await getLoggedUser(loggedDetails.id);

        if (result.success) {
          setLoggedProfile(result.loggedUser);
        }
      } catch (error) {
        console.log(error);
      }
    }

    fetchLoggedProfile();
  }, []);

  return (
    <div className="flex flex-col h-screen bg-blue-200">
      <div className="flex-initial flex flex-col min-h-fit bg-green-400">
        {loggedProfile.verified || <div className='flex justify-center px-2 py-1 bg-error'>
          <p className='text-xs sm:text-sm flex-initial'>Your profile is not verified. Please head to your accounts <Link to='/settings/account' className='link font-semibold'>settings</Link> to verify</p>
        </div>}
        <Nav />
      </div>
      <div className="flex-1 flex flex-col bg-neutral py-2 sm:py-4">
          <ShelfLayout/>
      </div>
      <div className="flex-initial min-h-40 bg-red-300">
          <Footer/>
      </div>
    </div>
  )
}

export default MainLayout;
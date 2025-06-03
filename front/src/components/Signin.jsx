import { useState, useContext } from "react";
import { useOutletContext, Link } from "react-router";
import { login } from "../appwrite/config";

import { UserContext } from "../context/UserContext";

import { validateEmail, validatePassword } from "../utility.js/validate";

function Signin() {
  const { setUser } = useContext(UserContext);
  const { role } = useOutletContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [message, setMessage] = useState('');

  async function submitLogin () {
    try {
      const loggedUser = await login(email, password, role);

      setUser(loggedUser.$id);
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full">
      <div className="flex-initial">
        <p className="text-xl">Sign In</p>
      </div>
      <div className="flex-1 flex flex-col items-center space-y-2 max-w-60">
        <div>
          <label htmlFor="email_login" className="text-sm">Email</label>
          <input id='email_login' type="text" className={`input ${email && (validateEmail(email) || 'border-error')}`} value={email} onChange={e => setEmail(e.currentTarget.value)} />
        </div>
        <div>
          <label htmlFor="password_login" className="text-sm">Password</label>
          <input id='password_login' type="password" className={`input ${password && (validatePassword(password) || 'border-error')}`} value={password} onChange={e => setPassword(e.currentTarget.value)} />
        </div>
        <div className="flex justify-between w-full pt-5">
          <button className="btn btn-primary flex-initial" disabled={!validateEmail(email) || !validatePassword(password)} onClick={submitLogin}>Submit</button>
          <div className="flex-initial flex flex-col justify-center">
            <p className="text-xs">Forgot your password?</p>
            <p className="text-sm link">Reset it</p>
          </div>
        </div>
        {message && <p className="text-sm text-error">{message}</p>}
        <Link to='/auth/signup'><p className="link pt-4">Sign up</p></Link>
      </div>
    </div>
  )
}

export default Signin;
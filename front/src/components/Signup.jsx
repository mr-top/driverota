import { useState } from "react";
import { useOutletContext, useNavigate, Link } from "react-router";
import { register } from "../appwrite/config";

import { validateEmail, validatePassword } from "../utility.js/validate";

function Signup() {
  const navigate = useNavigate();
  const { role } = useOutletContext();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [password2, setPassword2] = useState('');
  const [message, setMessage] = useState('');

  async function submitRegister() {
    try {
      await register(email, password, role);

      navigate('/auth/signin');
    } catch (error) {
      setMessage(error.message);
    }
  }

  return (
    <div className="flex-1 flex flex-col justify-center items-center w-full">
      <div className="flex-initial">
        <p className="text-xl">Sign Up</p>
      </div>
      <div className="flex-1 flex flex-col items-center space-y-2 max-w-60">
        <div>
          <label htmlFor="email_signup" className="text-sm">Email</label>
          <input id='email_signup' type="text" className={`input ${email && (validateEmail(email) || 'border-error')}`} value={email} onChange={e => setEmail(e.currentTarget.value)} />
        </div>
        <div>
          <label htmlFor="password_signup" className="text-sm">Password</label>
          <input id='password_signup' type="password" className={`input ${password && (validatePassword(password) || 'border-error')}`} value={password} onChange={e => setPassword(e.currentTarget.value)} />
        </div>
        <div>
          <label htmlFor="password2_signup" className="text-sm">Repeat password</label>
          <input id='password2_signup' type="password" className={`input ${password2 && ((validatePassword(password2) && password === password2) || 'border-error')}`} value={password2} onChange={e => setPassword2(e.currentTarget.value)} />
        </div>
        <div className="flex justify-between w-full pt-5">
          <button className="btn btn-primary flex-initial" disabled={!validateEmail(email) || !validatePassword(password) || !validatePassword(password2) || password !== password2} onClick={submitRegister}>Submit</button>
          <div className="flex-initial flex flex-col justify-center">
            <Link to='/auth/signin'><p className="link">Sign in</p></Link>
          </div>
        </div>
        {message && <p className="text-sm text-error">{message}</p>}
      </div>
    </div>
  )
}

export default Signup;
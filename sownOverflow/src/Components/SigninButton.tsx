import React from 'react'
import { VscSignIn } from "react-icons/vsc";
import { Link } from 'react-router-dom';

const SigninButton = () => {
  return (
    <div>
      <Link to="/logins">
         <button className='bg-inherit flex justify-center items-center gap-1
          px-7 py-2 rounded-lg text-indigo-800 font-semibold border
           border-indigo-800 hover:bg-indigo-300'>
        <VscSignIn />
        Login</button></Link>
    </div>
  )
}

export default SigninButton

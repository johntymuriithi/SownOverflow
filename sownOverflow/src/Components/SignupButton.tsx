import React from 'react'
import { SiGnuprivacyguard } from "react-icons/si";
import { Link } from 'react-router-dom';

const SignupButton = () => {
    return (
        <div>
          <Link to={"/logins"}>
            <button className='bg-indigo-800 flex justify-center items-center gap-1
              px-7 py-2 rounded-lg text-slate-100 font-semibold hover:bg-indigo-700'>
            <SiGnuprivacyguard />
            Sign Up</button>
          </Link>
        </div>
      )
}

export default SignupButton

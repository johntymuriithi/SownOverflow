import React, { FormEvent, useState } from 'react';
import farmerImage from '../../Assets/Images/farmer.jpg';
// import loader from '../../Assets/Images/loader1.gif';
import {  loginUser, signUser } from './usersSlice';
import { LoginFormElements, SignUpFormElements } from '@/Types/usersTypes';
import { useAppDispatch,} from '@/Types/hooksTypes';
import { useNavigate } from 'react-router-dom';
import { CiUser } from "react-icons/ci";

export default function LoginSignUp() {
  const dispatch = useAppDispatch()
  const navigate =  useNavigate()
  const [postStatus, setPostStatus] = useState<string>('idle')
  const [showPassword, setShowPassword] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [userType, setUserType] = useState('farmer');
  
  

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleAuthMode = () => {
    setIsLogin(!isLogin);
  };
  
  const handleLogin = async (e: FormEvent<LoginFormElements>) => {
    e.preventDefault();
    const email = e.currentTarget.elements.emailLogin.value
    const password = e.currentTarget.elements.passWord.value

   try {
    setPostStatus('pending')
    await dispatch(loginUser({email, password})).unwrap()
    navigate('/')
   } catch (err) {
    console.log(err) // for now only
    alert("Incorrect Email or Password, Try again!!")
    e.currentTarget.elements.emailLogin.value = ""
    e.currentTarget.elements.passWord.value = ""
    setPostStatus('failed')
   } finally {
    setPostStatus('idles')
   }
  };

  const handleSignup = async (e: FormEvent<SignUpFormElements>) => {
    e.preventDefault();

    const email = e.currentTarget.elements.emailSignup.value
    const password = e.currentTarget.elements.confirmPassword.value
    const level = userType
    const username = e.currentTarget.elements.username.value

   try {
    setPostStatus('pending')
    await dispatch(signUser({email, password, level, username})).unwrap()
    alert("User Signed Successfully")
    navigate('/')

   } catch (err) {
    console.log(err)
    setPostStatus('failed')
   } finally {
    setPostStatus('idles')
   }
    // Handle form submission logic here
  };

  const handleFeature = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    alert("Feature Coming Soon!!")
  }

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-500">
      <div className="flex shadow-lg rounded-lg overflow-hidden md:w-full max-w-4xl bg-gray-200 min-h-[60vh] w-[300px]">
        {/* Farmer image */}
        <div className="w-full md:w-1/2 hidden md:block relative">
          <img
            src={farmerImage}
            alt="A farmer consulting something on his phone"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 bg-violet-900 opacity-60"></div>
          <div className="absolute inset-0 flex items-center justify-center">
            <p className="text-white text-2xl font-bold">WELCOME TO SOWN OVERFLOW</p>
          </div>
          <div className="absolute inset-0 flex items-center justify-center mt-20">
            <p className="text-white text-2xl font-bold">
              {isLogin ? "Sign in to get started" : "Sign up to join our community"}
            </p>
          </div>
        </div>

        {/* Form DIV */}
        <div className="w-full md:w-1/2 p-8 md:mt-10 transition duration-300 ease-in-out">
          <h2 className="text-[18px] md:text-2xl font-bold text-gray-600 text-center leading-9 md:hidden mb-7">
            {isLogin ? "Sign in, be part of our incredible community" : "Sign up,  join our incredible community"}
          </h2>

          {isLogin ? (
            <form onSubmit={handleLogin}  className={`transition duration-900 ${isLogin ? 'opacity-100' : 'opacity-0'}`}>
              {/* <div className="px-6 sm:px-0 max-w-sm">
              <button type="button" className="text-white w-full bg-[#4285F4] hover:bg-blue-800 transition focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center justify-between mr-2 mb-2">
                <svg className="mr-2 -ml-1 w-4 h-4" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="google" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 488 512"><path fill="currentColor" d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z"></path></svg>
                Sign in with Google
                <div></div>
              </button>
              </div> */}

              <div className="flex items-center my-6">
                <span className="flex-grow bg-gray-300 rounded h-0.5"></span>
                <span className="mx-4 text-sm text-gray-500">or</span>
                <span className="flex-grow bg-gray-300 rounded h-0.5"></span>
              </div>

              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="email" id="emailLogin" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@example.com" aria-label="Email address" />
              </div>

              <div className="mb-6 relative">
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                      <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                    </svg>
                  </div>
                  <input type={showPassword ? 'text' : 'password'} id="passWord" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5" placeholder="Enter your password" aria-label="Password" />
                  <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
                    {showPassword ? (
                      <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                        <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                          <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                          <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                        </g>
                      </svg>
                    ) : (
                      <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 0-4 4" />
                      </svg>
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                <div>
                  <a href="#" className="text-sm text-blue-600 hover:underline" 
                  onClick={handleFeature}>Forgot password?</a>
                </div>
              </div>

              <button type="submit" className="w-full text-white bg-violet-950 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign in</button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Don't have an account? <button onClick={toggleAuthMode} className="text-blue-600 hover:underline">Sign up</button>
              </p>
            </form>
          ) : (
            <form onSubmit={handleSignup} className={`transition-opacity duration-900 ${!isLogin ? 'opacity-100' : 'opacity-0'}`}>

              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                    <path d="m10.036 8.278 9.258-7.79A1.979 1.979 0 0 0 18 0H2A1.987 1.987 0 0 0 .641.541l9.395 7.737Z" />
                    <path d="M11.241 9.817c-.36.275-.801.425-1.255.427-.428 0-.845-.138-1.187-.395L0 2.6V14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2.5l-8.759 7.317Z" />
                  </svg>
                </div>
                <input type="email" id="emailSignup" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="name@example.com" aria-label="Email address" />
              </div>

              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <CiUser />
                </div>
                <input type="text" id="username" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" placeholder="John Doe" aria-label="user name" />
              </div>

              <div className="mb-4 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 16 20">
                    <path d="M14 7h-1.5V4.5a4.5 4.5 0 1 0-9 0V7H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2Zm-5 8a1 1 0 1 1-2 0v-3a1 1 0 1 1 2 0v3Zm1.5-8h-5V4.5a2.5 2.5 0 1 1 5 0V7Z" />
                  </svg>
                </div>
                <input type={showPassword ? 'text' : 'password'} id="password" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5" placeholder="Enter your password" aria-label="Password" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
                  {showPassword ? (
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                      </g>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 0-4 4" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="mb-6 relative">
                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3.75 12a8.25 8.25 0 0 1 15.457-4.5h-2.227a.75.75 0 0 0 0 1.5h3.75a.75.75 0 0 0 .75-.75V4.5a.75.75 0 0 0-1.5 0v1.364A9.75 9.75 0 1 0 21.75 12a.75.75 0 0 0-1.5 0 8.25 8.25 0 1 1-16.5 0Z" />
                  </svg>
                </div>
                <input type="password" id="confirmPassword" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 pr-10 p-2.5" placeholder="Confirm your password" aria-label="Confirm Password" />
                <button type="button" className="absolute inset-y-0 right-0 flex items-center pr-3" onClick={togglePasswordVisibility} aria-label="Toggle password visibility">
                  {showPassword ? (
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 14">
                      <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
                        <path d="M10 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
                        <path d="M10 13c4.97 0 9-2.686 9-6s-4.03-6-9-6-9 2.686-9 6 4.03 6 9 6Z" />
                      </g>
                    </svg>
                  ) : (
                    <svg className="w-5 h-5 text-gray-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 18">
                      <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1.933 10.909A4.357 4.357 0 0 1 1 9c0-1 4-6 9-6m7.6 3.8A5.068 5.068 0 0 1 19 9c0 1-3 6-9 6-.314 0-.62-.014-.918-.04M2 17 18 1m-5 8a3 3 0 1 0-4 4" />
                    </svg>
                  )}
                </button>
              </div>

              <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Sign up as:
              </label>
              <div className="flex">
                <label className="inline-flex items-center mr-4">
                  <input
                    type="radio"
                    className="form-radio"
                    // id='formRadio'
                    name="userType"
                    value="farmer"
                    checked={userType === 'farmer'}
                    onChange={() => setUserType('farmer')}
                  />
                  <span className="ml-2">Farmer</span>
                </label>
                <label className="inline-flex items-center">
                  <input
                    type="radio"
                    className="form-radio"
                    // id='formRadio'
                    name="userType"
                    value="expert"
                    checked={userType === 'expert'}
                    onChange={() => setUserType('expert')}
                  />
                  <span className="ml-2">Expert</span>
                </label>
              </div>
            </div>

              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <input id="remember-me" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 focus:ring-2" />
                  <label htmlFor="remember-me" className="ml-2 text-sm text-gray-600">Remember me</label>
                </div>
                {/* <div>
                  <a href="#" className="text-sm text-blue-600 hover:underline">Forgot password?</a>
                </div> */}
              </div>

              <button type="submit" className="w-full text-white bg-violet-950 hover:bg-violet-900 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">Sign up</button>

              <p className="text-sm text-gray-600 mt-4 text-center">
                Already have an account? <button onClick={toggleAuthMode} className="text-blue-600 hover:underline">Sign in</button>
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
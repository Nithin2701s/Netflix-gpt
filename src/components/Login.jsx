import React, { useRef, useState } from "react";
import Header from "./Header";
import { emailValidation, passwordValidation } from "../utils/validate";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [isEmailValid, setEmailValid] = useState(true);
  const [isPassValid, setPassValid] = useState(true);
  const username = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };
  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmailValid(emailValidation(email.current.value));
  };
  const handlePasswordChange = (e) => {
    e.preventDefault();
    setPassValid(passwordValidation(password.current.value));
  };
 const handleLogin = (e)=>{
    e.preventDefault()
   if(!isEmailValid || !isPassValid) return;
  if(!isSignIn){
    createUserWithEmailAndPassword(auth,email.current.value,password.current.value)
    .then(()=>{
    })
    .catch(err=>{
      const errCode = err.code
      const errMessage = err.message
      alert(errCode + errMessage)
    })
  }
  else {
    signInWithEmailAndPassword(auth, email.current.value, password.current.value)
    .then(() => {
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorCode + errorMessage)
      });
    
  }
 }
  return (
    <div>
      <Header />
      <div className='absolute w-full bg-black'>
        <img
          src='/Netflix-Bg.jpg'
          alt='Netflix Background'
          className='opacity-45 w-full h-screen'
        />
      </div>
      <form  className='absolute bg-black p-12 w-3/12 my-32 mx-auto right-0 left-0 text-white bg-opacity-75 shadow-2xl shadow-black'>
        <h1 className='text-2xl font-bold my-4'>
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            ref={username}
            type='text'
            name='username'
            id='username'
            placeholder='Username'
            className='py-4 px-3 my-2 w-full bg-transparent text-sm font-semibold border-red-600 border rounded-sm focus:bg-slate-500 focus:bg-opacity-35 placeholder:text-sm'
          />
        )}
        <input
          ref={email}
          onChange={handleEmailChange}
          type='text'
          name='email'
          id='email'
          placeholder='Email Address'
          className='py-4 px-3 my-2 w-full bg-transparent text-sm font-semibold border-red-600 border rounded-sm focus:bg-slate-500 focus:bg-opacity-35 placeholder:text-sm'
        />
        {!isEmailValid && (
          <span className='text-red-700 text-base'>
            ⊗ invalid Email Address
          </span>
        )}
        <input
          ref={password}
          onChange={handlePasswordChange}
          type='password'
          name='password'   
          id='password'
          placeholder='Password'
          className='py-3 px-4 my-2 w-full bg-transparent text-sm border-red-600 border rounded-sm focus:bg-slate-500 focus:bg-opacity-35 placeholder:text-sm'
        />
        {!isPassValid && (
          <span className='text-red-700 text-base'>⊗ invalid Password</span>
        )}
        <button
          type='submit'
          onClick={handleLogin}
          className='py-2 px-4 my-2  bg-red-700 w-full rounded-sm text-sm font-semibold'
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        {isSignIn ? (
          <p className='text-sm text-gray-300 py-2 my-2'>
            New to Netflix?{" "}
            <span
              className='text-white font-semibold cursor-pointer'
              onClick={handleSignInForm}
            >
              Sign up now.
            </span>
          </p>
        ) : (
          <p className='text-sm text-gray-300 py-2 my-2'>
            Already a user?{" "}
            <span
              className='text-white font-semibold cursor-pointer'
              onClick={handleSignInForm}
            >
              {" "}
              Sign in now.
            </span>
          </p>
        )}
        <p className='text-xs text-neutral-500 font-medium'>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.{" "}
          <span className='text-blue-700'>Learn more.</span>
        </p>
      </form>
    </div>
  );
};

export default Login;

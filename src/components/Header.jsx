import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { lang, langConfig } from "../utils/constants";
import USER_AVATAR from '../assets/avatar.png'
import useAuth from "../hooks/useAuth";
import { changeLang, toggleGPT } from "../store/GPTSlice";
import SearchBar from "./SearchBar";
const Header = () => {
  useAuth();
  const user = useSelector((state) => state.user);
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const {showGPT,langId} = useSelector((state) => state.gpt);
  const openDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleSiginOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        alert(error.code + error.message);
      });
  };
  const handleGPT = () => {
    dispatch(toggleGPT());
  };
   
  const handleLangSelect = (e)=>{
    dispatch(changeLang(e.target.value))
  }


  return (
    <div className='fixed bg-gradient-to-b from-black px-8 lg:mt-[-15px] w-full z-10 flex items-center justify-between'>
      <div className="w-1/3">
      <img
        src='Netflix-Logo.png'
        alt=''
        className='h-[5rem] md:h-[7.3rem] lg:ml-24 pointer-events-none'
        />
        </div>
   
          <div className="w-1/3"> 
            {user && !showGPT && <SearchBar/>}
           </div>

      <div className="w-1/3 md:w-1/3">
        {user && (
          <div className='flex justify-end items-center cursor-pointer'>
            {showGPT && (
              <div className="w-3/12">
                <select
                  name='lang'
                  id='lang'
                  onChange={handleLangSelect}
                  className='bg-gray-900 text-white text-xs md:text-sm p-1 md:p-2'
                >
                  {langConfig.map(lang =><option key={lang.id } value={lang.id}>{lang.name}</option>)}
                </select>
              </div>
            )}
            <div className="flex justify-end gap-x-2 w-9/12 md:gap-x-5">

            <div onClick={handleGPT} className="">
              <h1 className='text-gray-300 bg-blue-600 p-1 px-2 md:p-3 md:px-4 text-xs md:w-28 text-center rounded-md md:text-sm font-semibold '>
                {showGPT ? lang?.[langId].homepage : "GPT Search"}
              </h1>
            </div>
            <div onMouseLeave={closeDropdown} className="">
              <div onMouseOver={openDropdown} className='flex gap-x-2'>
                <img
                  src={USER_AVATAR}
                  alt=''
                  className='w-7 md:w-10 rounded-md overflow-hidden cursor-pointer'
                  />
                <span className='text-white text-xs md:text-sm self-center cursor-pointer'>
                  {"▼"}
                </span>
              </div>
              {isOpen && (
                <div className='absolute  bg-black right-10 top-20 w-20 lg:w-28'>
                  <button className='text-white p-2' onClick={handleSiginOut}>
                    {lang?.[langId].signout}
                  </button>
                </div>
              )}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;

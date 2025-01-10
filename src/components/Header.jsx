import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../store/UserSlice";
import { useNavigate } from "react-router";
import { USER_AVATAR } from "../utils/constants";
const Header = () => {
  const user = useSelector(state => state.user)
  const dispatch = useDispatch()
  const navigate =  useNavigate()
  const [isOpen, setIsOpen] = useState(false);
 
  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth,(user)=>{
      if(user){
        const {uid,email,displayName} = user
        dispatch(addUser({uid,email,displayName}))
        navigate('/browse')
      } else {
         dispatch(removeUser())
         navigate('/')
      }
    })
    return ()=> unsubscribe();
  },[])
  const openDropdown = () => {
    setIsOpen(true);
  };
  const closeDropdown = () => {
    setIsOpen(false);
  };
  const handleSiginOut = ()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      alert(error.code + error.message)
    });
  }

  return (
    <div className="absolute bg-gradient-to-b from-black px-8 mt-[-15px] w-full z-10 flex items-center justify-between"> 
     <img src='Netflix-Logo.png' alt="" className="h-[7.3rem] ml-24 pointer-events-none"  />

     {user && <div onMouseLeave={closeDropdown}>

      <div onMouseOver={openDropdown} className="flex gap-x-2">
      <img src= {USER_AVATAR}
       alt=""
        className="w-10 rounded-md overflow-hidden cursor-pointer" />
        <span className="text-white text-xs self-center cursor-pointer">{"▼"}</span>
      </div>
      {isOpen && (
        <div  className="absolute bg-black right-10 top-20 w-28">
           <button className="text-white p-2" 
      onClick={handleSiginOut}
      >sign out</button>
          </div>)}
     </div>}
    </div>
  );
};

export default Header;

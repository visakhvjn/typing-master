import React from 'react';
import KeyboardIcon from "./assets/icon/keyboard.svg";

const Support: React.FC = () => {
  return <div className='flex flex-col justify-center h-screen items-center text-center p-10 space-y-2'>
    <img
      src={KeyboardIcon}
      alt="logo"
    />
    <span className='font-bold text-2xl'>Oops! </span>
    <span>The Typing Master is best viewed on screens that have a physical keyboard attached to them. How about getting a different device?</span>
  </div>;
};

export default Support;
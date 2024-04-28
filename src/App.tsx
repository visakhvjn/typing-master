import React, { useEffect, useRef, useState } from "react";
import { Header, Paragraph } from "./components";
import KeyboardIcon from './assets/icon/keyboard.svg';
import DarkKeyboardIcon from './assets/icon/dark-keyboard.svg';
import MoonIcon from './assets/icon/moon.svg';
import SunIcon from './assets/icon/sun.svg';

const paragraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident fugit repellendus facere nemo ipsam dolore aliquam totam fuga itaque excepturi minus, nesciunt error accusantium quibusdam culpa molestias incidunt quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident fugit repellendus facere nemo ipsam dolore aliquam totam fuga itaque excepturi minus, nesciunt error accusantium quibusdam culpa molestias incidunt quas!';

const App: React.FC = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(true);

  const userInputRef = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState('');

  const toggleDarkMode = () => {
    setIsDarkModeOn(!isDarkModeOn);
    userInputRef.current?.focus();
  };

  useEffect(() => {
    if (userInputRef.current) {
      userInputRef?.current.focus();
    }
  }, []);

  return (
    <div className={`${isDarkModeOn ? 'dark': ''}`}>
      <div className="dark:bg-darkBody bg-body h-screen">
        <div className="flex p-2">
          <div className="flex-grow"></div>
          <button className="p-1" onClick={toggleDarkMode}>
            <img src={isDarkModeOn ? SunIcon : MoonIcon} alt="Dark or Light Mode Toggle" />
          </button>
        </div>
        <div className="flex justify-center mt-20">
          <div className="relative w-3/4">
            <div className="flex flex-col justify-center items-center">
              <img src={isDarkModeOn ? DarkKeyboardIcon : KeyboardIcon} alt='logo' />
              <Header title="Typing Master" />
            </div>
            <Paragraph
              isDarkModeOn={isDarkModeOn}
              text={paragraphText}
              userInput={userInput}
            />
            <input
              ref={userInputRef}
              className="absolute inset-0 bg-transparent border-none focus:outline-none w-full h-full text-transparent"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
    )
}

export default App;
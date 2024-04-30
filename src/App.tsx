/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import { Paragraph, Timer } from "./components";
import KeyboardIcon from './assets/icon/keyboard.svg';
import KeyboardLgIcon from './assets/icon/keyboard-lg.svg';
import DarkKeyboardIcon from './assets/icon/dark-keyboard.svg';
import DarkKeyboardLgIcon from './assets/icon/dark-keyboard-lg.svg';
import MoonIcon from './assets/icon/moon.svg';
import SunIcon from './assets/icon/sun.svg';

const paragraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident fugit repellendus facere nemo ipsam dolore aliquam totam fuga itaque excepturi minus, nesciunt error accusantium quibusdam culpa molestias incidunt quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident fugit repellendus facere nemo ipsam dolore aliquam totam fuga itaque excepturi minus, nesciunt error accusantium quibusdam culpa molestias incidunt quas!';

const App: React.FC = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(localStorage?.getItem('isDarkModeOn') === 'true');
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);

  const userInputRef = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState('');

  const toggleDarkMode = () => {
    localStorage.setItem('isDarkModeOn', String(!isDarkModeOn));
    setIsDarkModeOn(!isDarkModeOn);
    userInputRef.current?.focus();
  };

  const onTimerClose = () => {
    setShowOverlay(true);
  }

  const restartSession = () => {
    window.location.reload();
  }

  useEffect(() => {
    if (userInput.length && !hasStartedTyping) {
      setHasStartedTyping(true);
    }
  }, [userInput])

  useEffect(() => {
    if (userInputRef.current) {
      userInputRef?.current.focus();
    }
  }, []);

  return (
    <div className={`${isDarkModeOn ? 'dark': ''}`}>
      <div className="dark:bg-darkBody bg-body h-screen">
        <div className="flex p-4">
          { hasStartedTyping && <div className="flex items-center">
            <img src={isDarkModeOn ? DarkKeyboardIcon : KeyboardIcon} alt='logo' />
            <h1 className="text-xl text-center font-bold dark:text-primary mt-2.5">Typing Master</h1>
          </div>}
          <div className="flex-grow"></div>
          <button className="p-1" onClick={toggleDarkMode}>
            <img src={isDarkModeOn ? SunIcon : MoonIcon} alt="Dark or Light Mode Toggle" />
          </button>
        </div>
        <div className="flex justify-center mt-20">
          <div className="relative w-3/4">
            <div className="flex flex-col justify-center items-center">
              { hasStartedTyping ?
                  <Timer initialValue={3} finalValue={0} isTimerRunning={hasStartedTyping} onTimerClose={onTimerClose} />
                  : <div className="flex flex-col items-center">
                    <img src={isDarkModeOn ? DarkKeyboardLgIcon : KeyboardLgIcon} alt='logo' />
                    <h1 className="text-6xl text-center font-bold dark:text-primary mt-2.5">Typing Master</h1>
                  </div>
              }
            </div>
            <div className="mt-10 relative">
              {showOverlay && <div className="flex absolute w-full justify-center items-center z-10 h-5/6 top-20 backdrop-blur-sm">
                <button
                  className="bg-secondary hover:bg-hoverSecondary dark:bg-primary text-white px-8 py-4 text-2xl shadow-lg rounded-sm dark:hover:bg-hoverPrimary"
                  onClick={restartSession}
                >Practice Again</button>
              </div>}
              <Paragraph
                isDarkModeOn={isDarkModeOn}
                text={paragraphText}
                userInput={userInput}
              />
            </div>
            <input
              disabled={showOverlay}
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
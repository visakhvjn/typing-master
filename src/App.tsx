/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef, useState } from "react";
import {
  AppFooter,
  AuthLoginButton,
  AuthLogoutButton,
  Loader,
  Paragraph,
  Timer,
} from "./components";
import KeyboardIcon from "./assets/icon/keyboard.svg";
import KeyboardLgIcon from "./assets/icon/keyboard-lg.svg";
import DarkKeyboardIcon from "./assets/icon/dark-keyboard.svg";
import DarkKeyboardLgIcon from "./assets/icon/dark-keyboard-lg.svg";
import MoonIcon from "./assets/icon/moon.svg";
import SunIcon from "./assets/icon/sun.svg";
import { useAuth0 } from "@auth0/auth0-react";
import { getParagraphFromGemini } from "./services/gemini";

const App: React.FC = () => {
  const [isDarkModeOn, setIsDarkModeOn] = useState(
    localStorage?.getItem("isDarkModeOn") === "true"
  );
  const [hasStartedTyping, setHasStartedTyping] = useState(false);
  const [showOverlay, setShowOverlay] = useState(false);
  const [paragraph, setParagraph] = useState<string>("");
  const [isParagraphLoading, setIsParagraphLoading] = useState(true);
  const { isAuthenticated, user } = useAuth0();

  const userInputRef = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState("");

  const toggleDarkMode = () => {
    localStorage.setItem("isDarkModeOn", String(!isDarkModeOn));
    setIsDarkModeOn(!isDarkModeOn);
    userInputRef.current?.focus();
  };

  const onTimerClose = () => {
    setShowOverlay(true);
  };

  const restartSession = () => {
    window.location.reload();
  };

  const handleKeyDown = (event: any) => {
    if (event.key === "Tab") {
      event.preventDefault();
    }
  };

  const getParagraph = () => {
    setIsParagraphLoading(true);
    getParagraphFromGemini().then((paragraph) => {
      setParagraph(paragraph);
      setIsParagraphLoading(false);
    });
  };

  useEffect(() => {
    if (!isParagraphLoading) {
      userInputRef.current?.focus();
    }
  }, [isParagraphLoading]);

  useEffect(() => {
    if (userInput.length && !hasStartedTyping) {
      setHasStartedTyping(true);
    }
  }, [userInput]);

  useEffect(() => {
    getParagraph();
  }, []);

  return (
    <div className={`${isDarkModeOn ? "dark" : ""}`}>
      <div className="dark:bg-darkBody bg-body h-screen">
        <div className="flex px-8 py-4 items-center">
          {hasStartedTyping && (
            <div className="flex items-center">
              <img
                className=""
                src={isDarkModeOn ? DarkKeyboardIcon : KeyboardIcon}
                alt="logo"
              />
              <h1 className="text-xl text-center font-bold dark:text-primary mt-3 ml-1">
                Typing Master
              </h1>
            </div>
          )}
          <div className="flex-grow"></div>
          <div className="flex space-x-5 items-center justify-end">
            <button className="p-1" onClick={toggleDarkMode}>
              <img
                src={isDarkModeOn ? SunIcon : MoonIcon}
                alt="Dark or Light Mode Toggle"
              />
            </button>
            {!isAuthenticated && <AuthLoginButton onLogin={() => {}} />}
            {isAuthenticated && <AuthLogoutButton onLogout={() => {}} />}
            {isAuthenticated && (
              <img
                className="border-2 border-secondary dark:border-primary rounded-full object-cover h-10"
                src={user?.picture}
                alt="User Profile"
              />
            )}
          </div>
        </div>
        <div className="flex justify-center mt-20">
          <div className="relative w-3/4">
            <div className="flex flex-col justify-center items-center">
              {hasStartedTyping ? (
                <Timer
                  initialValue={60}
                  finalValue={0}
                  isTimerRunning={hasStartedTyping}
                  onTimerClose={onTimerClose}
                />
              ) : (
                <div className="flex flex-col items-center">
                  <img
                    src={isDarkModeOn ? DarkKeyboardLgIcon : KeyboardLgIcon}
                    alt="logo"
                  />
                  <h1 className="text-6xl text-center font-bold dark:text-primary mt-2.5">
                    Typing Master
                  </h1>
                </div>
              )}
            </div>
            <div className="mt-10 relative">
              {showOverlay && (
                <div className="flex absolute w-full justify-center items-center z-10 h-5/6 top-20 backdrop-blur-sm">
                  <button
                    className="bg-secondary hover:bg-hoverSecondary dark:bg-primary text-white px-8 py-4 text-2xl shadow-lg rounded-sm dark:hover:bg-hoverPrimary"
                    onClick={restartSession}
                  >
                    Practice Again
                  </button>
                </div>
              )}
              {!isParagraphLoading && (
                <Paragraph
                  isDarkModeOn={isDarkModeOn}
                  text={paragraph}
                  userInput={userInput}
                />
              )}
              {isParagraphLoading && <Loader />}
            </div>
            <input
              onKeyDown={handleKeyDown}
              disabled={showOverlay || isParagraphLoading}
              ref={userInputRef}
              className="absolute inset-0 bg-transparent border-none focus:outline-none w-full h-full text-transparent"
              value={userInput}
              onChange={(e) => setUserInput(e.target.value)}
            />
          </div>
        </div>
        <AppFooter />
      </div>
    </div>
  );
};

export default App;

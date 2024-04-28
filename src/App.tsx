import React, { useEffect, useRef, useState } from "react";
import { Header, Paragraph } from "./components";
import KeyboardIcon from './assets/icon/keyboard.svg';

const paragraphText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident fugit repellendus facere nemo ipsam dolore aliquam totam fuga itaque excepturi minus, nesciunt error accusantium quibusdam culpa molestias incidunt quas! Lorem ipsum dolor sit amet consectetur adipisicing elit. At provident fugit repellendus facere nemo ipsam dolore aliquam totam fuga itaque excepturi minus, nesciunt error accusantium quibusdam culpa molestias incidunt quas!';

const App: React.FC = () => {
  const userInputRef = useRef<HTMLInputElement>(null);
  const [userInput, setUserInput] = useState('');

  useEffect(() => {
    if (userInputRef.current) {
      userInputRef?.current.focus();
    }
  }, []);

  return (
    <div className="flex justify-center h-screen bg-black">
      <div className="bg-black relative w-3/4 mt-40">
        <div className="flex flex-col justify-center items-center">
          <img src={KeyboardIcon} alt='logo' />
          <Header title="Typing Master" />
        </div>
        <Paragraph text={paragraphText} userInput={userInput} />
        <input
          ref={userInputRef}
          className="absolute inset-0 bg-transparent border-none focus:outline-none w-full h-full text-transparent"
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
        />
      </div>
    </div>
    )
}

export default App;
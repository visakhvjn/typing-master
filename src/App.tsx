import React, { useEffect, useRef, useState } from "react";
import { Paragraph } from "./components";

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
    <div className="flex items-center justify-center h-screen bg-black">
      <div className="bg-black relative w-3/4">
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
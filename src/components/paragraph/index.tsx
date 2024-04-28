/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Score from "../score";

interface ParagraphProps {
  text: string;
  userInput: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, userInput }) => {

  const [matchingIndices, setMatchingIndices] = useState<number[]>([]);
  const [currentCursorIndex, setCurrentCursorIndex] = useState(0);

  const findMatchingIndices = () => {
    const textLetters = text.split('');
    const userInputLetters = userInput.split('');

    const _matchingIndices: number[] = [];

    userInputLetters.map((userInputLetter, index) => {
      if (userInputLetter === textLetters[index]) {
        _matchingIndices.push(index);
      }
    });

    setMatchingIndices(_matchingIndices);
  }

  const isCurrentCursorIndex = (index: number) => {
    return index === currentCursorIndex ? 'blinking-cursor' : '';
  }

  const isMatchingIndex = (index: number) => {
    return matchingIndices.includes(index) ? 'text-red-600': 'text-white';
  }

  useEffect(() => {
    if (userInput) {
      setCurrentCursorIndex(userInput.length);
      findMatchingIndices();
    }
  }, [userInput]);

  return (
    <>
      <Score matchCount={matchingIndices.length} mismatchCount={userInput.length - matchingIndices.length} />
      <br />
      <p className="text-3xl text-center tracking-wide">
        {
          text.split('').map((letter, index) => (
            <span className={`${isCurrentCursorIndex(index)} ${isMatchingIndex(index)}`}>
              {letter}
            </span>
          ))
        }
      </p>
    </>
  );
}

export default Paragraph;
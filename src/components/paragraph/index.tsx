/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useState } from "react";
import Score from "../score";

interface ParagraphProps {
  text: string;
  userInput: string;
}

const Paragraph: React.FC<ParagraphProps> = ({ text, userInput }) => {

  const [matchingIndices, setMatchingIndices] = useState<number[]>([]);

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

  useEffect(() => {
    if (userInput) {
      findMatchingIndices();
    }
  }, [userInput]);

  return (
    <>
      <Score matchCount={matchingIndices.length} mismatchCount={userInput.length - matchingIndices.length} />
      <br />
      <p className="text-2xl text-center">
        {
          text.split('').map((letter, index) => {
            return <span className={matchingIndices.includes(index) ? 'text-red-600': 'text-white'}>{letter}</span>
          })
        }
      </p>
    </>
  );
}

export default Paragraph;
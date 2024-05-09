/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect, useMemo, useState } from "react";
import Score from "../score";

interface ParagraphProps {
  text: string;
  userInput: string;
  isDarkModeOn: boolean;
}

const Paragraph: React.FC<ParagraphProps> = ({
  text,
  userInput,
  isDarkModeOn = false,
}) => {
  const [matchingIndices, setMatchingIndices] = useState<number[]>([]);
  const [accuracy, setAccuracy] = useState(0);
  const [currentCursorIndex, setCurrentCursorIndex] = useState(0);
  const [wordsPerMinute, setWordsPerMinute] = useState(0);

  const letters = useMemo(() => {
    return text.split("");
  }, [text]);

  const findMatchingIndices = () => {
    const textLetters = text.split("");
    const userInputLetters = userInput.split("");

    const _matchingIndices: number[] = [];

    userInputLetters.forEach((userInputLetter, index) => {
      if (userInputLetter === textLetters[index]) {
        _matchingIndices.push(index);
      }
    });

    setAccuracy((_matchingIndices.length / userInput.length) * 100);
    setMatchingIndices(_matchingIndices);
  };

  const isCurrentCursorIndex = (index: number) => {
    return index === currentCursorIndex
      ? isDarkModeOn
        ? "dark-blinking-cursor"
        : "blinking-cursor"
      : "";
  };

  const isMatchingIndex = (index: number) => {
    return matchingIndices.includes(index)
      ? isDarkModeOn
        ? "text-primary"
        : "text-black"
      : "text-secondary";
  };

  useEffect(() => {
    let maskedLetters = "";
    let matchedWordCount = 0;

    for (let i = 0; i < userInput.length; i++) {
      if (letters[i] === " ") {
        maskedLetters += "_";
      } else {
        if (matchingIndices.includes(i)) {
          maskedLetters += "1";
        } else {
          maskedLetters += "0";
        }
      }
    }

    const maskedWords = maskedLetters.split("_");

    maskedWords.forEach((maskedWord) => {
      if (!maskedWord.includes("0") && maskedWord !== "") {
        matchedWordCount++;
      }
    });

    setWordsPerMinute(matchedWordCount);
  }, [matchingIndices.length]);

  useEffect(() => {
    setCurrentCursorIndex(userInput.length);
    findMatchingIndices();
  }, [userInput]);

  return (
    <>
      {userInput.length !== 0 && (
        <Score
          matchCount={matchingIndices.length}
          mismatchCount={userInput.length - matchingIndices.length}
          accuracy={accuracy}
          wordsPerMinute={wordsPerMinute}
        />
      )}
      <br />
      <p className="text-3xl text-center tracking-wide">
        {text.split("").map((letter, index) => (
          <span
            key={index}
            className={`${isCurrentCursorIndex(index)} ${isMatchingIndex(
              index
            )}`}
          >
            {letter}
          </span>
        ))}
      </p>
    </>
  );
};

export default Paragraph;

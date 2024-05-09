import React from "react";

interface ScoreProps {
  matchCount: number;
  mismatchCount: number;
  accuracy: number;
  wordsPerMinute: number;
}

const Score: React.FC<ScoreProps> = ({
  matchCount,
  mismatchCount,
  accuracy,
  wordsPerMinute,
}) => {
  return (
    <div className="flex justify-center py-3">
      <h2 className="text-2xl text-secondary mr-10">Correct = {matchCount}</h2>
      <h2 className="text-2xl text-secondary mr-10">
        Mistakes = {mismatchCount}
      </h2>
      <h2 className="text-2xl text-secondary mr-10">
        Accuracy = {accuracy.toFixed(0)}%
      </h2>
      <h2 className="text-2xl text-secondary mr-10">WPM = {wordsPerMinute}</h2>
      <hr />
    </div>
  );
};

export default Score;

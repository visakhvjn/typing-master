import React from "react";

interface ScoreProps {
  matchCount: number;
  mismatchCount: number; 
}

const Score: React.FC<ScoreProps> = ({ matchCount, mismatchCount }) => {
  return (
    <div className="flex justify-center">
      <h2 className="text-2xl text-green-500">Correct: {matchCount} |&nbsp;</h2>
      <h2 className="text-2xl text-red-500">Wrong: {mismatchCount} |&nbsp;</h2>
      <h2 className="text-2xl text-red-500">Accuracy: {mismatchCount} |&nbsp;</h2>
      <h2 className="text-2xl text-red-500">WPM: {mismatchCount}</h2>
    </div>
  )
}

export default Score;
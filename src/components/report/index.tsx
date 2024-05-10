import React from "react";
import { useReportContext } from "../../context/report.context";

export type ReportProps = {
  isOpen: boolean;
};

const Reports: React.FC<ReportProps> = ({ isOpen }) => {
  const { reports } = useReportContext();

  return (
    <div className="flex flex-col justify-center p-4 text-center items-center mt-20">
      <table className="w-2/3 text-black dark:text-white">
        <thead className="text-black dark:text-primary border-b-2 border-secondary">
          <tr>
            <th className="text-left px-8 py-4">Name</th>
            <th className="text-center px-8 py-4">Correct</th>
            <th className="text-center px-8 py-4">Mistakes</th>
            <th className="text-center px-8 py-4">Accuracy %</th>
            <th className="text-center px-8 py-4">WPM</th>
            <th className="text-left px-8 py-4">Date</th>
          </tr>
        </thead>
        <tbody>
          {reports.map((report) => (
            <tr>
              <td className="px-8 py-4 text-left">{report.name}</td>
              <td className="px-8 py-4 text-center">{report.correct}</td>
              <td className="px-8 py-4 text-center">{report.mistakes}</td>
              <td className="px-8 py-4 text-center">{report.accuracy}</td>
              <td className="px-8 py-4 text-center">{report.wpm}</td>
              <td className="px-8 py-4 text-left">{report.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Reports;

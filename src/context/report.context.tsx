import { createContext, useContext, useState } from "react";
import { Report } from "../types";
import moment from "moment";

export type ReportContextProps = {
  reports: Report[];
  addReport: (report: Report) => void;
};

const ReportContext = createContext<ReportContextProps>(
  {} as ReportContextProps
);

export const useReportContext = (): ReportContextProps =>
  useContext(ReportContext);

const ReportProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [reports, setReports] = useState<Report[]>([
    {
      name: "Anonymous",
      correct: 67,
      mistakes: 25,
      accuracy: 58,
      wpm: 67,
      date: moment().format("DD-MMM-YYYY hh:mm A"),
    },
  ]);

  const addReport = (report: Report) => {
    setReports((prevReports) => [report, ...prevReports]);
  };

  return (
    <ReportContext.Provider value={{ reports, addReport }}>
      {children}
    </ReportContext.Provider>
  );
};

export default ReportProvider;

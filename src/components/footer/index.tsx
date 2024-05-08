import React, { PropsWithChildren } from "react";

const Footer: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <footer className="flex fixed bottom-0 w-full text-center items-center text-white justify-center p-2">
      {children}
    </footer>
  );
};

export default Footer;

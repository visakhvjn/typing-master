import React, { PropsWithChildren } from "react";
import { BuyMeACoffee, Footer } from "../index";

type AppFooterProps = {
  isDarkModeOn: boolean;
};

const AppFooter: React.FC<PropsWithChildren<AppFooterProps>> = ({
  children,
  isDarkModeOn,
}) => {
  return (
    <Footer>
      <div className="flex space-x-1">
        <a
          href="https://github.com/visakhvjn/typing-master"
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-secondary dark:text-primary"
        >
          <span>Github</span>
        </a>
        <span className="text-secondary dark:text-primary">&nbsp;|&nbsp;</span>
        <a
          href="https://www.linkedin.com/in/vjnvisakh"
          target="_blank"
          rel="noreferrer"
          className="hover:underline text-secondary dark:text-primary"
        >
          <span>LinkedIn</span>
        </a>
      </div>
      <div className="absolute right-0 bottom-0 p-4">
        <BuyMeACoffee isDarkModeOn={isDarkModeOn} />
      </div>
    </Footer>
  );
};

export default AppFooter;

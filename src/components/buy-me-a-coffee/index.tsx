import React from "react";
import CoffeeCupIcon from "../../assets/icon/coffee-cup.svg";
import CoffeeCupDarkIcon from "../../assets/icon/coffee-cup-dark.svg";

type BuyMeACoffeeProps = {
  isDarkModeOn: boolean;
};

const BuyMeACoffee: React.FC<BuyMeACoffeeProps> = ({ isDarkModeOn }) => {
  return (
    <div className="bg-white rounded-full p-2 cursor-pointer shadow-lg dark:bg-primary hover:animate-bounce border dark:border-primary">
      <a href="https://buymeacoffee.com/vjnvisakh" target="blank">
        <img
          src={isDarkModeOn ? CoffeeCupDarkIcon : CoffeeCupIcon}
          alt="Coffee Cup"
        />
      </a>
    </div>
  );
};

export default BuyMeACoffee;

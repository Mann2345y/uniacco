import React from "react";
import * as Styles from "../styles/filters";

const Filters = () => {
  const leftblockoptions = ["Dates", "Group Size", "More Filters"];
  const rightblockoptions = [
    "Great for groups",
    "family-friendly",
    "Animals",
    "Arts & Writing",
    "Baking",
    "Cooking",
    "Dance",
    "Drinks",
    "Entertainment",
    "Fitness",
    "History & Culture",
    "Magic",
    "Music",
    "Social Impact",
    "Wellness",
  ];
  return (
    <Styles.Wrapper>
      <Styles.Leftblock>
        {leftblockoptions.map((item) => (
          <div>
            <h4>{item}</h4>
          </div>
        ))}
      </Styles.Leftblock>
      <Styles.Seperator />
      <Styles.Rightblock>
        {rightblockoptions.map((item) => (
          <div>
            <h4>{item}</h4>
          </div>
        ))}
      </Styles.Rightblock>
    </Styles.Wrapper>
  );
};

export default Filters;

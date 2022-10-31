import React from "react";
import * as Styles from "../styles/filters";
import FilterButton from "./FilterButton";

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
          <FilterButton left={true}>
            <h4>{item}</h4>
          </FilterButton>
        ))}
      </Styles.Leftblock>
      <Styles.Seperator />
      <Styles.Rightblock>
        {rightblockoptions.map((item) => (
          <FilterButton>
            <h4>{item}</h4>
          </FilterButton>
        ))}
      </Styles.Rightblock>
    </Styles.Wrapper>
  );
};

export default Filters;

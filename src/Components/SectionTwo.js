import React from "react";
import * as Styles from "../styles/sectionTwo";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { cardData } from "./cardData";

const SectionTwo = () => {
  const scrollToRight = () => {
    document.getElementById("content").scrollLeft =
      document.getElementById("content").scrollWidth;
  };
  const scrollToLeft = () => {
    document.getElementById("content").scrollLeft = 0;
  };
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <h3>Plan a trip with help from local Hosts around the world</h3>
        <Styles.Headerbuttons>
          <div onClick={scrollToLeft}>
            <FaLessThan size={14} />
          </div>
          <div onClick={scrollToRight}>
            <FaGreaterThan size={14} />
          </div>
        </Styles.Headerbuttons>
      </Styles.Header>
      <Styles.Content id="content">
        {cardData.map((item) => (
          <Styles.CardWrapper>
            <Styles.CardImage img={item.image} />
            <h5>
              &#9733; {item.stars}
              <span>
                ({item.totalRatings}) . {item.location}
              </span>
            </h5>
            <h3>{item.title}</h3>
            <h4>
              From &#8377;{item.price}
              <span>/person</span>
            </h4>
          </Styles.CardWrapper>
        ))}
      </Styles.Content>
    </Styles.Wrapper>
  );
};

export default SectionTwo;

import React from "react";
import * as Styles from "../styles/sectionTwo";
import { FaLessThan, FaGreaterThan } from "react-icons/fa";
import { cardData } from "./cardData";

const SectionTwo = () => {
  return (
    <Styles.Wrapper>
      <Styles.Header>
        <h3>Plan a trip with help from local Hosts around the world</h3>
        <Styles.Headerbuttons>
          <div>
            <FaLessThan size={14} />
          </div>
          <div>
            <FaGreaterThan size={14} />
          </div>
        </Styles.Headerbuttons>
      </Styles.Header>
      <Styles.Content>
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

import React from "react";
import * as Styles from "../styles/header";

const Header = () => {
  return (
    <Styles.Wrapper>
      <h1>News This Week</h1>
      <Styles.CardsBlock>
        <Styles.Cardone>
          <div>
            <h6>COLLECTION</h6>
            <h3>Most Popular Around The World</h3>
          </div>
          <Styles.Cardbutton>
            <h5>Show Me</h5>
          </Styles.Cardbutton>
        </Styles.Cardone>
        <Styles.Cardtwo>
          <div>
            <h6>COLLECTION</h6>
            <h3>Great for Team Building</h3>
          </div>
          <Styles.Cardbutton>
            <h5>Show Me</h5>
          </Styles.Cardbutton>
        </Styles.Cardtwo>
        <Styles.Cardthree>
          <div>
            <h6>COLLECTION</h6>
            <h3>Fun for The Family</h3>
          </div>
          <Styles.Cardbutton>
            <h5>Show Me</h5>
          </Styles.Cardbutton>
        </Styles.Cardthree>
      </Styles.CardsBlock>
    </Styles.Wrapper>
  );
};

export default Header;

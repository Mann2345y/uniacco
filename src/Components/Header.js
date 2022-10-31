import React, { useState } from "react";
import * as Styles from "../styles/header";
import { AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const Header = () => {
  const cardImages = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
  const [pos, setPos] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => onLeft(),
    onSwipedRight: () => onRight(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const onRight = () => {
    if (pos < cardImages.length - 1) {
      setPos(pos + 1);
    }
  };
  const onLeft = () => {
    if (pos > 0) {
      setPos(pos - 1);
    }
  };
  return (
    <Styles.Wrapper>
      <h1>News This Week</h1>
      <Styles.CardsBlock {...handlers}>
        {cardImages.map((item, index) => (
          <Styles.CardWrapper
            key={index}
            left={(index - pos) * 550}
            img={item}
          ></Styles.CardWrapper>
        ))}
      </Styles.CardsBlock>
      <button onClick={onLeft}>
        <h2>Prev</h2>
      </button>
      <button onClick={onRight}>
        <h2>Next</h2>
      </button>
    </Styles.Wrapper>
  );
};

export default Header;

{
  /* <div>
                  <h6>COLLECTION</h6>
                  <h3>Fun for The Family</h3>
                </div>
                <Styles.Cardbutton>
                  <h5>Show Me</h5>
                </Styles.Cardbutton> */
}

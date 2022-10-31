import React, { useState } from "react";
import * as Styles from "../styles/header";
import { AnimatePresence } from "framer-motion";
import { useSwipeable } from "react-swipeable";

const Header = () => {
  const cardImages = ["banner1.jpg", "banner2.jpg", "banner3.jpg"];
  const dummy = new Array(5).fill(0);
  const [pos, setPos] = useState(0);
  const handlers = useSwipeable({
    onSwipedLeft: () => onRight(),
    onSwipedRight: () => onLeft(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true,
  });
  const onRight = () => {
    if (pos < cardImages.length - 1 && window.innerWidth < 986) {
      setPos(pos + 1);
    }
  };
  const onLeft = () => {
    if (pos > 0 && window.innerWidth < 986) {
      setPos(pos - 1);
    }
  };
  return (
    <Styles.Wrapper>
      <h1>News This Week</h1>
      <Styles.CardsBlock {...handlers}>
        {cardImages.map((item, index) => (
          <Styles.CardWrapper key={index} left={(index - pos) * 82} img={item}>
            <div>
              <h6>COLLECTION</h6>
              <h3>Fun for The Family</h3>
            </div>
            <Styles.Cardbutton>
              <h5>Show Me</h5>
            </Styles.Cardbutton>
          </Styles.CardWrapper>
        ))}
      </Styles.CardsBlock>
    </Styles.Wrapper>
  );
};

export default Header;

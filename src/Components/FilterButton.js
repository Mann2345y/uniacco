import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  height: 35px;
  min-width: fit-content;
  padding: 0 25px;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 15px;
  transition: all 0.2s ease-in;
  transform: ${(props) => (props.clicked ? "scale(0.9)" : "scale(1)")};
  border: ${(props) =>
    props.left ? "1px solid #505050" : "1px solid var(--border)"};
  background: ${(props) =>
    props.left ? "background: var(--bg)" : "var(--border)"};
`;

const FilterButton = ({ left, children }) => {
  const [clicked, setClicked] = useState(false);
  const buttonClickHandler = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 200);
  };
  return (
    <Wrapper left={left} clicked={clicked} onClick={buttonClickHandler}>
      {children}
    </Wrapper>
  );
};

export default FilterButton;

import styled from "styled-components";
import { motion } from "framer-motion";
import { Keyframes } from "styled-components";

export const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  padding: 0 var(--paddingValue);
  h1 {
    margin-top: 25px;
    font-weight: 600;
  }
`;
export const CardsBlock = styled.div`
  height: 400px;
  width: 100%;
  position: relative;
  overflow: hidden;
`;
export const CardWrapper = styled.div`
  height: 400px;
  min-width: 500px;
  margin: 0 25px;
  position: absolute;
  left: ${(props) => props.left}px;
  border-radius: 25px;
  padding: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center center;
  transition: all 0.2s ease-in;
  > div h3 {
    font-weight: 700;
  }
  @media (max-width: 986px) {
    min-width: 80%;
  }
`;
export const Cardone = styled(CardWrapper)`
  background: url("./banner1.jpg");
`;
export const Cardtwo = styled(CardWrapper)`
  background: url("./banner2.jpg");
  background-size: cover;
  background-position: center center;
`;
export const Cardthree = styled(CardWrapper)`
  background: url("./banner3.jpg");
  background-size: cover;
  background-position: center center;
`;
export const Cardbutton = styled.div`
  height: fit-content;
  width: fit-content;
  padding: 10px 20px;
  background: var(--border);
  cursor: pointer;
  color: black;
  border-radius: 10px;
  h5 {
    font-weight: 600;
  }
`;

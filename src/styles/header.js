import styled from "styled-components";

export const Wrapper = styled.div`
  height: 450px;
  width: 100%;
  padding: 0 var(--paddingValue);
  h1 {
    margin-top: 25px;
    font-weight: 600;
  }
`;
export const CardsBlock = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
`;
export const CardWrapper = styled.div`
  height: 320px;
  min-width: 600px;
  margin: 0 25px;
  border-radius: 25px;
  padding: 25px;
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  > div h3 {
    font-weight: 700;
  }
`;
export const Cardone = styled(CardWrapper)`
  background: url("./banner1.jpg");
  background-size: 100% auto;
`;
export const Cardtwo = styled(CardWrapper)`
  background: url("./banner2.jpg");
  background-size: 100% auto;
`;
export const Cardthree = styled(CardWrapper)`
  background: url("./banner3.jpg");
  background-size: 100% auto;
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

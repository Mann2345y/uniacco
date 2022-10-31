import styled from "styled-components";

export const Wrapper = styled.div`
  height: 600px;
  width: 100%;
  padding: 0 var(--paddingValue);
  margin-top: 25px;
`;
export const Header = styled.div`
  height: 60px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h3 {
    font-weight: 600;
  }
`;
export const Headerbuttons = styled.div`
  height: 50px;
  width: 100px;
  display: flex;
  justify-content: space-between;
  > div {
    height: 40px;
    width: 40px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid var(--border);
    cursor: pointer;
  }
`;
export const Content = styled.div`
  height: 500px;
  width: 100%;
  margin-top: 25px;
  display: flex;
  overflow-x: scroll;
  &::-webkit-scrollbar {
    display: none;
  }
  scroll-behavior: smooth;
  transition: all 0.2s ease-in;
`;
export const CardWrapper = styled.div`
  height: fit-content;
  min-width: 250px;
  margin-right: 25px;
  cursor: pointer;
  h5 {
    margin: 5px 0;
    span {
      margin-left: 5px;
      color: #707070;
    }
  }
  h3 {
    font-weight: 600;
    color: #404040;
    font-size: 1em;
    margin: 10px 0;
  }
  h4 {
    font-weight: 600;
    span {
      font-weight: 400;
      font-size: 0.9em;
      color: #707070;
    }
  }
`;
export const CardImage = styled.div`
  height: 350px;
  width: 100%;
  background: url(${(props) => props.img});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  border-radius: 10px;
`;

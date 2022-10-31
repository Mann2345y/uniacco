import styled from "styled-components/macro";

export const Wrapper = styled.div`
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid var(--border);
  padding: 0 var(--paddingValue);
`;
export const Logo = styled.div`
  width: fit-content;
  height: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  h3 {
    color: #ff5a5f;
    font-weight: 700;
  }
`;
export const UsermenuWrapper = styled.div`
  height: 50px;
  width: 100px;
  position: relative;
`;
export const UsermenuHeader = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 5px;
  border: 1px solid var(--border);
  border-radius: 25px;
  transition: all 0.2s ease-in;
  cursor: pointer;
  &:hover {
    box-shadow: 0 10px 10px -6px var(--shadow);
  }
`;
export const HamMenu = styled.div`
  height: 12px;
  width: 15px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-right: 10px;
  > div {
    height: 2px;
    width: 100%;
    background: #707070;
    transform-origin: 0.5px;
    transition: all 0.2s ease-in;
  }
`;
export const UsermenuContent = styled.div`
  height: fit-content;
  width: 350px;
  border-radius: 15px;
  padding: 15px 0;
  position: absolute;
  right: 0;
  top: 55px;
  background: var(--bg);
  transition: all 0.2s ease-in;
  transform-origin: top right;
  transform: ${(props) => (props.open ? "scale(1)" : "scale(0)")};
  border: 1px solid var(--border);
  z-index: 5;
  > div {
    width: 100%;
  }
  @media (max-width: 425px) {
    width: 250px;
  }
`;
export const Menuitems = styled.div`
  height: 50px;
  width: 100%;
  padding-left: 25px;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s ease-in;
  &:hover {
    background: var(--hoverbg);
  }
`;
export const Seperator = styled.div`
  height: 1px;
  width: 100px;
  background: var(--border);
`;

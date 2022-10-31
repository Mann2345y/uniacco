import styled from "styled-components/macro";

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 var(--paddingValue);
  display: flex;
  align-items: center;
  > div {
    display: flex;
  }
  @media (max-width: 968px) {
    overflow-x: scroll;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`;
export const Leftblock = styled.div`
  height: fit-content;
  width: 430px;
  @media (max-width: 968px) {
    min-width: 430px;
  }
`;
export const Rightblock = styled.div`
  height: fit-content;
  width: calc(100% - 430px);
  overflow: scroll;
  margin-left: 15px;
  &::-webkit-scrollbar {
    display: none;
  }
  @media (max-width: 968px) {
    min-width: 450px;
  }
`;
export const Seperator = styled.div`
  height: 50px;
  width: 2px;
  background: var(--border);
  @media (max-width: 968px) {
    min-width: 2px;
  }
`;

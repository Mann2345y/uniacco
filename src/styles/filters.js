import styled from "styled-components/macro";

export const Wrapper = styled.div`
  height: 100px;
  width: 100%;
  padding: 0 var(--paddingValue);
  display: flex;
  align-items: center;
  > div {
    display: flex;
    > div {
      height: 35px;
      min-width: fit-content;
      padding: 0 25px;
      border-radius: 25px;
      cursor: pointer;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: 15px;
    }
  }
`;
export const Leftblock = styled.div`
  height: fit-content;
  width: 430px;
  > div {
    border: 1px solid #505050;
    background: var(--bg);
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
  > div {
    border: 1px solid var(--border);
    background: var(--border);
  }
`;
export const Seperator = styled.div`
  height: 50px;
  width: 2px;
  background: var(--border);
`;

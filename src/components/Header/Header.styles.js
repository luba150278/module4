import styled from "styled-components";

export const Wrap = styled.div`
  display: grid;
  grid-template-columns: 1fr 60px;
  gap: 20px;
  align-items: center;
  height: 40px;
  
`;
export const Menu = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
  /* font-size: ${props => props.size};
  background: ${props => props.color || "blue"}; */
`;
export const Switch = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;
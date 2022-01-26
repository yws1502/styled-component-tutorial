import styled from "styled-components";

export const Button = styled.button`
  border-radius: 50px;
  border: none;
  box-shadow: 0 0 10px rgba(0,0,0,0.15);
  cursor: pointer;
  font-size: 16px;
  font-weight: 700;
  padding: 15px 60px;
  background-color: ${({ bg }) => bg || "#FFF"};
  color: ${({ color }) => color || "#333"};

  &:hover {
    opacity: 0.7;
    transform: scale(0.98);
  }
`
import styled from 'styled-components';

export const Button = styled.button`
  position: absolute;
  padding: 12px 24px;
  box-shadow: 0 10px 20px -5px rgba(47, 0, 121, 0.3);
  border: 0px;
  border-radius: 24px;
  background-color: #2f0079;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  color: #fff;

  &:hover,
  &:active {
    cursor: pointer;
  }

  &:active {
    background-color: #200054;
  }
`;

export default Button;

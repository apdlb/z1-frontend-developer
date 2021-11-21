import styled from 'styled-components';
import Main from '../../Layout/Main';

export const Container = styled(Main)``;

export const Title = styled.span`
  margin: 0px 45px 16px 48px;
  font-weight: bold;
  font-size: 21px;
  cursor: pointer;
`;

export const Subtitle = styled.span`
  margin: 0px 30px 27px 31px;
  text-align: center;
`;

export const Card = styled.div`
  margin: 0px 57px 0px 58px;
  height: 160px;
  width: 260px;
  border-radius: 12px;
  background-color: #ffffff;
  box-shadow: 0 10px 20px -6px rgba(0, 0, 0, 0.15);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const PreviewImage = styled.img`
  margin: 18px 25px 18px 18px;
  height: 124px;
  width: 217px;
`;

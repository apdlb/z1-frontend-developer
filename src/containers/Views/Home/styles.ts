import styled from 'styled-components';

export const Container = styled.div``;

export const Header = styled.div`
  padding: 20px 18px;
  border-bottom: 1px solid rgba(47, 0, 121, 0.1);
`;

export const Title = styled.span`
  font-weight: bold;
  font-size: 21px;
`;
export const HeaderTitle = styled(Title)`
  font-style: italic;
  color: #2f0079;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 33px;
`;

export const ContentTitle = styled(Title)`
  margin: 0px 45px 16px 48px;
`;

export const ContentSubtitle = styled.span`
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

export const Image = styled.img`
  margin: 18px 25px 18px 18px;
  height: 124px;
  width: 217px;
`;

export const Button = styled.button`
  height: 48px;
  width: 160px;
  box-shadow: 0 10px 20px -5px rgba(47, 0, 121, 0.3);
  border-radius: 24px;
  background-color: #2f0079;
  border: 0px;
  position: absolute;
  &:hover,
  &:active {
    cursor: pointer;
  }
  &:active {
    background-color: #200054;
  }
`;

export const ButtonText = styled.span`
  height: 24px;
  width: 120px;
  color: #ffffff;
  font-weight: bold;
  letter-spacing: 0.35px;
  line-height: 24px;
`;

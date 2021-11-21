import styled from 'styled-components';
import { OutcomeEnum } from '../../../model/evaluation';

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

export const PreviewImage = styled.img`
  margin: 18px 25px 18px 18px;
  height: 124px;
  width: 217px;
`;

export const PictureButton = styled.button`
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

export const Document = styled.div`
  margin: 0px 57px 0px 58px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const DocumentImage = styled.img`
  height: 160px;
  width: 260px;
  border-radius: 12px;
  border: ${(props: { status: OutcomeEnum }) =>
    props.status === OutcomeEnum.SUCCESS
      ? '2px solid #69CC8B'
      : '2px solid #C00000'};
`;

export const DocumentStatus = styled.div`
  display: flex;
  align-items: center;
  align-self: flex-end;
  position: relative;
  top: -15px;
  right: 24px;
  width: 105px;
  height: 30px;
  border-radius: 4px;
  color: #fff;
  background-color: ${(props: { status: OutcomeEnum }) =>
    props.status === OutcomeEnum.SUCCESS ? '#69cc8b' : '#C00000'};

  & span {
    font-size: 12px;
    font-weight: bold;
    letter-spacing: 0.75px;
    line-height: 12px;
    text-transform: uppercase;
  }
`;

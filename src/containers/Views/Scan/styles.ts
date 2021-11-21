import Webcam from 'react-webcam';
import styled from 'styled-components';
import ScanBackground from '../../../assets/scan_background.jpg';
import { OutcomeEnum } from '../../../model/evaluation';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;

  &::before {
    content: '';
    position: fixed;
    width: 100%;
    height: 100%;
    z-index: -1;
    background: url(${ScanBackground});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    filter: blur(3px) grayscale(65%) contrast(30%);
  }
`;

export const Background = styled.div`
  position: fixed;
  background: url(${ScanBackground});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  filter: blur(3px) grayscale(65%) contrast(30%);
  width: 100%;
  height: 100%;
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Title = styled.span`
  margin: 100px 46px 16px 47px;
  font-weight: bold;
  font-size: 21px;
  color: #fff;
`;

export const Subtitle = styled.span`
  margin: 0px 30px 59.91px 31px;
  text-align: center;
  color: #fff;
`;

export const Card = styled.div`
  margin: 0px 57px 16px 58px;
  height: 179px;
  width: 289px;
  text-align: center;
`;

export const Camera = styled(Webcam)((props: { outcome?: OutcomeEnum }) => {
  const { outcome } = props;
  let outline = 'none';
  if (outcome) {
    outline = '2px solid';
    if (outcome === OutcomeEnum.SUCCESS) {
      outline += ' #69CC8B';
    } else if (outcome === OutcomeEnum.ERROR) {
      outline += ' #C00000';
    }
  }
  return { 'object-fit': 'cover', 'border-radius': '18px', outline };
});

export const CameraInfo = styled.div`
  margin-bottom: 126px;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 16px;
`;

export const Button = styled.button`
  margin-bottom: 45px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  color: #fff;
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
`;

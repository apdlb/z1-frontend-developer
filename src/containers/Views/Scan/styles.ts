import Webcam from 'react-webcam';
import styled from 'styled-components';
import ScanBackground from '../../../assets/scan_background.jpg';

export const Container = styled.div`
  display: flex;
  justify-content: center;

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
  padding-top: 33px;
`;

export const Text = styled.span`
  color: #fff;
`;

export const Title = styled(Text)`
  margin: 100px 46px 16px 47px;
  font-weight: bold;
  font-size: 21px;
`;

export const Subtitle = styled(Text)`
  margin: 0px 30px 59.91px 31px;
  text-align: center;
`;

export const Card = styled.div`
  margin: 0px 57px 18px 58px;
  height: 179px;
  width: 289px;
  text-align: center;
`;

export const Camera = styled(Webcam)`
  object-fit: cover;
  border-radius: 18px;
  outline: ${(props: { error: boolean }) =>
    props.error ? '2px solid #C00000' : ''};
`;

export const CameraInfo = styled.div`
  margin-bottom: 124px;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Button = styled.button`
  margin-bottom: 48px;
  background: none;
  color: #fff;
  border: none;
  padding: 0;
  font: inherit;
  cursor: pointer;
  outline: inherit;
  font-weight: bold;
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
`;

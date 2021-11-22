import styled from 'styled-components';
import ScanBackground from '../../../assets/scan_background.jpg';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
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
    top: 0px;
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
  margin: 0px 30px 56px 31px;
  text-align: center;
  color: #fff;
  white-space: break-spaces;
`;

export const Button = styled.button`
  margin-bottom: 44px;
  font-size: 16px;
  font-weight: bold;
  line-height: 24px;
  letter-spacing: 0.35px;
  text-transform: uppercase;
  color: #fff;
`;

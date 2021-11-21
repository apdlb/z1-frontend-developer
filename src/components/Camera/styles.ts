import Webcam from 'react-webcam';
import styled from 'styled-components';
import { CameraStatusEnum, IStyledContainerProps } from './types';

export const Container = styled.div((props: IStyledContainerProps) => {
  const { status } = props;
  let border = '2px solid';
  if (status) {
    if (status === CameraStatusEnum.OK) {
      border += ' #69CC8B';
    } else if (status === CameraStatusEnum.KO) {
      border += ' #C00000';
    }
  } else {
    border += ' transparent';
  }
  return {
    margin: '0px 57px 16px 58px',
    height: '179px',
    width: '289px',
    'text-align': 'center',
    'border-radius': '18px',
    border,
  };
});

export const WebcamCamera = styled(Webcam)`
  object-fit: cover;
  border-radius: 18px;
`;

export const WebcamInfo = styled.div`
  margin-bottom: 126px;
  min-height: 30px;
  display: flex;
  flex-direction: row;
  align-items: center;
  line-height: 16px;
`;

export const ErrorMessage = styled.div`
  color: #cc0000;
`;

import Webcam from 'react-webcam';
import styled from 'styled-components';
import { CameraStatusEnum } from './types';

export const Container = styled.div`
  margin: 0px 57px 16px 58px;
  height: 179px;
  width: 289px;
  text-align: center;
`;

export const WebcamCamera = styled(Webcam)(
  (props: { status?: CameraStatusEnum }) => {
    const { status } = props;
    let outline = 'none';
    if (status) {
      outline = '2px solid';
      if (status === CameraStatusEnum.OK) {
        outline += ' #69CC8B';
      } else if (status === CameraStatusEnum.KO) {
        outline += ' #C00000';
      }
    }
    return { 'object-fit': 'cover', 'border-radius': '18px', outline };
  },
);

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

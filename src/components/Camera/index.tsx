import { forwardRef, useState } from 'react';
import Webcam from 'react-webcam';
import Light from '../../assets/light.svg';
import SuccessOutlined from '../../assets/success_outlined.svg';
import IconText from '../IconText';
import { WebcamInfo, Container, ErrorMessage, WebcamCamera } from './styles';
import { CameraStatusEnum, ICameraProps } from './types';

const videoConstraints = { width: 289, height: 179 };

const Camera = forwardRef<Webcam | null, ICameraProps>((props, ref) => {
  const {
    handleStartCapture,
    status,
    defaultIcon = Light,
    defaultMessage = 'Room lighting is too low',
    successIcon = SuccessOutlined,
    successMessage = 'Picture taken!',
  } = props;
  const [webcamError, setWebcamError] = useState<string | DOMException>();

  const handleUserMediaError = (err: string | DOMException) => {
    setWebcamError(err);
  };

  return (
    <>
      <Container>
        {!webcamError ? (
          <WebcamCamera
            ref={ref}
            audio={false}
            onCanPlay={handleStartCapture}
            onUserMediaError={handleUserMediaError}
            videoConstraints={videoConstraints}
            width={videoConstraints.width}
            height={videoConstraints.height}
            status={status}
          />
        ) : (
          <ErrorMessage>
            <p>This app only works when we can access your camera.</p>
            <p>Turn on the camera permission for the full experience</p>
          </ErrorMessage>
        )}
      </Container>

      <WebcamInfo>
        {!status ? (
          <IconText
            src={defaultIcon}
            alt={defaultMessage}
            text={defaultMessage}
          />
        ) : (
          status === CameraStatusEnum.OK && (
            <IconText
              src={successIcon}
              alt={successMessage}
              text={successMessage}
            />
          )
        )}
      </WebcamInfo>
    </>
  );
});

export default Camera;

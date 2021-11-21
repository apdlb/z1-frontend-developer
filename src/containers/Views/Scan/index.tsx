import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import validateDocument from '../../../api/evaluation';
import Light from '../../../assets/light.svg';
import SuccessOutlined from '../../../assets/success_outlined.svg';
import IconText from '../../../components/IconText';
import { OutcomeEnum } from '../../../model/evaluation';
import PATHS from '../../../routes/paths';
import {
  Button,
  Camera,
  CameraInfo,
  Card,
  Container,
  Content,
  ErrorMessage,
  Subtitle,
  Title,
} from './styles';

const Scan: React.FC = () => {
  const navigate = useNavigate();
  const cameraRef = useRef<Webcam>(null);
  const [webcamError, setWebcamError] = useState<string | DOMException>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [lastDocumentProcessed, setLastDocumentProcessed] =
    useState<{ document: string; outcome: OutcomeEnum }>();
  const videoConstraints = { width: 289, height: 179 };

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const navigateToHome = () => {
    navigate(PATHS.HOME, { state: { lastDocumentProcessed } });
  };

  useEffect(() => {
    if (lastDocumentProcessed?.outcome === OutcomeEnum.SUCCESS) {
      navigateToHome();
      if (intervalId) {
        clearInterval(intervalId);
      }
    }
  }, [lastDocumentProcessed]);

  const onStartCapture = () => {
    const newIntervalId = setInterval(() => {
      const document = cameraRef.current?.getScreenshot();
      if (document) {
        const data = {
          image: document,
        };
        validateDocument(data)
          .then(evaluation => {
            setLastDocumentProcessed({
              document,
              outcome: evaluation.summary.outcome,
            });
          })
          .catch(err => {
            console.log(err);
          });
      }
    }, 2500);

    setIntervalId(newIntervalId);
  };

  const handleUserMediaError = (err: string | DOMException) => {
    setWebcamError(err);
  };

  return (
    <Container>
      <Content>
        <Title>Take picture</Title>

        <Subtitle>
          Fit your ID card inside the frame.
          <br />
          The picture will be taken automatically.
        </Subtitle>

        <Card>
          {!webcamError ? (
            <Camera
              ref={cameraRef}
              audio={false}
              onCanPlay={onStartCapture}
              onUserMediaError={handleUserMediaError}
              videoConstraints={videoConstraints}
              width={videoConstraints.width}
              height={videoConstraints.height}
              outcome={lastDocumentProcessed?.outcome}
            />
          ) : (
            <ErrorMessage>
              <p>This app only works when we can access your camera.</p>
              <p>Turn on the camera permission for the full experience</p>
            </ErrorMessage>
          )}
        </Card>

        <CameraInfo>
          {!lastDocumentProcessed ? (
            <IconText
              src={Light}
              alt="Lighting"
              text="Room lighting is too low"
            />
          ) : (
            lastDocumentProcessed.outcome === OutcomeEnum.SUCCESS && (
              <IconText
                src={SuccessOutlined}
                alt="Success"
                text="Picture taken!"
              />
            )
          )}
        </CameraInfo>

        <Button onClick={navigateToHome}>
          <span>Cancel</span>
        </Button>
      </Content>
    </Container>
  );
};

export default Scan;

import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Webcam from 'react-webcam';
import validateDocument from '../../../api/evaluation';
import Light from '../../../assets/light.svg';
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
  Text,
  Title,
} from './styles';

const Scan: React.FC = () => {
  const navigate = useNavigate();
  const cameraRef = useRef<Webcam>(null);
  const [webcamError, setWebcamError] = useState<string | DOMException>();
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [lastDocumentProcessed, setLastDocumentProcessed] =
    useState<{ document: string; outcome: OutcomeEnum }>();
  const [documentError, setDocumentError] = useState<boolean>(false);

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
    }
  }, [lastDocumentProcessed]);

  const onStartCapture = () => {
    const newIntervalId = setInterval(() => {
      setDocumentError(false);
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
            if (evaluation.summary.outcome === OutcomeEnum.ERROR) {
              setDocumentError(true);
            }
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
              onCanPlay={onStartCapture}
              onUserMediaError={handleUserMediaError}
              width={289}
              height={179}
              error={documentError}
            />
          ) : (
            <ErrorMessage>
              <p>This app only works when we can access your camera.</p>
              <p>Turn on the camera permission for the full experience</p>
            </ErrorMessage>
          )}
        </Card>

        <CameraInfo>
          {!documentError && (
            <>
              <img src={Light} alt="Lighting" />

              <Text>Room lighting is too low</Text>
            </>
          )}
        </CameraInfo>

        <Button onClick={navigateToHome}>CANCEL</Button>
      </Content>
    </Container>
  );
};

export default Scan;

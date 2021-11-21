import { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Webcam from 'react-webcam';
import validateDocument from '../../../api/evaluation';
import Camera from '../../../components/Camera';
import { CameraStatusEnum } from '../../../components/Camera/types';
import useIsMounted from '../../../hooks/useIsMounted';
import { LastDocumentProcessed, OutcomeEnum } from '../../../model/evaluation';
import PATHS from '../../../routes/paths';
import { Button, Container, Content, Subtitle, Title } from './styles';

const Scan: React.FC = () => {
  const navigate = useNavigate();
  const cameraRef = useRef<Webcam>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [lastDocumentProcessed, setLastDocumentProcessed] =
    useState<LastDocumentProcessed>();
  const [cameraStatus, setCameraStatus] = useState<CameraStatusEnum>();
  const isMounted = useIsMounted();

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
      setCameraStatus(CameraStatusEnum.OK);
      navigateToHome();
      if (intervalId) {
        clearInterval(intervalId);
      }
    } else if (lastDocumentProcessed?.outcome === OutcomeEnum.ERROR) {
      setCameraStatus(CameraStatusEnum.KO);
    }
  }, [lastDocumentProcessed]);

  const handleStartCapture = () => {
    const newIntervalId = setInterval(() => {
      const document = cameraRef.current?.getScreenshot();
      if (document) {
        const data = {
          image: document,
        };
        if (isMounted()) {
          validateDocument(data)
            .then(evaluation => {
              setLastDocumentProcessed({
                document,
                outcome: evaluation.summary.outcome,
              });
            })
            .catch(() => {
              toast.error('An error has occurred validating document');
            });
        }
      }
    }, 2500);

    setIntervalId(newIntervalId);
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

        <Camera
          ref={cameraRef}
          handleStartCapture={handleStartCapture}
          status={cameraStatus}
        />

        <Button onClick={navigateToHome}>
          <span>Cancel</span>
        </Button>
      </Content>
    </Container>
  );
};

export default Scan;

import { useEffect, useRef, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import Webcam from 'react-webcam';
import validateDocument from '../../../api/evaluation';
import Camera from '../../../components/Camera';
import { CameraStatusEnum } from '../../../components/Camera/types';
import useIsMounted from '../../../hooks/useIsMounted';
import { LastDocumentProcessed, OutcomeEnum } from '../../../model/evaluation';
import PATHS from '../../../routes/paths';
import i18n from '../../../utils/i18n';
import { Button, Container, Content, Subtitle, Title } from './styles';

const Scan: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const isMounted = useIsMounted();
  const cameraRef = useRef<Webcam>(null);
  const [intervalId, setIntervalId] = useState<NodeJS.Timeout>();
  const [lastDocumentProcessed, setLastDocumentProcessed] =
    useState<LastDocumentProcessed>();
  const [cameraStatus, setCameraStatus] = useState<CameraStatusEnum>();
  const stateLastDocumentProcessed: LastDocumentProcessed =
    location.state?.lastDocumentProcessed;

  useEffect(() => {
    return () => {
      if (intervalId) {
        clearInterval(intervalId);
      }
    };
  }, []);

  const navigateToHome = () => {
    navigate(PATHS.HOME, {
      state: {
        lastDocumentProcessed:
          lastDocumentProcessed || stateLastDocumentProcessed,
      },
    });
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
        <Title data-cy="scan-title">{i18n['scan.title']}</Title>

        <Subtitle>{i18n['scan.subtitle']}</Subtitle>

        <Camera
          ref={cameraRef}
          handleStartCapture={handleStartCapture}
          status={cameraStatus}
        />

        <Button data-cy="scan-cancel" onClick={navigateToHome}>
          <span>{i18n.cancel}</span>
        </Button>
      </Content>
    </Container>
  );
};

export default Scan;

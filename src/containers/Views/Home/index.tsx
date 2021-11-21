import { useLocation, useNavigate } from 'react-router-dom';
import IdBg from '../../../assets/id_bg.svg';
import { LastDocumentProcessed } from '../../../model/evaluation';
import PATHS from '../../../routes/paths';
import { Card, Container, Subtitle, PreviewImage, Title } from './styles';
import DocumentInfo from '../../../components/DocumentInfo';
import PictureButton from '../../../components/PictureButton';
import i18n from '../../../utils/i18n';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lastDocumentProcessed: LastDocumentProcessed =
    location.state?.lastDocumentProcessed;

  const navigateToScan = () => {
    navigate(PATHS.SCAN, { state: { lastDocumentProcessed } });
  };

  return (
    <Container>
      <Title data-cy="home-title">{i18n['home.title']}</Title>

      <Subtitle>{i18n['home.subtitle']}</Subtitle>

      {lastDocumentProcessed ? (
        <DocumentInfo
          lastDocumentProcessed={lastDocumentProcessed}
          navigateToScan={navigateToScan}
        />
      ) : (
        <Card>
          <PreviewImage src={IdBg} alt="ID" />

          <PictureButton data-cy="button-take-picture" onClick={navigateToScan}>
            <span>{i18n['take-picture']}</span>
          </PictureButton>
        </Card>
      )}
    </Container>
  );
};

export default Home;

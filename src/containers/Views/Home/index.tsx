import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import IdBg from '../../../assets/id_bg.svg';
import PATHS from '../../../routes/paths';
import { Card, Container, Subtitle, PreviewImage, Title } from './styles';
import DocumentInfo from '../../../components/DocumentInfo';
import PictureButton from '../../../components/PictureButton';
import i18n from '../../../utils/i18n';
import { Context } from '../../../context';

const Home: React.FC = () => {
  const { lastDocumentProcessed } = useContext(Context);
  const navigate = useNavigate();

  const navigateToScan = () => {
    navigate(PATHS.SCAN);
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

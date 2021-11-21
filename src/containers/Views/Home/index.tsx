import { useLocation, useNavigate } from 'react-router-dom';
import IdBg from '../../../assets/id_bg.svg';
import { LastDocumentProcessed } from '../../../model/evaluation';
import PATHS from '../../../routes/paths';
import {
  Card,
  Container,
  Content,
  ContentSubtitle,
  ContentTitle,
  Header,
  HeaderTitle,
  PreviewImage,
} from './styles';
import DocumentInfo from '../../../components/DocumentInfo';
import PictureButton from '../../../components/PictureButton';
import i18n from '../../../utils/i18n';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const lastDocumentProcessed = location.state
    ?.lastDocumentProcessed as LastDocumentProcessed;

  const navigateToScan = () => {
    navigate(PATHS.SCAN);
  };

  return (
    <Container>
      <Header>
        <HeaderTitle data-cy="app-title">{i18n['app.title']}</HeaderTitle>
      </Header>

      <Content>
        <ContentTitle data-cy="home-title">{i18n['home.title']}</ContentTitle>

        <ContentSubtitle>{i18n['home.subtitle']}</ContentSubtitle>

        {lastDocumentProcessed ? (
          <DocumentInfo lastDocumentProcessed={lastDocumentProcessed} />
        ) : (
          <Card>
            <PreviewImage src={IdBg} alt="ID" />

            <PictureButton
              data-cy="button-take-picture"
              onClick={navigateToScan}
            >
              <span>{i18n['take-picture']}</span>
            </PictureButton>
          </Card>
        )}
      </Content>
    </Container>
  );
};

export default Home;

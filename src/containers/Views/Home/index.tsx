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
        <HeaderTitle>BankClient</HeaderTitle>
      </Header>

      <Content>
        <ContentTitle>Scan your ID</ContentTitle>

        <ContentSubtitle>
          Take a picture. It may take time to validate your personal
          information.
        </ContentSubtitle>

        {lastDocumentProcessed ? (
          <DocumentInfo lastDocumentProcessed={lastDocumentProcessed} />
        ) : (
          <Card>
            <PreviewImage src={IdBg} alt="ID" />

            <PictureButton onClick={navigateToScan}>
              <span>Take picture</span>
            </PictureButton>
          </Card>
        )}
      </Content>
    </Container>
  );
};

export default Home;

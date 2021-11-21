import { useLocation, useNavigate } from 'react-router-dom';
import IdBg from '../../../assets/id_bg.svg';
import Success from '../../../assets/success.svg';
import Error from '../../../assets/error.svg';
import IconText from '../../../components/IconText';
import { OutcomeEnum } from '../../../model/evaluation';
import PATHS from '../../../routes/paths';
import {
  PictureButton,
  Card,
  Container,
  Content,
  ContentSubtitle,
  ContentTitle,
  Header,
  HeaderTitle,
  PreviewImage,
  Document,
  DocumentImage,
  DocumentStatus,
} from './styles';

const Home: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { lastDocumentProcessed } = location.state || {};

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
          <Document>
            <DocumentImage
              src={lastDocumentProcessed.document}
              alt="foto"
              status={lastDocumentProcessed.outcome}
            />
            <DocumentStatus status={lastDocumentProcessed.outcome}>
              {lastDocumentProcessed.outcome === OutcomeEnum.SUCCESS ? (
                <IconText src={Success} alt="Success" text="Accepted" />
              ) : (
                <IconText src={Error} alt="Rejected" text="Rejected" />
              )}
            </DocumentStatus>

            {lastDocumentProcessed.outcome === OutcomeEnum.ERROR && (
              <PictureButton onClick={navigateToScan}>
                <span>Retake picture</span>
              </PictureButton>
            )}
          </Document>
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

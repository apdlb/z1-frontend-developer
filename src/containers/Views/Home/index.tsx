import { useNavigate } from 'react-router-dom';
import IdBg from '../../../assets/id_bg.svg';
import {
  ButtonText,
  Button,
  Card,
  Container,
  Content,
  ContentSubtitle,
  ContentTitle,
  Header,
  HeaderTitle,
  Image,
} from './styles';

const Home: React.FC = () => {
  const navigate = useNavigate();

  const navigateToScan = () => {
    navigate('/scan');
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
        <Card>
          <Image src={IdBg} alt="ID" />
          <Button onClick={navigateToScan}>
            <ButtonText>TAKE PICTURE</ButtonText>
          </Button>
        </Card>
      </Content>
    </Container>
  );
};

export default Home;

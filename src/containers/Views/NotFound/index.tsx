import { Code, Container, RedirectLink } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Code>404: Not found</Code>
      <RedirectLink to="/">Back to Home</RedirectLink>
    </Container>
  );
};

export default NotFound;

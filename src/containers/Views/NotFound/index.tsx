import i18n from '../../../utils/i18n';
import { Code, Container, RedirectLink } from './styles';

const NotFound: React.FC = () => {
  return (
    <Container>
      <Code>{i18n['not-found']}</Code>
      <RedirectLink to="/">{i18n['back-home']}</RedirectLink>
    </Container>
  );
};

export default NotFound;

import { useNavigate } from 'react-router-dom';
import PATHS from '../../../routes/paths';
import i18n from '../../../utils/i18n';
import { Container, Title } from './styles';

const Header: React.FC = () => {
  const navigate = useNavigate();

  const clearLocationState = () => {
    navigate(PATHS.HOME, { replace: true });
  };

  return (
    <Container>
      <Title data-cy="app-title" onClick={clearLocationState}>
        {i18n['app.title']}
      </Title>
    </Container>
  );
};

export default Header;

import { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { Context } from '../../../context';
import PATHS from '../../../routes/paths';
import i18n from '../../../utils/i18n';
import { Container, Title } from './styles';

const Header: React.FC = () => {
  const { setLastDocumentProcessed } = useContext(Context);
  const navigate = useNavigate();

  const navigateToHome = () => {
    if (setLastDocumentProcessed) setLastDocumentProcessed(undefined);
    navigate(PATHS.HOME);
  };

  return (
    <Container>
      <Title data-cy="app-title" onClick={navigateToHome}>
        {i18n['app.title']}
      </Title>
    </Container>
  );
};

export default Header;

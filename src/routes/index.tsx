import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../containers/Views/Home';
import Scan from '../containers/Views/Scan';
import PATHS from './paths';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.SCAN} element={<Scan />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

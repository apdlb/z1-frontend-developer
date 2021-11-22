import { HashRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../containers/Views/Home';
import NotFound from '../containers/Views/NotFound';
import Scan from '../containers/Views/Scan';
import PATHS from './paths';

const Routes: React.FC = () => {
  return (
    <HashRouter>
      <Switch>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.SCAN} element={<Scan />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </HashRouter>
  );
};

export default Routes;

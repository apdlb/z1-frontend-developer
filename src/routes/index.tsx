import { BrowserRouter, Route, Routes as Switch } from 'react-router-dom';
import Home from '../containers/Views/Home';
import NotFound from '../containers/Views/NotFound';
import Scan from '../containers/Views/Scan';
import PATHS from './paths';

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={PATHS.HOME} element={<Home />} />
        <Route path={PATHS.SCAN} element={<Scan />} />
        <Route path="*" element={<NotFound />} />
      </Switch>
    </BrowserRouter>
  );
};

export default Routes;

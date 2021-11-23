import { ToastContainer } from 'react-toastify';
import { ContextProvider } from './context';
import GlobalStyle from './styles';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';

const App: React.FC = () => {
  const version = process.env.REACT_APP_VERSION;

  return (
    <>
      {version && <meta name="version" content={version} />}

      <GlobalStyle />

      <ContextProvider>
        <Routes />
      </ContextProvider>

      <ToastContainer
        position="bottom-left"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default App;

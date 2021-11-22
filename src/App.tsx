import { ToastContainer } from 'react-toastify';
import GlobalStyle from './styles';
import Routes from './routes';
import 'react-toastify/dist/ReactToastify.css';
import { ContextProvider } from './context';

const App: React.FC = () => {
  return (
    <>
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

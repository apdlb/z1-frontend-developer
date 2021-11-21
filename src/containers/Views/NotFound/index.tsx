import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <>
      <div>404: Not found</div>
      <div>
        <Link to="/">Back to Home</Link>
      </div>
    </>
  );
};

export default NotFound;

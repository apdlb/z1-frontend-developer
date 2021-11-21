import { HTMLAttributes } from 'react';
import { Button } from './styles';

const PictureButton: React.FC<HTMLAttributes<HTMLButtonElement>> = props => {
  const { children, ...others } = props;
  return <Button {...others}>{children}</Button>;
};

export default PictureButton;

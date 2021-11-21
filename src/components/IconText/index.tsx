import Text from './styles';
import { IIconTextProps } from './types';

const IconText: React.FC<IIconTextProps> = props => {
  const { src, alt, text } = props;

  return (
    <>
      <img src={src} alt={alt} />

      <Text>{text}</Text>
    </>
  );
};

export default IconText;

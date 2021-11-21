import Text from './styles';
import { IIconTextProps } from './types';

const IconText: React.FC<IIconTextProps> = props => {
  const { src, alt, text, dataCy = '' } = props;

  return (
    <>
      <img src={src} alt={alt} />

      <Text data-cy={dataCy}>{text}</Text>
    </>
  );
};

export default IconText;

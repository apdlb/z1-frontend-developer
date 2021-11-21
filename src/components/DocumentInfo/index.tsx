import { useNavigate } from 'react-router-dom';
import Success from '../../assets/success.svg';
import Error from '../../assets/error.svg';
import { OutcomeEnum } from '../../model/evaluation';
import IconText from '../IconText';
import PictureButton from '../PictureButton';
import { Document, DocumentImage, DocumentStatus } from './styles';
import PATHS from '../../routes/paths';
import { IDocumentInfoProps } from './types';

const DocumentInfo: React.FC<IDocumentInfoProps> = props => {
  const { lastDocumentProcessed } = props;
  const navigate = useNavigate();

  const navigateToScan = () => {
    navigate(PATHS.SCAN);
  };

  return (
    <Document>
      <DocumentImage
        src={lastDocumentProcessed.document}
        alt="foto"
        status={lastDocumentProcessed.outcome}
      />
      <DocumentStatus status={lastDocumentProcessed.outcome}>
        {lastDocumentProcessed.outcome === OutcomeEnum.SUCCESS ? (
          <IconText src={Success} alt="Success" text="Accepted" />
        ) : (
          <IconText src={Error} alt="Rejected" text="Rejected" />
        )}
      </DocumentStatus>

      {lastDocumentProcessed.outcome === OutcomeEnum.ERROR && (
        <PictureButton onClick={navigateToScan}>
          <span>Retake picture</span>
        </PictureButton>
      )}
    </Document>
  );
};

export default DocumentInfo;

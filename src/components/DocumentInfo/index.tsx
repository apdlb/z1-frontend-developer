import Success from '../../assets/success.svg';
import Error from '../../assets/error.svg';
import { OutcomeEnum } from '../../model/evaluation';
import IconText from '../IconText';
import PictureButton from '../PictureButton';
import { Document, DocumentImage, DocumentStatus } from './styles';
import { IDocumentInfoProps } from './types';
import i18n from '../../utils/i18n';

const DocumentInfo: React.FC<IDocumentInfoProps> = props => {
  const { lastDocumentProcessed, navigateToScan } = props;

  return (
    <Document>
      <DocumentImage
        src={lastDocumentProcessed.document}
        alt={i18n.picture}
        status={lastDocumentProcessed.outcome}
      />
      <DocumentStatus
        data-cy="document-status"
        status={lastDocumentProcessed.outcome}
      >
        {lastDocumentProcessed.outcome === OutcomeEnum.SUCCESS ? (
          <IconText
            dataCy="document-accepted"
            src={Success}
            alt={i18n.accepted}
            text={i18n.accepted}
          />
        ) : (
          <IconText
            dataCy="document-rejected"
            src={Error}
            alt={i18n.rejected}
            text={i18n.rejected}
          />
        )}
      </DocumentStatus>

      {lastDocumentProcessed.outcome === OutcomeEnum.ERROR && (
        <PictureButton data-cy="button-retake-picture" onClick={navigateToScan}>
          <span>{i18n['retake-picture']}</span>
        </PictureButton>
      )}
    </Document>
  );
};

export default DocumentInfo;

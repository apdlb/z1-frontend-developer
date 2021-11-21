import { LastDocumentProcessed, OutcomeEnum } from '../../model/evaluation';

export interface IDocumentInfoProps {
  lastDocumentProcessed: LastDocumentProcessed;
  navigateToScan: () => void;
}

export interface IStyledDocumentImageProps {
  status: OutcomeEnum;
}

export interface IStyledDocumentStatusProps {
  status: OutcomeEnum;
}

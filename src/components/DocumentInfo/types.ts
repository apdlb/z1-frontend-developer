import { LastDocumentProcessed } from '../../model/evaluation';

export interface IDocumentInfoProps {
  lastDocumentProcessed: LastDocumentProcessed;
  navigateToScan: () => void;
}

import { Evaluation } from '../../model/evaluation';
import http from '../../utils/interceptor-axios';
import { ValidateDocumentData } from './types';

const validateDocument = (data: ValidateDocumentData): Promise<Evaluation> =>
  http.post('evaluations', data);

export default validateDocument;

export enum OutcomeEnum {
  SUCCESS = 'Approved',
  ERROR = 'Too Much Glare',
}

type Summary = {
  outcome: OutcomeEnum;
};

export type Evaluation = {
  summary: Summary;
};

export type LastDocumentProcessed = {
  document: string;
  outcome: OutcomeEnum;
};

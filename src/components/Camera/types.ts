export enum CameraStatusEnum {
  OK = 'OK',
  KO = 'KO',
}

export interface ICameraProps {
  handleStartCapture: () => void;
  status?: CameraStatusEnum;
  defaultIcon?: string;
  defaultMessage?: string;
  successIcon?: string;
  successMessage?: string;
}

export interface IStyledContainerProps {
  status?: CameraStatusEnum;
}

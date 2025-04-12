export interface ICustomButton {
  title: string;
  type?: 'button' | 'submit' | 'reset' | undefined;
  onClick?: () => void;
  isFilled?: boolean;
  isGray?: boolean;
  isDownloadIcon?: boolean;
}

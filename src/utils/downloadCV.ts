import pdf from '../../public/docs/CV_Stanislau_Dziarhach.pdf';

export const onDownloadCV = () => {
  window.open(pdf, '_blank');
};

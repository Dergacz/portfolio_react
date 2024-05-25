import pdf from '../../public/docs/Stanislau_Dziarhach_CV.pdf';

export const onDownloadCV = () => {
  window.open(pdf, '_blank');
};

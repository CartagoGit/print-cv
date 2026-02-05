import { i18nInstance } from './traduction.helper';
const { t } = i18nInstance.global;

export const getFileName = (data: { nameCv: string | undefined; kind: 'pdf' | 'jpg' }) => {
  const { nameCv, kind } = data;
  if (!nameCv) throw new Error('No se encontró nombre de cv');
  const date = new Date();
  const nameDoc = `${nameCv}_${date.getFullYear()}_${(date.getMonth() + 1)
    .toString()
    .padStart(2, '0')}_${date
    .getDate()
    .toString()
    .padStart(2, '0')}_cv_${t('GENERAL.LANG')}.${kind}`;
  return nameDoc;
};

export const generatePDF = (cvName: string) => {
  const originalTitle = document.title;
  const fileName = getFileName({ nameCv: cvName.replace(/\s+/g, '_'), kind: 'pdf' });
  
  document.title = fileName;
  window.print();
  
  // Restore title after print dialog closes (or reasonably immediately, browsers handle this differently)
  // setTimeout(() => { document.title = originalTitle; }, 1000); 
  // Actually, leaving it is fine or restoring it. Restoring it is safer for SPA.
  setTimeout(() => { document.title = originalTitle; }, 500);
};

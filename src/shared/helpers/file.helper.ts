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

export const generatePDF = async () => {
  window.print();
};

import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';
import type { Ref } from 'vue';
import { i18nInstance } from './traduction.helper';
const { t } = i18nInstance.global;

export const getFileName = (data: { nameCv: string | undefined ; kind: 'pdf' | 'jpg' }) => {
    const { nameCv, kind } = data;
    if (!nameCv) throw new Error('No se encontró nombre de cv');
    const date = new Date();
    const nameDoc = `${nameCv}_${date.getFullYear()}_${(
        date.getMonth() + 1
    )
        .toString()
        .padStart(2, '0')}_${date
        .getDate()
        .toString()
        .padStart(2, '0')}_cv_${t('GENERAL.LANG')}.${kind}`;
    return nameDoc;
};

export const generatePDF = async (data: {
	curriculum: Ref<HTMLElement | null>;
	isLoading: Ref<boolean>;
	scale: Ref<number>;
	actualRoute: Ref<{
		text: string;
		nameRoute: string;
		name: string;
	}>;
}) => {
	const { curriculum, isLoading, scale, actualRoute } = data;
	if (!curriculum.value)
		return console.error('No se encontró el currículum', curriculum);
	isLoading.value = true;
	scale.value = 100;
	// Esperamos a que se actualice el valor de scale para evitar deformaciones
	await new Promise((resolve) =>
		setTimeout(async () => {
			resolve(null);
		}, 50)
	);

	const pages = curriculum!.value!.querySelectorAll('.page');
	const doc = new jsPDF();
	try {
		for (let i = 0; i < pages.length; i++) {
			const page = pages[i];
			const canvas = await html2canvas(page as HTMLElement, {
				scale: 4,
			});
			const imgData = canvas.toDataURL('image/jpeg');
			const imgProps = doc.getImageProperties(imgData);
			const pdfWidth = doc.internal.pageSize.getWidth();
			const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
			doc.addImage(imgData, 'JPG', 0, 0, pdfWidth, pdfHeight);
			if (i < pages.length - 1) {
				doc.addPage();
			}
		}
		const nameDoc = getFileName({
            nameCv: actualRoute.value?.name.split(' ').join('_'),
            kind: 'pdf',
        });
		doc.save(nameDoc);
	} catch (err) {
		console.error(err);
	} finally {
		isLoading.value = false;
	}
};

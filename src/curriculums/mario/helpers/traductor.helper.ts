import type { IKindTraductions } from '@/shared/interfaces/traduction.interface';
import { computed } from 'vue';

import { i18nInstance } from '@/shared/helpers/traduction.helper';
const { t } = i18nInstance.global;

export type IKindPROFESSIONALExperience =
  | 'BEATEAM'
  | 'INDEPENDIENT2'
  | 'EXCELLENCE'
  | 'HISPATEL'
  | 'INDEPENDIENT1'
  | 'EVERTEL'
  | 'GUADALTEL'
  | 'PUBLIBICI';

export type IKindOficialEducation = 'VELAZQUEZ' | 'US' | 'SANPABLO';

type IPropsFieldsData =
  | 'COMPANY' // Opcional
  | 'START'
  | 'END'
  | 'PLACE'
  | 'DESCRIPTION';

type IPlace = 'SEVILLE';

type ISection = 'PROFESSIONAL_EXPERIENCE' | 'OFICIAL_EDUCATION';

export type ICourses =
  | 'ANGULAR_ADVANCED'
  | 'DOCKER'
  | 'SOLID'
  | 'RXJS'
  | 'ANGULAR_BASIC'
  | 'JAVASCRIPT_MASTER'
  | 'DAPPS_ETH'
  | 'ADOBE'
  | 'BOOTSTRAP'
  | 'NOTION'
  | 'JAVASCRIPT_MODERN'
  | 'REACT_BASIC'
  | 'BLOCKCHAIN'
  | 'SOLIDITY'
  | 'GIT'
  | 'MOBILE_APPS'
  | 'CSS'
  | 'INTRO_DEV_WEB_2'
  | 'INTRO_DEV_WEB_1'
  | 'VPM_COMPANIES'
  | 'PREVENTIVE_RESOURCE'
  | 'COPPER'
  | 'FTTH'
  | 'FLASH';
export type ILanguages = 'ENGLISH' | 'SPANISH';
export type ILanguagesFields = 'DESCRIPTION' | 'SUBDESCRIPTION';

export type IOpenProjects = 'KEYER' | 'DOCKER_IMAGES' | 'QUICKMODEL';
export type IOpenProjectsFields = 'DESCRIPTION' | 'SHORT_DESCRIPTION';

type IOtherInteresData = 'DRIVE';

type ITechSkillsFields =
  | 'TITLE'
  | 'ENVIRONMENTS'
  | 'IDES'
  | 'LANGUAGES'
  | 'FRONTEND'
  | 'BACKEND'
  | 'DEPENDENCIES'
  | 'REPOSITORIES'
  | 'TERMINALS'
  | 'OTHERS'
  | 'CLOUD'
  | 'DATABASES';

type IMonths =
  | 'JANUARY'
  | 'FEBRUARY'
  | 'MARCH'
  | 'APRIL'
  | 'MAY'
  | 'JUNE'
  | 'JULY'
  | 'AUGUST'
  | 'SEPTEMBER'
  | 'OCTOBER'
  | 'NOVEMBER'
  | 'DECEMBER';

export const tFieldsData = (data: {
  cv: IKindTraductions;
  kind: IKindPROFESSIONALExperience | IKindOficialEducation;
  key: IPropsFieldsData;
  section: ISection;
}) => {
  const { cv, kind, key, section } = data;
  const base = cv === 'BASE' ? '' : cv.toUpperCase();
  const translatePoint = `${base}.${section}.DATA.${kind}.${key}`;

  return computed(() => t(translatePoint));
};

export const tPlace = (place: IPlace, options?: { pre?: string; next?: string }) => {
  const { pre = '', next = '' } = options || {};
  return computed(() => pre + t(`PLACES.${place}`) + next);
};

export const tCourses = (course: ICourses) => {
  return computed(() => t(`MARIO.COURSES.${course}`));
};

export const tLangGrade = (props: { lang: ILanguages; key: ILanguagesFields }) => {
  const { lang, key } = props;
  return computed(() => t(`MARIO.LANGUAGES.${lang}.${key}`));
};

export const tOpenProjects = (props: { project: IOpenProjects; key: IOpenProjectsFields }) => {
  const { project, key } = props;
  return computed(() => t(`MARIO.OTHER_DATA.OPEN_PROJECTS.${project}.${key}`));
};

export const tOtherInteresData = (name: IOtherInteresData) => {
  return computed(() => t(`MARIO.OTHER_DATA.OTHER_INTEREST_DATA.${name}`));
};

export const tTechSkills = (key: ITechSkillsFields) => {
  return computed(() => t(`MARIO.OTHER_DATA.TECH_SKILLS.${key}`));
};

export const tMonth = (
  month: IMonths,
  options?: { isShort?: boolean; pre?: string; next?: string },
) => {
  const { isShort = false, pre = '', next = '' } = options || {};
  return computed(
    () => pre + (isShort ? t(`MONTHS.${month}`).slice(0, 3) : t(`MONTHS.${month}`)) + next,
  );
};
export const tDate = (dateString?: string) => {
  return computed(() => {
    if (!dateString) return '';
    // Handle "Actual"
    if (dateString.toLowerCase() === 'actual') {
      return t('MARIO.DATES.STATUS.ACTUAL');
    }
    // Handle months parsing
    const parts = dateString.split(' ');
    const translatedParts = parts.map((part) => {
      const upper = part.toUpperCase();
      const map: Record<string, string> = {
        ENE: 'JAN',
        FEB: 'FEB',
        MAR: 'MAR',
        ABR: 'APR',
        MAY: 'MAY',
        JUN: 'JUN',
        JUL: 'JUL',
        AGO: 'AUG',
        SEP: 'SEP',
        OCT: 'OCT',
        NOV: 'NOV',
        DIC: 'DEC',
        // English variants just in case
        JAN: 'JAN',
        APR: 'APR',
        AUG: 'AUG',
        DEC: 'DEC',
      };
      if (map[upper]) {
        return t(`MARIO.DATES.MONTHS.${map[upper]}`);
      }
      return part;
    });
    return translatedParts.join(' ');
  });
};

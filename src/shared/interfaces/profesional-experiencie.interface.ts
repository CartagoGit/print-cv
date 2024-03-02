import type { IDate } from './index.interfaces';

export interface IProfesionalExperiencie {
    company: string;
    subCompany?: string;
    where: string;
    date: IDate;
    place: string;
    description?: string;
}
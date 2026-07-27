import experiencesData from './experiences.json';

export interface ExperienceItem {
	logo: string;
	appointment: string;
	alt: string;
	company: string;
	period: string;
	details: string[];
	type: 0 | 1; // 1 = experiencia laboral, 0 = estudios
}

export const experiences: ExperienceItem[] = experiencesData as ExperienceItem[];

export const workItems: ExperienceItem[] = experiences.filter((item) => item.type === 1);
export const studyItems: ExperienceItem[] = experiences.filter((item) => item.type === 0);
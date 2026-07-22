export interface Project {
	slug: string;
	title: string;
	year: string;
	featuredImage: string;
	technologies: string;
	github: string;
	excerpt: string;
	content: string;
}

import projectsData from './projects.json';

export const projects: Project[] = projectsData as Project[];

export function getProject(slug: string): Project | undefined {
	return projects.find((p) => p.slug === slug);
}

export function getProjectsPage(page: number): Project[] {
	const perPage = 7;
	const start = page * perPage;
	return projects.slice(start, start + perPage);
}

export function getTotalPages(): number {
	return Math.ceil(projects.length / 7);
}

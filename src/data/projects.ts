export interface Project {
	slug: string;
	title: string;
	year: string;
	featuredImage: string;
	technologies: string;
	github: string;
	excerpt: string;
	content: string;
	category: 'Professional' | 'Personal' | 'Academic';
	gallery?: string[];
}

import projectsData from './projects.json';

import gbeeContent from './projects/gbee.html?raw';
import goldenSacraRemakeContent from './projects/golden-sacra-remake.html?raw';
import zombiestationContent from './projects/zombiestation.html?raw';
import dizzyMouseContent from './projects/dizzy-mouse.html?raw';
import goldenSacraContent from './projects/golden-sacra.html?raw';
import frostylandContent from './projects/frostyland.html?raw';
import redseaContent from './projects/redsea.html?raw';
import apolloXContent from './projects/apollo-x.html?raw';

const contentMap: Record<string, string> = {
	gbee: gbeeContent,
	'golden-sacra-remake': goldenSacraRemakeContent,
	zombiestation: zombiestationContent,
	'dizzy-mouse': dizzyMouseContent,
	'golden-sacra': goldenSacraContent,
	frostyland: frostylandContent,
	redsea: redseaContent,
	'apollo-x': apolloXContent,
};

export const projects: Project[] = (projectsData as Omit<Project, 'content'>[]).map((p) => ({
	...p,
	content: contentMap[p.slug] ?? '',
}));

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

import { Component, AfterViewInit } from '@angular/core';

@Component({
	selector: 'app-list-project',
	standalone: false,
	templateUrl: './list-project.component.html',
	styleUrl: './list-project.component.scss',
})
export class ListProjectComponent {
	data = [
		{
			name: 'PIKA',
			date_realisation: '2024 - 2026',
			Description:
				"Application permettant de générer rapidement des fichiers PDF en saisissant uniquement les informations essentielles. Elle intègre également un système d’archivage, une recherche avancée et la possibilité de télécharger les PDF générés.",
			Technologie: {
				frontEnd: 'Angular',
				backEnd: 'Flask',
			},
			lienGithub:
			{
				front: 'git@github.com:ratsila484/pika-web-back-end.git',
				backend: "git@github.com:ratsila484/pika-web.git"
			}
		},
		{
			name: 'CHAT-BOT (agent commercial)',
			date_realisation: '2024',
			Description:
				"Bot se comportant comme un agent commercial virtuel, chargé de présenter et vendre les produits d’une entreprise. Une fois la commande confirmée, un email est automatiquement envoyé à l’entreprise pour notification.",
			Technologie: {
				frontEnd: 'Angular',
				email: 'EmailJs',
			},
			lien: 'https://assistant-ai-sainto-gveiy2ay6-ratsilas-projects.vercel.app/',
		},
		{
			name: 'Application web, Gestion formations, fichiers et discussion instantané',
			date_realisation: '2025 - 2026',
			Description:
				"Application web permettant de gérer les formations au sein d’une entreprise. Elle offre également la possibilité de partager rapidement des documents et de stocker des fichiers sensibles sur un serveur sécurisé. L’application intègre aussi un système de messagerie en temps réel, avec la possibilité de créer des groupes de discussion.",
			Technologie: {
				frontEnd: 'Angular',
				backend: 'Flask',
			},
			lienGithub: 'git@github.com:ratsila484/pika-web.git',
		},
	];
}

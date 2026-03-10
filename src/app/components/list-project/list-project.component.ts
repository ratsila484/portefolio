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
        "Application permettant de générer des pdf rapidement en entrant uniquement des données essentiels. Système d'archive, recherche avancer et telechargement des pdf créer",
      Technologie: {
        frontEnd: 'Angular',
        backEnd: 'Flask',
      },
      lienGithub: 'https://github.com/ratsila484/pika-web',
    },  
    {
      name: 'CHAT-BOT (agent commercial)',
      date_realisation: '2024',
      Description:
        "Bot qui se comporte en agent commerciale pour vendre et afficher les produits d'une société. Une fois commande confirmer une email est envoyer vers la société",
      Technologie: {
        frontEnd: 'Angular',
        email: 'EmailJs',
      },
      lienGithub: 'https://github.com/ratsila484/<a enterer>',
    },
    {
      name: 'Application web, Gestion formations, fichiers et discussion instantané',
      date_realisation: '2025 - 2026',
      Description:
        "Application web qui gère des formations dans une société, il permet aussi de partager plus rapidement et de stocker les fichiers sensibles dans un serveur, il permet de discuter en temps réels (creer des group, ...)",
      Technologie: {
        frontEnd: 'Angular',
        backend: 'Flask',
      },
      lienGithub: 'https://github.com/ratsila484/<a enterer>',
    },
  ];
}

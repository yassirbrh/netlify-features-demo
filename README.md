# Netlify Simple Demo

Projet React simple pour une présentation courte de Netlify.

## Objectif

Cette application présente quelques fonctionnalités importantes de Netlify :

- Netlify Forms : recevoir les données d’un formulaire sans backend.
- Netlify Functions : créer une petite API serverless.
- Netlify Edge : exécuter du code au niveau edge.
- Netlify CMS / Decap CMS : présenter l’idée de gestion de contenu.
- Déploiement automatique depuis GitHub.

## Installation locale

```bash
npm install
npm run dev
```

Puis ouvrir :

```text
http://localhost:5173
```

## Déploiement sur Netlify

1. Créer un repository GitHub.
2. Envoyer le projet sur GitHub.
3. Se connecter à Netlify.
4. Add new site > Import an existing project.
5. Choisir le repository GitHub.
6. Configuration :
   - Build command : `npm run build`
   - Publish directory : `dist`
7. Déployer.

## Tests après déploiement

Remplacer `votre-site.netlify.app` par le vrai lien.

### Forms

Ouvrir :

```text
https://votre-site.netlify.app/forms
```

Remplir le formulaire, puis consulter :

```text
Netlify Dashboard > Site > Forms > contact-demo
```

### Functions

Ouvrir :

```text
https://votre-site.netlify.app/api/hello
```

Ou tester depuis la page :

```text
https://votre-site.netlify.app/functions
```

### Edge

Ouvrir :

```text
https://votre-site.netlify.app/edge-info
```

Ou tester depuis la page :

```text
https://votre-site.netlify.app/edge
```

### CMS

Ouvrir :

```text
https://votre-site.netlify.app/cms
```

L’interface Decap CMS existe aussi sur :

```text
https://votre-site.netlify.app/admin
```

Une vraie utilisation complète du CMS demande une configuration Git Gateway / Identity.

## Remarque

Ce projet est volontairement simple pour une présentation de 5 minutes.

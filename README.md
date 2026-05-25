# Netlify Features Demo Lab

Projet React/Vite prêt à déployer pour démontrer les concepts principaux de Netlify dans un module de Virtualisation et Cloud Computing.

## Objectif

Ce projet ne sert pas seulement à publier un site web. Il sert à démontrer plusieurs fonctionnalités de Netlify :

- Netlify Build
- Netlify Dev
- Netlify Forms
- Netlify Functions
- Netlify Edge Functions
- Netlify Identity
- Netlify CMS / Decap CMS
- Netlify Addons / Extensions
- Netlify API
- Redirections avec `netlify.toml`

## Installation locale

```bash
npm install
npm run dev
```

Puis ouvrir :

```text
http://localhost:5173
```

## Tester le build localement

```bash
npm run build
npm run preview
```

## Déploiement sur Netlify

1. Créer un repository GitHub.
2. Envoyer ce projet vers GitHub.
3. Aller sur Netlify.
4. Add new site > Import an existing project.
5. Choisir le repository GitHub.
6. Configuration :

```text
Build command: npm run build
Publish directory: dist
```

Le fichier `netlify.toml` contient déjà cette configuration.

## Tester Netlify Forms

Après déploiement :

1. Aller sur la page `Netlify Forms`.
2. Remplir et envoyer le formulaire.
3. Ouvrir Netlify Dashboard > Forms.
4. Vérifier que la soumission est enregistrée.

## Tester Netlify Functions

Après déploiement :

```text
https://votre-site.netlify.app/api/hello
```

ou depuis la page `Netlify Functions` avec le bouton de test.

## Tester Netlify Edge

Après déploiement :

```text
https://votre-site.netlify.app/edge-location
```

ou depuis la page `Netlify Edge` avec le bouton de test.

## Tester les redirections

Après déploiement :

```text
/old-page
```

Cette route redirige vers `/`.

La route suivante appelle une fonction Netlify :

```text
/api/hello
```

## Netlify Identity

Pour tester Identity :

1. Aller dans Netlify Dashboard.
2. Activer Identity si disponible.
3. Autoriser les inscriptions ou inviter un utilisateur.
4. Ouvrir la page `Netlify Identity`.

Cette partie est optionnelle/bonus.

## Netlify CMS / Decap CMS

Une structure de base est préparée dans :

```text
public/admin
content/posts
```

Pour une démonstration complète, il faut configurer Netlify Identity et Git Gateway.

## Coût

Le projet peut être réalisé à 0 MAD en utilisant :

- VS Code gratuit
- Git gratuit
- GitHub gratuit
- Node.js gratuit
- Netlify Free plan
- Sous-domaine gratuit `netlify.app`

## Phrase orale courte

Notre projet démontre Netlify comme technologie de déploiement moderne. À travers cette application, nous montrons le build automatique, les formulaires sans backend, les fonctions serverless, les Edge Functions, les redirections, l'authentification, le CMS et l'API Netlify. Le but est de comprendre comment Netlify permet de publier et gérer une application web simplement, gratuitement et sans administrer un serveur classique.

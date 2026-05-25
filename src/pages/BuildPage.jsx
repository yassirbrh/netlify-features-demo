function BuildPage() {
  return (
    <section className="page">
      <span className="badge">Concept 1</span>
      <h1>Netlify Build</h1>

      <p>
        Netlify Build est le processus qui construit automatiquement le projet
        après chaque modification envoyée sur GitHub. Dans notre projet, Netlify
        exécute la commande de build puis publie le dossier final.
      </p>

      <pre>{`[build]
  command = "npm run build"
  publish = "dist"`}</pre>

      <div className="info-box">
        <h3>Ce qu'il faut montrer pendant la présentation</h3>
        <ol className="steps">
          <li>Ouvrir le Dashboard Netlify.</li>
          <li>Aller dans la section Deploys.</li>
          <li>Ouvrir le dernier déploiement.</li>
          <li>Montrer les logs : installation, build et publication.</li>
        </ol>
      </div>
    </section>
  );
}

export default BuildPage;

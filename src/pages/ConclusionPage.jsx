function ConclusionPage() {
  return (
    <section className="page">
      <span className="badge">Conclusion</span>
      <h1>Bilan du projet</h1>

      <p>
        Cette démonstration montre que Netlify n'est pas seulement un service
        d'hébergement. C'est une plateforme complète pour le déploiement moderne
        des applications web.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Ce que nous avons démontré</h3>
          <p>
            Build automatique, Forms, Functions, Edge Functions, redirections,
            Identity, CMS, Addons et API.
          </p>
        </div>
        <div className="card">
          <h3>Avantage principal</h3>
          <p>
            Le développeur se concentre sur le code, tandis que Netlify gère le
            déploiement et plusieurs services autour du projet.
          </p>
        </div>
      </div>

      <div className="info-box">
        <h3>Phrase orale finale</h3>
        <p>
          Notre projet a permis de comprendre comment Netlify simplifie le
          déploiement cloud d'une application web moderne, avec plusieurs
          fonctionnalités prêtes à l'emploi et un coût de 0 MAD pour une
          démonstration académique.
        </p>
      </div>
    </section>
  );
}

export default ConclusionPage;

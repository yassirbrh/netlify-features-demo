function Home() {
  return (
    <section className="page">
      <div className="page-header">
        <span className="badge">Projet pratique Netlify</span>
        <h1>Netlify Features Demo Lab</h1>
        <p>
          Cette application sert à démontrer les concepts principaux de Netlify
          dans un seul projet : Build, Dev, Forms, Functions, Edge Functions,
          Identity, CMS, Addons et API.
        </p>
      </div>

      <div className="kpi-row">
        <div className="kpi">
          <strong>0 MAD</strong>
          <span>Plan gratuit</span>
        </div>
        <div className="kpi">
          <strong>React</strong>
          <span>Application frontend</span>
        </div>
        <div className="kpi">
          <strong>Netlify</strong>
          <span>Déploiement cloud</span>
        </div>
      </div>

      <div className="grid">
        <div className="card">
          <h3>Objectif</h3>
          <p>
            Montrer comment Netlify simplifie le déploiement moderne d'une
            application web sans gérer manuellement un serveur.
          </p>
        </div>
        <div className="card">
          <h3>Démonstration</h3>
          <p>
            Le projet contient des exemples de formulaire, fonction serverless,
            redirections, Edge Function et configuration Netlify.
          </p>
        </div>
        <div className="card">
          <h3>Technologies</h3>
          <p>React, Vite, React Router, Netlify Forms, Functions et Edge.</p>
        </div>
        <div className="card">
          <h3>Présentation</h3>
          <p>
            Chaque page correspond à une fonctionnalité Netlify à expliquer et
            à démontrer devant la professeure.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Home;

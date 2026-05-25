function Home() {
  return (
    <section className="page-card">
      <span className="badge">Technologie choisie</span>
      <h2>Présentation simple de Netlify</h2>

      <p>
        Ce projet est une petite application React qui présente Netlify comme
        une plateforme simple pour mettre une application web en ligne
        automatiquement.
      </p>

      <div className="grid">
        <div className="feature-card">
          <h3>Netlify Forms</h3>
          <p>Recevoir les données d’un formulaire sans créer un backend.</p>
        </div>

        <div className="feature-card">
          <h3>Netlify Functions</h3>
          <p>Exécuter une petite logique backend avec une fonction serverless.</p>
        </div>

        <div className="feature-card">
          <h3>Netlify Edge</h3>
          <p>Exécuter du code plus proche de l’utilisateur.</p>
        </div>

        <div className="feature-card">
          <h3>Netlify CMS</h3>
          <p>Présenter l’idée de gérer le contenu avec une interface admin.</p>
        </div>
      </div>

      <p className="note">
        Le but est de garder une démonstration courte, claire et adaptée à une
        présentation de cinq minutes.
      </p>
    </section>
  );
}

export default Home;

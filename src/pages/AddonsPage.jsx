function AddonsPage() {
  return (
    <section className="page">
      <span className="badge">Concept 8</span>
      <h1>Netlify Addons / Extensions</h1>

      <p>
        Les Addons ou Extensions permettent d'ajouter des services autour d'un
        projet Netlify : analytics, monitoring, CMS, outils de sécurité,
        intégrations Git ou services externes.
      </p>

      <div className="grid">
        <div className="card">
          <h3>Exemple 1</h3>
          <p>Ajouter des outils d'analyse ou de suivi du trafic.</p>
        </div>
        <div className="card">
          <h3>Exemple 2</h3>
          <p>Connecter un CMS ou un service externe au projet.</p>
        </div>
        <div className="card">
          <h3>Exemple 3</h3>
          <p>Ajouter des plugins pendant le build.</p>
        </div>
        <div className="card">
          <h3>Dans notre projet</h3>
          <p>
            Nous expliquons le concept sans installer d'extension payante pour
            garder le projet à 0 MAD.
          </p>
        </div>
      </div>
    </section>
  );
}

export default AddonsPage;

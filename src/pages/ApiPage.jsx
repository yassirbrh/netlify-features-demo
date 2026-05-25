function ApiPage() {
  return (
    <section className="page">
      <span className="badge">Concept 9</span>
      <h1>Netlify API</h1>

      <p>
        Netlify API permet d'interagir avec Netlify par programmation : gérer des
        sites, consulter des déploiements, lire certaines informations ou
        automatiser des tâches.
      </p>

      <pre>{`Frontend React
     ↓
Netlify Function sécurisée
     ↓
Netlify API avec un token privé`}</pre>

      <div className="info-box">
        <h3>Point de sécurité important</h3>
        <p>
          Le token API ne doit jamais être mis directement dans le frontend. Il
          doit rester côté serveur, par exemple dans une Netlify Function avec
          une variable d'environnement.
        </p>
      </div>
    </section>
  );
}

export default ApiPage;

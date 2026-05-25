function DevPage() {
  return (
    <section className="page">
      <span className="badge">Concept 2</span>
      <h1>Netlify Dev</h1>

      <p>
        Netlify Dev est l'environnement local de Netlify. Il permet de tester le
        site localement avec une configuration proche de l'environnement réel de
        Netlify, notamment les redirections et les fonctions.
      </p>

      <pre>{`npm install -g netlify-cli
netlify dev`}</pre>

      <div className="info-box">
        <h3>Démonstration conseillée</h3>
        <p>
          Si Netlify Dev fonctionne sur votre machine, lancez le projet avec
          <strong> netlify dev </strong> et ouvrez <strong>localhost:8888</strong>.
          Sinon, utilisez simplement <strong>npm run dev</strong> pour continuer
          le développement local et testez les fonctions après le déploiement.
        </p>
      </div>
    </section>
  );
}

export default DevPage;

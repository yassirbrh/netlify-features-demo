function CmsPage() {
  return (
    <section className="page">
      <span className="badge">Concept 7</span>
      <h1>Netlify CMS / Decap CMS</h1>

      <p>
        Netlify CMS est aujourd'hui connu sous le nom Decap CMS. L'idée est de
        permettre à un administrateur de modifier du contenu depuis une interface
        <strong> /admin</strong>, au lieu de modifier directement le code.
      </p>

      <a className="button-link" href="/admin/" target="_blank" rel="noreferrer">
        Ouvrir /admin
      </a>

      <div className="info-box">
        <h3>À expliquer oralement</h3>
        <p>
          Pour une démonstration complète du CMS, il faut configurer Identity et
          Git Gateway dans Netlify. Dans ce projet, nous avons préparé le dossier
          <strong> public/admin</strong> pour montrer la structure.
        </p>
      </div>
    </section>
  );
}

export default CmsPage;

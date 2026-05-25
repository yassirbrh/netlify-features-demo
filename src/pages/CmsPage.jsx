function CmsPage() {
  return (
    <section className="page-card">
      <span className="badge">Netlify CMS / Decap CMS</span>
      <h2>Gestion du contenu</h2>

      <p>
        Netlify CMS, appelé aujourd’hui Decap CMS, permet de gérer le contenu
        d’un site depuis une interface d’administration. L’idée est de modifier
        des textes ou des articles sans toucher directement au code.
      </p>

      <div className="info-box">
        <h3>Démonstration simple</h3>
        <p>
          Dans ce projet, nous présentons surtout le concept CMS. Une interface
          statique est disponible sur <strong>/admin</strong>, mais une vraie
          utilisation complète demande une configuration Git/Identity plus
          avancée.
        </p>
      </div>

      <a className="secondary-link" href="/admin" target="_blank">
        Ouvrir /admin
      </a>
    </section>
  );
}

export default CmsPage;

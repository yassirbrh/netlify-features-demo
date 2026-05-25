import { useEffect, useState } from "react";
import netlifyIdentity from "netlify-identity-widget";

function IdentityPage() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    netlifyIdentity.init();
    setUser(netlifyIdentity.currentUser());

    const handleLogin = (loggedUser) => {
      setUser(loggedUser);
      netlifyIdentity.close();
    };

    const handleLogout = () => setUser(null);

    netlifyIdentity.on("login", handleLogin);
    netlifyIdentity.on("logout", handleLogout);

    return () => {
      netlifyIdentity.off("login", handleLogin);
      netlifyIdentity.off("logout", handleLogout);
    };
  }, []);

  return (
    <section className="page">
      <span className="badge">Concept 6</span>
      <h1>Netlify Identity</h1>

      <p>
        Netlify Identity permet de gérer une authentification simple pour un
        projet. Dans cette page, on montre l'idée d'un espace utilisateur.
      </p>

      {!user ? (
        <button className="demo-button" onClick={() => netlifyIdentity.open()}>
          Ouvrir la fenêtre de connexion
        </button>
      ) : (
        <>
          <p className="status-message">
            Utilisateur connecté : {user.email || "utilisateur Netlify"}
          </p>
          <button className="demo-button" onClick={() => netlifyIdentity.logout()}>
            Se déconnecter
          </button>
        </>
      )}

      <div className="warning-message">
        Pour tester cette partie après déploiement, il faut activer Identity dans
        le Dashboard Netlify. Cette étape peut être présentée comme bonus.
      </div>
    </section>
  );
}

export default IdentityPage;

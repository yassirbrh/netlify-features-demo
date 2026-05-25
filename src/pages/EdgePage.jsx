import { useState } from "react";

function EdgePage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testEdge = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/edge-info");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message:
          "Edge Function à tester après le déploiement sur Netlify.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-card">
      <span className="badge">Netlify Edge</span>
      <h2>Code exécuté plus proche de l’utilisateur</h2>

      <p>
        Netlify Edge permet d’exécuter du code au niveau du réseau edge. Cela
        peut servir à personnaliser une réponse selon le pays, l’URL ou le
        contexte de la requête.
      </p>

      <button className="primary-button" onClick={testEdge}>
        Tester Edge Function
      </button>

      {loading && <p className="status">Chargement...</p>}

      {result && (
        <pre className="code-box">{JSON.stringify(result, null, 2)}</pre>
      )}

      <p className="note">
        Test direct après déploiement : <strong>/edge-info</strong>
      </p>
    </section>
  );
}

export default EdgePage;

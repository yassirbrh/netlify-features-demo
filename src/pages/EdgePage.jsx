import { useState } from "react";

function EdgePage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testEdge = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/edge-location");
      if (!response.ok) throw new Error("Edge not available locally");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message:
          "L'Edge Function se teste surtout après déploiement sur Netlify.",
        endpoint: "/edge-location",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      <span className="badge">Concept 5</span>
      <h1>Netlify Edge</h1>

      <p>
        Netlify Edge Functions exécute du code plus proche de l'utilisateur au
        niveau du réseau edge. Cela peut servir à personnaliser une réponse selon
        le pays, l'URL ou le contexte de la requête.
      </p>

      <button className="demo-button" onClick={testEdge}>
        Tester l'Edge Function
      </button>

      {loading && <p className="status-message">Chargement...</p>}
      {result && <pre className="code-result">{JSON.stringify(result, null, 2)}</pre>}

      <div className="info-box">
        <h3>Fichier utilisé</h3>
        <p>
          L'Edge Function se trouve dans
          <strong> netlify/edge-functions/location.js</strong> et répond sur
          <strong> /edge-location</strong> après déploiement.
        </p>
      </div>
    </section>
  );
}

export default EdgePage;

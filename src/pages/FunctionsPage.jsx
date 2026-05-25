import { useState } from "react";

function FunctionsPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testFunction = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/hello");
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message:
          "La fonction sera surtout testée après le déploiement sur Netlify.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page-card">
      <span className="badge">Netlify Functions</span>
      <h2>Mini API serverless</h2>

      <p>
        Netlify Functions permet d’exécuter une petite logique backend sans
        gérer un serveur classique. Dans cette démo, une fonction retourne une
        réponse JSON.
      </p>

      <button className="primary-button" onClick={testFunction}>
        Tester la fonction
      </button>

      {loading && <p className="status">Chargement...</p>}

      {result && (
        <pre className="code-box">{JSON.stringify(result, null, 2)}</pre>
      )}

      <p className="note">
        Test direct après déploiement : <strong>/api/hello</strong>
      </p>
    </section>
  );
}

export default FunctionsPage;

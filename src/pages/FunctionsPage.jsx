import { useState } from "react";

function FunctionsPage() {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const testFunction = async () => {
    setLoading(true);
    setResult(null);

    try {
      const response = await fetch("/api/hello");
      if (!response.ok) {
        throw new Error("Function not available locally");
      }
      const data = await response.json();
      setResult(data);
    } catch (error) {
      setResult({
        success: false,
        message:
          "La fonction sera testée correctement après déploiement sur Netlify ou avec netlify dev.",
        endpoint: "/api/hello",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="page">
      <span className="badge">Concept 4</span>
      <h1>Netlify Functions</h1>

      <p>
        Netlify Functions permet d'ajouter une petite logique backend sans gérer
        un serveur. Dans ce projet, la fonction retourne une réponse JSON.
      </p>

      <button className="demo-button" onClick={testFunction}>
        Tester la fonction serverless
      </button>

      {loading && <p className="status-message">Chargement...</p>}

      {result && <pre className="code-result">{JSON.stringify(result, null, 2)}</pre>}

      <div className="info-box">
        <h3>Fichier utilisé</h3>
        <p>
          La fonction se trouve dans <strong>netlify/functions/hello.cjs</strong>
          et elle est accessible via <strong>/api/hello</strong> grâce à une
          redirection dans <strong>netlify.toml</strong>.
        </p>
      </div>
    </section>
  );
}

export default FunctionsPage;

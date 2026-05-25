import { useState } from "react";

function encode(data) {
  return new URLSearchParams(data).toString();
}

function FormsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    "bot-field": "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData((previousData) => ({
      ...previousData,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Envoi en cours...");

    try {
      await fetch("/", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: encode({
          "form-name": "contact-demo",
          ...formData,
        }),
      });

      setStatus(
        "Message envoyé. Après le déploiement, il sera visible dans Netlify Dashboard > Forms."
      );

      setFormData({
        name: "",
        email: "",
        message: "",
        "bot-field": "",
      });
    } catch (error) {
      setStatus("Erreur pendant l’envoi. Teste le formulaire depuis le lien Netlify déployé.");
    }
  };

  return (
    <section className="page-card">
      <span className="badge">Netlify Forms</span>
      <h2>Formulaire sans backend</h2>

      <p>
        Netlify Forms permet de recevoir les données d’un formulaire sans créer
        un serveur Express, PHP ou Laravel. Les messages envoyés sont consultés
        directement depuis le dashboard Netlify.
      </p>

      <form
        className="demo-form"
        name="contact-demo"
        method="POST"
        data-netlify="true"
        netlify="true"
        netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact-demo" />

        <p className="hidden-field">
          <label>
            Ne pas remplir
            <input name="bot-field" value={formData["bot-field"]} onChange={handleChange} />
          </label>
        </p>

        <label>
          Nom
          <input
            type="text"
            name="name"
            placeholder="Votre nom"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="votre@email.com"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Message
          <textarea
            name="message"
            placeholder="Votre message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>

        <button type="submit">Envoyer le message</button>
      </form>

      {status && <p className="status">{status}</p>}
    </section>
  );
}

export default FormsPage;

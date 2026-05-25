import { useState } from "react";

function FormsPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

  const encode = (data) => new URLSearchParams(data).toString();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((current) => ({ ...current, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    setStatus("Envoi en cours...");

    try {
      await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact-demo", ...formData }),
      });

      setStatus(
        "Message envoyé. Après le déploiement, il sera visible dans Netlify Dashboard > Forms."
      );
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      setStatus(
        "Le formulaire fonctionne réellement après déploiement sur Netlify. En local, l'envoi peut échouer."
      );
    }
  };

  return (
    <section className="page">
      <span className="badge">Concept 3</span>
      <h1>Netlify Forms</h1>

      <p>
        Netlify Forms permet de recevoir des messages depuis un formulaire sans
        créer un backend classique. Netlify détecte le formulaire au moment du
        build grâce au fichier <strong>public/forms.html</strong>.
      </p>

      <form className="demo-form" name="contact-demo" onSubmit={handleSubmit}>
        <input type="hidden" name="form-name" value="contact-demo" />

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

      {status && <p className="status-message">{status}</p>}

      <div className="info-box">
        <h3>À montrer dans Netlify</h3>
        <p>
          Après déploiement, envoyez un message puis ouvrez le Dashboard Netlify,
          section <strong>Forms</strong>, pour montrer la soumission reçue.
        </p>
      </div>
    </section>
  );
}

export default FormsPage;

import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import FormsPage from "./pages/FormsPage.jsx";
import FunctionsPage from "./pages/FunctionsPage.jsx";
import EdgePage from "./pages/EdgePage.jsx";
import CmsPage from "./pages/CmsPage.jsx";
import ConclusionPage from "./pages/ConclusionPage.jsx";

const links = [
  { path: "/", label: "Accueil" },
  { path: "/forms", label: "Forms" },
  { path: "/functions", label: "Functions" },
  { path: "/edge", label: "Edge" },
  { path: "/cms", label: "CMS" },
  { path: "/conclusion", label: "Conclusion" },
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-icon">N</span>
          <div>
            <h1>Netlify Demo</h1>
            <p>Présentation simple</p>
          </div>
        </div>

        <nav className="nav">
          {links.map((link) => (
            <NavLink key={link.path} to={link.path} end={link.path === "/"}>
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/functions" element={<FunctionsPage />} />
          <Route path="/edge" element={<EdgePage />} />
          <Route path="/cms" element={<CmsPage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

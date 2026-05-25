import { NavLink, Route, Routes } from "react-router-dom";

import Home from "./pages/Home.jsx";
import BuildPage from "./pages/BuildPage.jsx";
import DevPage from "./pages/DevPage.jsx";
import FormsPage from "./pages/FormsPage.jsx";
import FunctionsPage from "./pages/FunctionsPage.jsx";
import EdgePage from "./pages/EdgePage.jsx";
import IdentityPage from "./pages/IdentityPage.jsx";
import CmsPage from "./pages/CmsPage.jsx";
import AddonsPage from "./pages/AddonsPage.jsx";
import ApiPage from "./pages/ApiPage.jsx";
import ConclusionPage from "./pages/ConclusionPage.jsx";
import NotFoundPage from "./pages/NotFoundPage.jsx";

import "./App.css";

const links = [
  ["/", "Accueil"],
  ["/build", "Netlify Build"],
  ["/dev", "Netlify Dev"],
  ["/forms", "Netlify Forms"],
  ["/functions", "Netlify Functions"],
  ["/edge", "Netlify Edge"],
  ["/identity", "Netlify Identity"],
  ["/cms", "Netlify CMS / Decap"],
  ["/addons", "Addons / Extensions"],
  ["/api", "Netlify API"],
  ["/conclusion", "Conclusion"],
];

function App() {
  return (
    <div className="app-shell">
      <aside className="sidebar">
        <div className="brand">
          <span className="brand-mark">N</span>
          <div>
            <h1>Netlify Lab</h1>
            <p>Features Demo</p>
          </div>
        </div>

        <nav className="nav-links">
          {links.map(([to, label]) => (
            <NavLink key={to} to={to} end={to === "/"}>
              {label}
            </NavLink>
          ))}
        </nav>
      </aside>

      <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/build" element={<BuildPage />} />
          <Route path="/dev" element={<DevPage />} />
          <Route path="/forms" element={<FormsPage />} />
          <Route path="/functions" element={<FunctionsPage />} />
          <Route path="/edge" element={<EdgePage />} />
          <Route path="/identity" element={<IdentityPage />} />
          <Route path="/cms" element={<CmsPage />} />
          <Route path="/addons" element={<AddonsPage />} />
          <Route path="/api" element={<ApiPage />} />
          <Route path="/conclusion" element={<ConclusionPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;

import Navbar from "./components/Navbar";
import ProjectsSection from "./components/ProjectsSection";
import Footer from "./components/Footer";
import "./App.css";

export default function App() {
  return (
    <div className="app-container">
      <Navbar />

      <header className="hero-section">
        <h1 className="hero-title">David A.</h1>
        <p className="hero-subtitle">
          Software Engineer <span className="separator">·</span> Embedded Engineer
        </p>
      </header>

      <main className="main-content">
        <ProjectsSection />
      </main>

      <Footer />
    </div>
  );
}

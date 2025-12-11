import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">David<span>.</span></div>
      <a
        href="https://github.com/davoidok"
        target="_blank"
        className="navbar-link"
        rel="noreferrer"
      >
        GitHub
      </a>
    </nav>
  );
}
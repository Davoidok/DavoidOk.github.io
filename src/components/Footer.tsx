import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      © {new Date().getFullYear()} Carlos A. — All Rights Reserved :)
    </footer>
  );
}
import style from "./Navbar.module.scss";

// Navbar tager imod props objekt som indeholder vores setState funktion
// Nu kan vi opdaterer currentPage inde fra vores navbar
export function Navbar(props) {
  return (
    <nav className={style.navStyle}>
      <ul>
        <li onClick={() => props.setCurrentPage("frontpage")}>Hjem</li>
        <li>Advokaterne</li>
        <li onClick={() => props.setCurrentPage("aboutpage")}>Om os</li>
        <li>Kontakt</li>
      </ul>

      <p>
        Leo-<span>lov</span>
      </p>
    </nav>
  );
}

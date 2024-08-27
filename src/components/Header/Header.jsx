import style from "./Header.module.scss";

// Header komponent med props
// Props er image og title og muliggør at vi kan skifte title og billede
// når vi kalder komponentent, eks: <Header title="Frontpage"/> eller <Header title="Aboutpage" />
export function Header(props) {
  return (
    <header className={style.headerStyle}>
      <img src={props.image}></img>
      <h2>{props.title}</h2>
    </header>
  );
}

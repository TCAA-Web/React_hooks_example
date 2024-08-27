import { Header } from "../components/Header/Header";
import headerImage from "../assets/images/header.jpg";

export function FrontPage() {
  return (
    <>
      <Header title={"Frontpage"} image={headerImage} />
      <h1>Frontpage</h1>
    </>
  );
}

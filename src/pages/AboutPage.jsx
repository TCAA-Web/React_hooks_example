import { Header } from "../components/Header/Header";
import aboutImage from "../assets/images/aboutpage.jpg";
import { Signup } from "../components/Signup/Signup";

export function AboutPage() {
  return (
    <>
      <Header title={"about page"} image={aboutImage} />
      <Signup />
    </>
  );
}

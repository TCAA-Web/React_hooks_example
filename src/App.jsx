import { useState, useEffect } from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { AboutPage } from "./pages/AboutPage";
import { FrontPage } from "./pages/FrontPage";

function App() {
  // State til at holde styr på hvilken side vi vil vise
  const [currentPage, setCurrentPage] = useState("frontpage");

  // UseEffect der opdaterer vores document title
  useEffect(() => {
    document.title = currentPage;
  }, [currentPage]);

  // useEffect der kun kører én gang fordi der ikke er noget i dependency arrayet
  useEffect(() => {
    console.log("Jeg kører kun en gang ");
  }, []);

  // Conditional rendering der returnerer vores frontpage og navbar når vores state = "frontpage"
  if (currentPage == "frontpage") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <FrontPage />
      </>
    );
  }

  // Condition rendering der returnerer vores aboutpage og navbar når vores state er = "aboutpage"
  if (currentPage == "aboutpage") {
    return (
      <>
        <Navbar setCurrentPage={setCurrentPage} />
        <AboutPage />
      </>
    );
  }
  // Ellers returnere 404
  else {
    <h4>404... siden findes ikke</h4>;
  }
}

export default App;

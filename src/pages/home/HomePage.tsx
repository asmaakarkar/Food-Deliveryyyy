import * as React from "react";
import Contact from "./ContactHome";
import Header from "./HeaderHome";
import About from "./AboutHome";

function Home() {
  return (
    <div>
      <Header />
      <About />
      <Contact />
    </div>
  );
}

export default Home;

import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  const linkElements = links.map((link) => {
    return <a key={link}>{links}</a>;
  });

  return (
    <nav>
      <a href="#home">Home</a>
      <a href="#about">About</a>
      <a href="#projects">Projects</a>
    </nav>
  );
}

export default NavBar;

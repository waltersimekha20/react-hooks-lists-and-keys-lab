import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];
const LinkList=links.map((link)=><a href={`#${link}`} key={link}>{link}</a>)
  return <nav>{LinkList}</nav>;
}

export default NavBar;

import React from "react";
import TopMenu from "../components/TopMenu";
const Header = () => (
  <header>
    <TopMenu isNotHomePage={true} />
  </header>
);

export default Header;

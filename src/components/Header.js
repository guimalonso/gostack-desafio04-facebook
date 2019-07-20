import React from "react";
import logo from "../assets/logo.png";
import account_circle from "../assets/account-circle.png";

function Header() {
  return (
    <header className="main-header">
      <img src={logo} alt="Facebook" />
      <div className="link">
        <span>Meu perfil</span>
        <img src={account_circle} alt="Meu perfil" />
      </div>
    </header>
  );
}

export default Header;

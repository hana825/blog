import React from "react";
import './styles.css';
import { FaGithub } from "react-icons/fa";

const Header = () => (
  <header className='home-header'>
    <h2>welcome!</h2>
    {/* <h1>
      <span>“</span> This is Na's blog <span>”</span>
    </h1> */}
    <p>
      &copy;2022 hana825 <br /> <FaGithub/> https://github.com/hana825
    </p>
  </header>
);

export default Header;

import React from "react";
import { NavLink } from "react-router";

import CvConfig from "../cv-config";
import Logo from '../../assets/images/logo.png';

const Header = () => {
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-3">
      <NavLink to="/">
        <img src={Logo} alt="Logo" className="w-18 h-18 rounded-full" />
      </NavLink>
      <CvConfig className=" w-[200px]" />
    </div>
  )
}

export default React.memo(Header);
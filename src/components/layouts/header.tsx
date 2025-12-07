import React from "react";
import { Grid } from 'antd'
import { NavLink, type NavLinkRenderProps } from "react-router";

import MenuMobile from "../menu";
import CvConfig from "../cv-config";
import Logo from '../../assets/images/logo.png';

const navLinkClass = (props: NavLinkRenderProps) => {
  const { isActive } = props;
  const className = 'transition-all! ease-in-out py-1 border-b-2';

  return `${className} ${isActive ? 'border-primary!' : 'border-transparent'}`;
}

const Header = () => {
  const { useBreakpoint } = Grid;
  const screens = useBreakpoint();

  const isMobile = !screens.md;
  return (
    <div className="flex flex-wrap items-center justify-between w-full px-3">
      <div className="md:w-[200px] bg-pink-300">
        <NavLink to="/">
          <img src={Logo} alt="Logo" className="w-18 h-18 rounded-full" />
        </NavLink>
      </div>
      {!isMobile ? (<>
        <nav className="flex-auto flex gap-10 justify-center ">
          <NavLink to="/" className={navLinkClass}>My CV</NavLink>
          <NavLink to="/contact" className={navLinkClass}>Contact</NavLink>
        </nav>

        <CvConfig className=" w-[200px]" />
      </>) : (
        <MenuMobile />
      )}
    </div>
  )
}

export default React.memo(Header);
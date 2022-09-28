import { useEffect, useLayoutEffect, useRef } from 'react';

const MenuMobile = (props) => {
  return (
    <div className="menu-mobile">
      <div className="menu-mobile-nav fade-in-right3">
        <nav className="mobile-nav">
          <ul>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Home
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              About
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Projects
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Challenges
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              About
            </li>
            <li
              onClick={(e) => {
                props.goToSection(e);
                props.setShowMenuMobile(false);
              }}
            >
              Contact
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default MenuMobile;

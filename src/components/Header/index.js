import React, { useState, useEffect } from "react";
import HamburgerIcon from "./HamburgerIcon";
import CloseIcon from "./CloseIcon";
import { Link, NavLink } from "react-router-dom";
import Button from "../Button/index";
import Logo from "../Icons/Logo";
import "./style.css";

const Header = () => {
  const [isNavExpanded, setIsNavExpanded] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const toggleNav = () => {
    window.scrollTo(0, 0);
    setIsNavExpanded((currentState) => !currentState);
  };

  const handleLink = () => {
    setIsNavExpanded(false);
  };

  useEffect(() => {
    const checkMobileView = () => {
      setIsMobileView(window.innerWidth < 768);
    };
    window.addEventListener("resize", checkMobileView);
    checkMobileView();
    return () => {
      window.removeEventListener("resize", checkMobileView);
    };
  }, []);

  return (
    <>
      <div
        className={`placeholder ${isNavExpanded ? "placeholder--visible" : ""}`}
      />
      <header className={`header ${isNavExpanded ? "header--fixed" : ""}`}>
        <nav className="header__nav global-padding">
          <Link className="header__logo-container" to="#" onClick={handleLink}>
            <Logo width={200} height={50} />
          </Link>
          {isMobileView ? (
            <div className="header__menu-container">
              <button
                type="button"
                className="header__button"
                onClick={toggleNav}
                aria-label="toggle-nav"
                aria-expanded={isNavExpanded}
              >
                {isNavExpanded ? <CloseIcon /> : <HamburgerIcon />}
              </button>
            </div>
          ) : (
            <ul className="header__links-container">
              <li>
                <NavLink className="header__link" to="#" onClick={handleLink}>
                  Startups
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to="#" onClick={handleLink}>
                  Contact
                </NavLink>
              </li>
              <li>
                <NavLink className="header__link" to="#" onClick={handleLink}>
                  <Button
                    variant={"secondary"}
                    size={"md"}
                    name={"Work with us"}
                  >
                    Work with us!
                  </Button>
                </NavLink>
              </li>
            </ul>
          )}
        </nav>
        {isMobileView && (
          <ul
            className={`header__links-container ${
              isNavExpanded ? "header__links-container--visible" : ""
            }`}
          >
            <li>
              <NavLink className="header__link" to="#" onClick={handleLink}>
                Startups
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="#" onClick={handleLink}>
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="header__link" to="#" onClick={handleLink}>
                <Button variant={"secondary"} size={"md"} name={"Work with us"}>
                  Work with us!
                </Button>
              </NavLink>
            </li>
          </ul>
        )}
      </header>
    </>
  );
};

export default Header;

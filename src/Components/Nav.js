import React, { useRef, useState } from "react";
import * as Styles from "../styles/nav";
import { FaAirbnb as Logoicon, FaUserCircle as Usericon } from "react-icons/fa";
import { useEffect } from "react";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const headerRef = useRef();

  useEffect(() => {
    const closemenu = (e) => {
      console.log(e);
      if (headerRef.current && !headerRef.current.contains(e.target)) {
        setOpenMenu(false);
      }
    };
    document.body.addEventListener("click", closemenu);
    return () => {
      document.body.removeEventListener("click", closemenu);
    };
  }, []);

  return (
    <Styles.Wrapper>
      <Styles.Logo>
        <Logoicon size={37} color={"#FF5A5F"} />
        <h3>airbnb</h3>
      </Styles.Logo>
      <Styles.UsermenuWrapper ref={headerRef}>
        <Styles.UsermenuHeader onClick={() => setOpenMenu(!openMenu)}>
          <Styles.HamMenu>
            <div
              style={{ transform: openMenu ? "rotate(45deg)" : "rotate(0)" }}
            />
            <div style={{ opacity: openMenu ? "0" : "1" }} />
            <div
              style={{ transform: openMenu ? "rotate(-45deg)" : "rotate(0)" }}
            />
          </Styles.HamMenu>
          <Usericon size={26} color="#707070" />
        </Styles.UsermenuHeader>
        <Styles.UsermenuContent open={openMenu}>
          <div>
            <Styles.Menuitems onClick={() => setOpenMenu(false)}>
              <h4>Sign up</h4>
            </Styles.Menuitems>
            <Styles.Menuitems onClick={() => setOpenMenu(false)}>
              <h4>Log In</h4>
            </Styles.Menuitems>
          </div>
          <div>
            <Styles.Menuitems onClick={() => setOpenMenu(false)}>
              <h4>Host your home</h4>
            </Styles.Menuitems>
            <Styles.Menuitems onClick={() => setOpenMenu(false)}>
              <h4>Host your experience</h4>
            </Styles.Menuitems>
            <Styles.Menuitems onClick={() => setOpenMenu(false)}>
              <h4>Help</h4>
            </Styles.Menuitems>
          </div>
        </Styles.UsermenuContent>
      </Styles.UsermenuWrapper>
    </Styles.Wrapper>
  );
};

export default Nav;

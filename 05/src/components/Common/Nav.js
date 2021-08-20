import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import navstyle from "./Nav.css";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      navs: ["Popular", "Battle"]
    };
  }

  isActive = nav => {
    const param = window.location.hash.split("#")[1].replace("/", "");
    const idx = param.indexOf("battle");
    if (nav === "Popular") {
      return idx === -1;
    }
    return idx !== -1;
  };

  render() {
    const { navs } = this.state;
    return (
      <div>
        <ul className={navstyle.top}>
          {navs.map((nav, index) => (
            <li key={index}>
              <NavLink
                isActive={() => this.isActive(nav)}
                activeStyle={{ color: "rgb(180, 44, 30)" }}
                to={nav === "Popular" ? "/all" : "/battle"}
              >
                {nav}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

export default Nav;

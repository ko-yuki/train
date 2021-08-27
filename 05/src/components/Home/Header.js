// 定义头部
import React from "react";
import { NavLink } from "react-router-dom";
import header from "./Header.css";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      title: ["All", "JavaScript", "Ruby", "Java", "CSS", "Python"]
    };
  }

  render() {
    const { title } = this.state;
    return (
      <ul className={header.header}>
        {title.map((item, index) => (
          <li key={index}>
            <NavLink activeClassName={header.actived} to={item.toLowerCase()}>
              {item}
            </NavLink>
          </li>
        ))}
      </ul>
    );
  }
}
export default Header;

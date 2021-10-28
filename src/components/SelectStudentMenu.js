import React from "react";
import { studentsSorted } from "../data/dataTools";
import { Link } from "react-router-dom";

function SelectStudentMenu(props) {
  const linkItems = studentsSorted.map(function (name) {
    return (
      <li key={name}>
        <Link to={`${name}`} onClick={() => props.handleRoute(name)}>
          {name}
        </Link>
      </li>
    );
  });
  return (
    <nav>
      <div className="dropdown-menu">
        <span id="select-student">Select Student's Name</span>
        <div className="dropdown-menu-content">
          <ul>{linkItems}</ul>
        </div>
      </div>
    </nav>
  );
}

export default SelectStudentMenu;

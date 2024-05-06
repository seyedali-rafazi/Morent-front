import React from "react";
import { NavLink } from "react-router-dom";

function NavOptions({ path, children, onClose }) {
  return (
    <NavLink
      onClick={onClose}
      to={path}
      style={({ isActive }) => ({
        backgroundColor: isActive ? "#3563E9" : "inherit",
        color: isActive ? "#ffffff" : "#90A3BF",
        display: "flex",
        alignItems: "center",
        gap: "8px",
        padding: "12px",
        borderRadius: "8px",
        fontSize: "20px",
        whiteSpace:"nowrap"
      })}
    >
      {children}
    </NavLink>
  );
}

export default NavOptions;

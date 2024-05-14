import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import generateUniqueId from "generate-unique-id";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const navItems = [
  {
    text: "Home",
    path: "/",
  },
  {
    text: "Favoutires",
    path: "/user-profile/user-favourit",
  },
  {
    text: "Orders",
    path: "/user-profile/user-order",
  },
];

function SidebarItems({ user }) {
  const navigate = useNavigate();

  const handelUser = () => {
    navigate("/auth");
    toast.error("Login into your page");
  };

  return (
    <List>
      {navItems.map((item) => (
        <ListItem key={generateUniqueId()} disablePadding>
          <ListItemButton sx={{ textAlign: "center" }}>
            {!user ? (
              <ListItemText primary={item.text} onClick={handelUser} />
            ) : (
              <ListItemText
                primary={item.text}
                onClick={() => navigate(item.path)}
              />
            )}
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarItems;

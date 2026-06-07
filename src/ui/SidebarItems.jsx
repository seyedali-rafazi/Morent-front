import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";
import { useNavigate } from "react-router-dom";

const navItems = [
  { text: "Home", path: "/", public: true },
  { text: "Browse Cars", path: "/available-cars", public: true },
  { text: "Favourites", path: "/user-profile/user-favourit", public: false },
  { text: "Orders", path: "/user-profile/user-order", public: false },
  { text: "Cart", path: "/user-card", public: false },
];

function SidebarItems({ user, onNavigate }) {
  const navigate = useNavigate();

  const handleNav = (item) => {
    if (!item.public && !user) {
      navigate("/auth");
    } else {
      navigate(item.path);
    }
    onNavigate?.();
  };

  return (
    <List sx={{ px: 1, py: 2 }}>
      {navItems.map((item) => (
        <ListItem key={item.path} disablePadding sx={{ mb: 0.5 }}>
          <ListItemButton
            onClick={() => handleNav(item)}
            sx={{
              borderRadius: "12px",
              "&:hover": { bgcolor: "primary.200" },
            }}
          >
            <ListItemText
              primary={item.text}
              primaryTypographyProps={{ fontWeight: 600, fontSize: "15px" }}
            />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
}

export default SidebarItems;

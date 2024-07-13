import React from "react";
import { Drawer, List, ListItem, ListItemText, Box } from "@mui/material";
import { useNavigate } from "react-router-dom"; // Import useNavigate for navigation

const pages = [
  { label: "Home", path: "/" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

const Sidebar = ({ open, onClose }) => {
  const navigate = useNavigate(); // Replace useHistory with useNavigate

  const navigateTo = (path) => {
    navigate(path);
    onClose(); // Close the sidebar after navigation
  };

  return (
    <Drawer
      anchor="left"
      open={open}
      onClose={onClose}
      variant="temporary"
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}
    >
      <Box sx={{ width: 250 }}>
        <List>
          {pages.map((page, index) => (
            <ListItem button key={index} onClick={() => navigateTo(page.path)}>
              <ListItemText primary={page.label} />
            </ListItem>
          ))}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;

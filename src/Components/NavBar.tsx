import {
  AppBar,
  Box,
  Toolbar,
  Button,
  Typography,
  IconButton,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

import { auth } from "../firebase";
import { onAuthStateChanged, signOut, User } from "firebase/auth";

function NavBar() {
  const navigate = useNavigate();
  const [user, setUser] = useState<User | null>(null);
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 960);

  // Responsive toggle
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 960);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Firebase auth state listener
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });
    return unsubscribe;
  }, []);

  const handleLoginLogout = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          navigate("/"); // Redirect on logout
        })
        .catch((err) => {
          console.error("Logout error:", err);
        });
    } else {
      navigate("/login");
    }
    setDrawerOpen(false);
  };

  const handleNavClick = (path: string) => {
    navigate(path);
    setDrawerOpen(false);
  };

  const menuItems = [
    { label: "Welcome", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contributors", path: "/contributors" },
    { label: "AI Initiatives", path: "/projects" },
    { label: user ? "Logout" : "Login", path: "/login", isLogin: true },
  ];

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Typography
            variant="h4"
            color="#fff"
            sx={{
              fontWeight: "bold",
              lineHeight: 1,
              cursor: "pointer",
            }}
            onClick={() => navigate("/")}
          >
            HealthLitPro
          </Typography>

          {isMobile ? (
            <>
              <IconButton
                color="inherit"
                edge="end"
                onClick={() => setDrawerOpen(true)}
              >
                <MenuIcon />
              </IconButton>

              <Drawer
                anchor="right"
                open={drawerOpen}
                onClose={() => setDrawerOpen(false)}
              >
                <Box sx={{ width: 250 }}>
                  <List>
                    {menuItems.map(({ label, path, isLogin }) => (
                      <ListItem key={label} disablePadding>
                        <ListItemButton
                          onClick={() =>
                            isLogin ? handleLoginLogout() : handleNavClick(path)
                          }
                        >
                          <ListItemText primary={label} />
                        </ListItemButton>
                      </ListItem>
                    ))}
                  </List>
                </Box>
              </Drawer>
            </>
          ) : (
            <Box sx={{ display: "flex", gap: 5 }}>
              {menuItems.map(({ label, path, isLogin }) => (
                <Button
                  key={label}
                  color="inherit"
                  onClick={() =>
                    isLogin ? handleLoginLogout() : handleNavClick(path)
                  }
                >
                  {label}
                </Button>
              ))}
            </Box>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;

import { AppBar, Box, Toolbar, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar>
                    <Box sx={{ display: "flex", gap: 2, mx: "auto"}}>
                        <Button color="inherit" onClick={() => navigate("/")}>Home</Button>
                        <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
                        <Button color="inherit" onClick={() => navigate("/projects")}>Other Projects</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;
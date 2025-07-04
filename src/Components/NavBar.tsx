import { AppBar, Box, Toolbar, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function NavBar() {

    const navigate = useNavigate();

    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <Toolbar sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <Typography variant='h4' color='#fff' sx={{ fontWeight: 'bold', m: 0, lineHeight: 1, cursor: "pointer" }} onClick={() => navigate("/")}>
                        HealthLitPro    
                    </Typography>    
                    <Box sx={{ display: "flex", gap: 5}}>
                        <Button color="inherit" onClick={() => navigate("/")}>Welcome</Button>
                        <Button color="inherit" onClick={() => navigate("/about")}>About</Button>
                        <Button color="inherit" onClick={() => navigate("/contributors")}>Contributors</Button>
                        <Button color="inherit" onClick={() => navigate("/projects")}>AI Initatives</Button>
                    </Box>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default NavBar;

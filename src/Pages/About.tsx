import {
  Container,
  CssBaseline,
  Stack,
  Box,
  Typography,
  Grid,
  CardMedia,
} from "@mui/material";
import NavBar from "../Components/NavBar";
import maImg from "../assets/ma.jpg";
import pattonImg from "../assets/patton.jpg";
import zhangImg from "../assets/zhang.jpeg";
import howeImg from "../assets/howe.jpg";
import lewisImg from "../assets/lewis.jpg";

function About() {
    return (
        <div>
            <NavBar />
            <h1>About</h1>
            <p>This is the about page.</p>
            <CardMedia
                component="img"
                className="memberImg"
                src={howeImg}
                sx={{ maxWidth: "100%" }}
                onClick={() =>
                  (location.href = `https://harriscollege.tcu.edu/faculty_staff/carol-howe/`)
                }
              />
        </div>
    );
}

export default About;
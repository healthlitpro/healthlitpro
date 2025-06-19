import {
  Stack,
  Box,
  Typography,
  Card
} from "@mui/material";
import NavBar from "../Components/NavBar";
import Carousel from "../Components/Carousel";

function Home() {
     return (
    <>
      <div>
        <NavBar />
        <Box
        maxWidth="md"
        display="flex"
        sx={{
          width: "100%",
          margin: "auto",
          marginTop: "5vh",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Stack spacing={2} alignItems="center">
          <Typography variant="h2">
            Home 
          </Typography>
          <Card sx={{ padding: 3, maxWidth: "100%" }}>
            <Typography variant="body1" align="center">
            Parents with low health literacy may struggle to understand health
            information. Nurses are well- positioned to adopt health literacy
            practices which have been shown to improve child outcomes. When
            translating evidence into practice, fidelity to health literacy
            practices such as using plain language, limiting information to 3-5
            key topics, and using teach back is important to realize outcomes
            seen in controlled studies. Despite health literacy training
            efforts, adoption of health literacy practices has been challenging.
            Audit and feedback is an evidence based implementation strategy that
            has been shown to change clinician behavior but is a human resource
            intensive strategy. The emergence of artificial intelligence tools
            has improved efficiency and may expedite audit and feedback
            processes. This project hopes to develop and and validate of an
            AI-based audit and feedback tool tailored specifically to address
            the fidelity of health literacy practices.
          </Typography>
          </Card>
        </Stack>
      </Box>
      <br />
      <br />
      <br />
        <Carousel/>
      </div>
      
    </>
  );
};



  
  export default Home;
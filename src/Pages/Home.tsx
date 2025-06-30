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
    
          {/* <Card sx={{ padding: 3, maxWidth: "100%" }}> */}
          <Card
  sx={{
    padding: 4,
    maxWidth: "900px",
    borderRadius: "30px",
    background: "linear-gradient(145deg, #e0f7fa, #ffffff)",
    boxShadow: "0 10px 20px rgba(0,0,0,0.1)",
    border: "1px solid #cfe8fc",
  }}
>
  <h1 style={{ textAlign: "center" }}>Welcome!</h1>
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
  <div style={{ display: "flex", justifyContent: "center", marginTop: 24 }}>
  <button
    onClick={() => {
      const carousel = document.getElementById('carousel-section');
      if (carousel) carousel.scrollIntoView({ behavior: 'smooth' });
    }}
    style={{
      backgroundColor: "#3eb489",
      color: "#fff",
      border: "none",
      borderRadius: "30px",
      padding: "0 24px",
      height: 56,
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      cursor: "pointer",
      boxShadow: "0 4px 8px rgba(0,0,0,0.15)",
      transition: "background 0.3s",
      fontSize: 20,
      fontWeight: 600,
      gap: 12,
    }}
  >
    Try It! <span style={{ fontSize: 28, marginLeft: 8 }}>↓</span>
  </button>
</div>
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
import {
  Box,
  Typography,
  Card,
  Container,
  CssBaseline,
  Stack,
} from "@mui/material";
import NavBar from "../Components/NavBar";

function About() {
  return (
    <div>
      <NavBar />
      <CssBaseline />
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
            <Typography variant="h3" align="center" gutterBottom>
              About the Project
            </Typography>

            <Typography variant="body1">
              Health literacy is a key determinant of health outcomes, especially in pediatrics
              where parents are often the gatekeepers of a child’s healthcare. Nurses play a central
              role in patient education and can directly influence parent understanding and decision-making.
              Yet, even after training in health literacy practices, consistent and faithful application
              ("fidelity") remains a challenge.
            </Typography>

            <Typography variant="body1">
              Key evidence-based practices that improve understanding include:
              using plain language to simplify medical jargon, limiting content to 3–5 key topics,
              and using the teach-back method to ensure comprehension. However, despite educational efforts,
              nurses often struggle to implement these consistently due to time constraints and lack of real-time feedback.
            </Typography>

            <Typography variant="body1">
              This project aims to develop and validate an AI-powered audit and feedback tool that can automatically
              review nurse-patient communication (e.g., documentation or educational transcripts) to evaluate fidelity
              to health literacy practices. Using natural language processing (NLP), the tool analyzes whether plain
              language was used, counts the number of distinct concepts introduced, and detects teach-back techniques.
            </Typography>

            <Typography variant="body1">
              The AI system then provides tailored feedback to nurses, highlighting areas for improvement and reinforcing
              health literacy strategies. This tool is intended to support ongoing practice improvement in a scalable,
              efficient, and sustainable way—ultimately helping nurses deliver more effective communication and improving
              outcomes for children and families.
            </Typography>
          </Card>
        </Stack>
      </Box>
    </div>
  );
}

export default About;

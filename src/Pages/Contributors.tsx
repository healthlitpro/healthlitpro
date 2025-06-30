import {
  Box,
  Typography,
  Card,
  CardMedia,
  CardContent,
  Modal,
  Button,
} from "@mui/material";
import { Grid } from "@mui/material";
import NavBar from "../Components/NavBar";
import maImg from "../assets/ma.jpg";
import pattonImg from "../assets/patton.jpg";
import zhangImg from "../assets/zhang.jpeg";
import howeImg from "../assets/howe.jpg";
import lewisImg from "../assets/lewis.jpg";
import { useState } from "react";

const people = [
  {
    section: "Founders",
    members: [
      {
        name: "Liran Ma",
        title: "Founder",
        img: maImg,
        bio: "[Add more bio here.]",
      },
      {
        name: "Carol Howe",
        title: "Founder",
        img: howeImg,
        bio: "[Add more bio here.]",
      },
    ],
  },
  {
    section: "Researchers",
    members: [
      {
        name: "Patton",
        title: "Researcher",
        img: pattonImg,
        bio: "[Add more bio here.]",
      },
      {
        name: "Zhang",
        title: "Researcher",
        img: zhangImg,
        bio: "[Add more bio here.]",
      },
      {
        name: "Lewis",
        title: "Researcher",
        img: lewisImg,
        bio: "[Add more bio here.]",
      },
    ],
  },
   {
    section: "Graduate Students",
    members: [
      
    ],
  },
  {
    section: "Undergraduate Students",
    members: [
      
    ],
  },
  {
    section: "Undergraduate Developers",
    members: [
     
    ],
  },
];

function Contributors() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<any>(null);

  const handleOpen = (person: any) => {
    setSelected(person);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelected(null);
  };

  return (
    <div>
      <NavBar />
      <Box sx={{ maxWidth: 1200, mx: "auto", p: 3 }}>
        <Typography variant="h3" align="center" gutterBottom>
          Contributors
        </Typography>
        {people.map((group) => (
          <Box key={group.section} sx={{ mb: 5 }}>
            <Typography variant="h5" sx={{ mb: 2 }}>
              {group.section}
            </Typography>
            <Grid container spacing={3}>
              {group.members.map((person) => (
                <Grid item xs={12} sm={6} md={3} key={person.name}>
                  <Card
                    sx={{
                      cursor: "pointer",
                      transition: "transform 0.2s",
                      "&:hover": { transform: "scale(1.05)" },
                      textAlign: "center",
                    }}
                    onClick={() => handleOpen(person)}
                  >
                    <CardMedia
                      component="img"
                      image={person.img}
                      alt={person.name}
                      sx={{
                        height: 220,
                        objectFit: "cover",
                        borderRadius: "8px 8px 0 0",
                      }}
                    />
                    <CardContent>
                      <Typography variant="h6">{person.name}</Typography>
                      <Typography variant="body2" color="text.secondary">
                        {person.title}
                      </Typography>
                    </CardContent>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Box>
      <Modal open={open} onClose={handleClose}>
        <Box
          sx={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            bgcolor: "background.paper",
            boxShadow: 24,
            p: 4,
            borderRadius: 2,
            minWidth: 300,
            maxWidth: 400,
          }}
        >
          {selected && (
            <>
              <CardMedia
                component="img"
                image={selected.img}
                alt={selected.name}
                sx={{
                  width: "100%",
                  height: 180, 
                  objectFit: "contain", 
                  backgroundColor: "#f5f5f5",
                  borderRadius: 2,
                  mb: 2,
                  display: "block",
                  mx: "auto",
                }}
              />
              <Typography variant="h5">{selected.name}</Typography>
              <Typography variant="subtitle1" color="text.secondary">
                {selected.title}
              </Typography>
              <Typography sx={{ mt: 2 }}>{selected.bio}</Typography>
              <Button
                onClick={handleClose}
                sx={{ mt: 2, fontSize: 14, padding: "4px 16px", minWidth: 0 }}
                variant="contained"
              >
                Close
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}

export default Contributors;
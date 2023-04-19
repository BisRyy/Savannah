import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import { Box, Button, Container, IconButton, Input, InputAdornment, OutlinedInput, TextField, Typography, alpha } from "@mui/material";
import Chat from "./chat";
import { useState } from "react";

export default function Hero() {

  const [open, setOpen] = useState(false);

    const handleOpen = () => {
      setOpen(true);
    };

    const handleClose = () => {
      setOpen(false);
    };

  const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
    width: 500,
    borderRadius: 80,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      width: 520,
      boxShadow: theme.customShadows.z8,
    },
    "& fieldset": {
      borderWidth: `1px !important`,
      borderColor: `${alpha(theme.palette.grey[500], 0.32)} !important`,
    },
  }));

  const Title = styled(Typography)(({ theme }) => ({
    fontSize: "24px",
    color: "orange",
    fontWeight: "bold",
    margin: theme.spacing(4, 0, 4, 0),
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  }));

  return (
    <>
      <Box
        sx={{
          minHeight: "100vh",
          pb: 3,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          // border: "2px solid red",
          backgroundImage: "url(/images/Your_career_compass1.png)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          color: "white",
        }}
      >
        <img
          src="/images/Savannah_logo_white.png"
          alt="heroImg"
          style={{ maxWidth: "20rem" }}
        />
        {/* <Typography
          variant="body2"r Com
          sx={{
            fontSize: "18px",
            color: "#687690",
            fontWeight: "500",
            mt: { md: 6, sm: 0 },
            mb: 4,
          }}
        >
          Your Career Compass.
        </Typography> */}
        <Title variant="h2">Your Career Compass.</Title>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            color: "white",
            mb: 4,
            width: { md: "50%", sm: "10%" },
            textAlign: "center",
          }}
        >
          A comprehensive online platform that provides easy access to career
          resources, including internships, extracurricular activities,
          certifications, and other relevant information for African university
          students.
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
          }}
        >
          <StyledSearch
            // value={filterName}
            // onChange={onFilterName}
            placeholder="Search for a career path"
            endAdornment={
              <InputAdornment position="start">
                <IconButton>
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
          {" ------- or -------"}

          <Button variant="contained" onClick={() => setOpen(true)}>
            Ask Savannah
          </Button>
          <Chat open={open} handleOpen={handleOpen} handleClose={handleClose} />
        </Box>
      </Box>
    </>
  );
}

import styled from "@emotion/styled";
import { ArrowBack, ArrowForward, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  IconButton,
  Input,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import Chat from "./chat";
import { useState } from "react";
import CareerDetails from "./careerDetails";

export default function Career({ data }) {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(1);

  const handleLeft = () => {
    if (current > 1) {
      setCurrent(current - 1);
    }
  };

  const handleRight = () => {
    if (current < 2) {
      setCurrent(current + 1);
    }
  };

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
          // justifyContent: "center",
          // border: "2px solid red",
          backgroundImage: `url(${data.image})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "end",
        }}
      >
        {/* <img
          src="/images/Savannah_logo_white.png"
          alt="heroImg"
          style={{ maxWidth: "20rem" }}
        /> */}
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            // border: "2px solid red",
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(0, 0, 0, 0.5)",
          }}
        >
          <Title variant="h2"> {data.major} </Title>
          <Typography
            variant="body2"
            sx={{
              fontSize: "18px",
              color: "white",
              mb: 4,
              maxWidth: 700,
              textAlign: "center",
            }}
          >
            {data.about}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            // justifyContent: "center",
            alignItems: "center",
            // padding: 5,
          }}
        >
          <IconButton sx={{ color: "white", position: 'absolute', left: 20 }} onClick={handleLeft}  >
            <ArrowBack />
          </IconButton>
          <Box
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              padding: 4,
            }}
          >
            {console.log(current)}
            {[0, 1, 2, 3].map((item) => (
              <Card
                key={item}
                onClick={() => {
                  setSelected(item);
                  handleOpen();
                }}
                sx={{
                  "&:hover": {
                    cursor: "pointer",
                    backgroundColor: "rgba(0, 0, 0, 0.5)",
                    color: "white",
                    boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
                    border: ".5px solid white",
                    transition: "all 0.3s ease-in-out",
                  },
                  p: 2,
                  mb: 4,
                  width: "100%",
                  maxWidth: 500,
                }}
              >
                <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                  {data.pages[item * current].title}
                </Typography>
                <Typography variant="body2" sx={{ color: "text.secondary" }}>
                  {data.pages[item * current].subtitle}
                </Typography>
              </Card>
            ))}
          </Box>
          <IconButton sx={{ color: "white", position:'absolute', right:20 }} onClick={handleRight}>
            <ArrowForward />
          </IconButton>
        </Box>
      </Box>

      {open && (
        <CareerDetails
          open={open}
          handleClose={handleClose}
          selected={selected}
          data={data.pages[selected]}
        />
      )}
    </>
  );
}

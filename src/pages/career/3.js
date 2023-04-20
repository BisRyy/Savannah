import styled from "@emotion/styled";
import { ArrowBack, ArrowForward, Search } from "@mui/icons-material";
import {
  Box,
  Button,
  Card,
  Container,
  Grid,
  IconButton,
  Input,
  InputAdornment,
  Link,
  OutlinedInput,
  TextField,
  Typography,
  alpha,
} from "@mui/material";
import { useState } from "react";
import CareerDetails from "../../sections/careerDetails";
import { useRouter } from "next/router";
import bulkData from "../../sections/data";

export default function Career() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(bulkData[3]);

  console.log("id", id);

  // id !== undefined && setData(bulkData[id]);

  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState(null);
  const [current, setCurrent] = useState(0);
  const [perPage, setPerPage] = useState(4);

  const handleLeft = () => {
    if (current > 0) {
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
          backgroundImage: `url(/images/Your_career_compass1.png)`,
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
            justifyContent: "center",
            alignItems: "center",
            padding: 5,
          }}
        >
          {current !== 0 && (
            <IconButton
              sx={{ color: "white", position: "absolute", left: 20 }}
              onClick={handleLeft}
            >
              <ArrowBack />
            </IconButton>
          )}
          <Box
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              padding: "auto",
              maxWidth: "70%",
            }}
          >
            {data.pages
              .slice(current * perPage, current * perPage + perPage)
              .map((item, index) => (
                <Grid item xs={12} sm={6} md={6} lg={6} key={index}>
                  <Card
                    onClick={() => {
                      setSelected(current * perPage + index);
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
                      height: "100px",
                      minWidth: { xs: 300, sm: 300, md: 350, lg: 400 },
                      maxWidth: { xs: 300, sm: 300, md: 350, lg: 400 },
                    }}
                  >
                    <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.subtitle}
                    </Typography>
                  </Card>
                </Grid>
              ))}
          </Box>
          {current !== 2 && (
            <IconButton
              sx={{ color: "white", position: "absolute", right: 20 }}
              onClick={handleRight}
            >
              <ArrowForward />
            </IconButton>
          )}
        </Box>
        <Link href="/">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "ff9d00",
              color: "white",
              fontWeight: "bold",
              position: "relative",
              bottom: 10,
              right: 20,
            }}
          >
            <ArrowBack />
            Back to Home
          </Button>
        </Link>
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

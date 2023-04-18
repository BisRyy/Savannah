import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import { Box, Button, Container, Input, TextField, Typography } from "@mui/material";

export default function Hero() {
  const CustomBox = styled(Box)(({ theme }) => ({
    display: "flex",
    justifyContent: "center",
    gap: theme.spacing(5),
    paddingBottom: theme.spacing(3),
    alignItems: "center",
    flexDirection: "column",
    // [theme.breakpoints.down("md")]: {
    //   alignItems: "center",
    //   textAlign: "center",
    // },
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
        <Box sx={{ display: "flex", gap: 3, alignItems: "center" }}>
          <Input
            variant="filled"
            width="100rem"
            underline="none"
            padding="10px"
            hover="none"
            placeholder="Search your major or dream career..."
            size="large"
            sx={{
              borderRadius: 5,
              backgroundColor: "white",
            }}
            endAdornment={
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 48,
                  height: 48,
                  borderRadius: 1,
                  cursor: "pointer",
                }}
              >
                <Search />
              </Box>
            }
          />
        </Box>
      </Box>
    </>
  );
}

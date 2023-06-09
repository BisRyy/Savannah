import Career from "@/sections/career";
import Hero from "@/sections/hero";
import data from '../sections/data';
import { Box, Button } from "@mui/material";

export default function Home() {

  return (
    <>
      <Box
        sx={{
          display: "flex",
          maxWidth: "20rem",
          position: "absolute",
          top: "1rem",
          right: "1rem",
        }}
      >
        <Button variant="contained" href="/">
          en
        </Button>
        <Button href="/am">Am</Button>
      </Box>
      <Hero />
    </>
  );
}

import Hero from "@/sectionsA/hero";
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
        <Button href="/">en</Button>
        <Button variant="contained" href="/am">
          Am
        </Button>
      </Box>
      <Hero />
    </>
  );
}

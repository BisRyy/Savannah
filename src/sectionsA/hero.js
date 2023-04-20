import styled from "@emotion/styled";
import { Search } from "@mui/icons-material";
import {
  Autocomplete,
  Box,
  Button,
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
import { useEffect, useState } from "react";
import Fuse from "fuse.js";
import data from "./data";
import SearchResult from "./search";

export default function Hero() {
  const [open, setOpen] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);

  const handleOpenSearch = () => {
    setOpenSearch(true);
  };

  const handleCloseSearch = () => {
    setOpenSearch(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const StyledSearch = styled(OutlinedInput)(({ theme }) => ({
    maxWidth: 500,
    borderRadius: 80,
    backgroundColor: theme.palette.background.paper,
    transition: theme.transitions.create(["box-shadow", "width"], {
      easing: theme.transitions.easing.easeInOut,
      duration: theme.transitions.duration.shorter,
    }),
    "&.Mui-focused": {
      // maxWidth: 520,
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

  const options = {
    includeScore: true,
    keys: [
      {
        name: "major",
        weight: 0.6,
      },
      {
        name: "about",
        weight: 0.3,
      },
    ],
  };

  const fuse = new Fuse(data, options);
  const [value, setValue] = useState("");
  const [result, setResult] = useState([]);

  useEffect(() => {
    setResult(fuse.search(value));
  }, [value]);

  // Create a new instance of Fuse
  const handleSearch = () => {
    setResult(fuse.search(value));
    console.log("result", result);
    console.log("value", value);
    if (result.length > 0) {
      handleOpenSearch();
    }
  };

  // Now search for 'Man'

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
        <Title variant="h2"> የእናንተ የሙያ ኮምፓስ.</Title>
        <Typography
          variant="body2"
          sx={{
            fontSize: "18px",
            color: "white",
            mb: 4,
            px: 2,
            textAlign: "center",
            width: { md: "60%", sm: "90%" },
          }}
        >
          ልምምዶችን፣ ከመደበኛ ትምህርት ውጭ እንቅስቃሴዎችን፣ የምስክር ወረቀቶችን እና ሌሎች ለአፍሪካ ዩኒቨርሲቲ
          ተማሪዎች ጠቃሚ መረጃዎችን ጨምሮ ለሙያ ግብአቶች ቀላል መዳረሻ የሚሰጥ አጠቃላይ የመስመር ላይ መድረክ።
        </Typography>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 3,
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <StyledSearch
            value={value}
            onChange={(e) => setValue(e.target.value)}
            onKeyPress={(event) => {
              if (event.key === "Enter") {
                handleSearch();
              }
            }}
            autoFocus
            placeholder="ሜጀሮን ይፈልጉ… "
            endAdornment={
              <InputAdornment position="start">
                <IconButton onClick={handleSearch}>
                  <Search />
                </IconButton>
              </InputAdornment>
            }
          />
          {" ------- or -------"}

          <Button
            variant="contained"
            onClick={() => setOpen(true)}
            sx={{
              backgroundColor: "ff9d00",
              color: "white",
              fontWeight: "bold",
            }}
          >
            ሳቫናን የጠይቁ
          </Button>
          <Chat open={open} handleOpen={handleOpen} handleClose={handleClose} />
          <SearchResult
            open={openSearch}
            handleOpen={handleOpenSearch}
            handleClose={handleCloseSearch}
            data={result}
          />
        </Box>
      </Box>
    </>
  );
}

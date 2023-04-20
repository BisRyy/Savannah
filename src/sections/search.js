import { useState } from "react";
import {
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Grid,
  Input,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import Link from "next/link";
import { useRouter } from "next/router";

export default function SearchResult({ open, handleOpen, handleClose, data }) {
  const router = useRouter();

  const handleClick = (index) => {
    console.log("index", index);
    router.push({
      pathname: `/career/${index}`,
      query: { id: index },
    });
  };

  return (
    <>
      <Dialog open={open} maxWidth="md" fullWidth onClose={handleClose}>
        <DialogTitle
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4"> Search Results</Typography>
          <Button onClick={handleClose}>Close</Button>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              // flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              padding: 2,
              // backgroundColor: "rgba(0,0,0,0.05)",
              // maxWidth: "70%",
            }}
          >
            {data.map((item, index) => (
              // <Grid item xs={12} sm={10} md={5} lg={6} key={index}>
                <Card
                  onClick={() => {
                    handleClick(item.refIndex);
                  }}
                  sx={{
                    "&:hover": {
                      cursor: "pointer",
                      boxShadow: 3,
                      border: "1px solid #000",

                    },
                    p: 2,
                    mb: 4,
                    width: "100%",
                    height: "100px",
                    backgroundColor: "rgba(0,0,0,0.05)",
                    minWidth: { xs: 300, sm: 300, md: 350, lg: 400 },
                    maxWidth: { xs: 300, sm: 300, md: 350, lg: 400 },
                  }}
                  key={index}
                >
                  <Typography variant="h6" sx={{ mb: 1, fontWeight: "bold" }}>
                    {item.item.major}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "text.secondary" }}>
                    {item.item.about}
                  </Typography>
                </Card>
              // </Grid>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

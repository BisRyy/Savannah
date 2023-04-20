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

export default function SearchResult({ open, handleOpen, handleClose, data }) {
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
              padding: "auto",
              maxWidth: "70%",
            }}
          >
            {data.map((item, index) => (
              <Link href={`/career/${item.refIndex}`}>
                <Grid item xs={12} sm={10} md={5} lg={6} key={index}>
                  <Card
                    //   onClick={() => {
                    //     handleClick(item.item);
                    //   }}
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
                      {item.item.major}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {item.item.about}
                    </Typography>
                  </Card>
                </Grid>
              </Link>
            ))}
          </Box>
        </DialogContent>
      </Dialog>
    </>
  );
}

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
  Input,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";

export default function CareerDetails({ open, handleOpen, handleClose, data }) {
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
          <Typography variant="h4">{ data.title }</Typography>
          <Button onClick={handleClose}>Close</Button>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              // minHeight: "50vh",
              // maxWidth: "60%", 
              backgroundColor: "#F5F5F5",
              p: 2,
            }}
          >
            <Typography variant="p" sx={{ color: "primary" }}>
              {data.content}
            </Typography>
          </Box>
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
          }}
        ></Box>
      </Dialog>
    </>
  );
}

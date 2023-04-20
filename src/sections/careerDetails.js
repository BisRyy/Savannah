import { useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Button,
  Card,
  Container,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Input,
  Link,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

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
          <Typography variant="h4">{data.title}</Typography>
          <Button onClick={handleClose}>Close</Button>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              // justifyContent: "center",
              flexWrap: "wrap",
              gap: 2,
              // minHeight: "50vh",
              // maxWidth: "60%",
              backgroundColor: "#F5F5F5",
              p: 2,
            }}
          >
            <Typography variant="p" sx={{ color: "primary" }}>
              {typeof data.content === "string"
                ? data.content
                : data.title === "FAQ"
                ? data.content.map((item, index) => (
                    <>
                      <Accordion>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography>{item.question}</Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <Typography>{item.answer}</Typography>
                        </AccordionDetails>
                      </Accordion>
                    </>
                  ))
                : data.title === "Extracurriculars"
                ? data.content.map((item, index) => (
                    <>
                      <Typography variant="h6" sx={{ color: "primary" }}>
                        {item.name}
                      </Typography>
                      <Typography variant="p" sx={{ color: "primary" }}>
                        {item.description}
                      </Typography>
                      {"  "}
                      <Link href={item.website}>Website</Link>
                      <br />
                      <br />
                    </>
                  ))
                : data.content.map((item, index) => (
                    <>
                      <Typography variant="p" sx={{ color: "primary" }}>
                        {item}
                      </Typography>
                      <br />
                      <br />
                    </>
                  ))}
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

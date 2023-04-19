import { useState } from "react";
import axios from "axios";
import {
  Box,
  Button,
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

export default function Chat({ open, handleOpen, handleClose }) {
  const [inputValue, setInputValue] = useState("");
  const [chatLog, setChatLog] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (event) => {
    if (inputValue === "") return;

    event.preventDefault();

    setChatLog((prevChatLog) => [
      ...prevChatLog,
      { type: "user", message: inputValue },
    ]);

    sendMessage(inputValue);

    setInputValue("");
  };

  const sendMessage = (message) => {
    const url = "/api/chat";

    const data = {
      model: "gpt-3.5-turbo-0301",
      messages: [{ role: "user", content: message }],
    };

    setIsLoading(true);

    axios
      .post(url, data)
      .then((response) => {
        setChatLog((prevChatLog) => [
          ...prevChatLog,
          { type: "bot", message: response.data.choices[0].message.content },
        ]);
        setIsLoading(false);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
      });
  };

  return (
    <>
      <Dialog
        open={open}
        maxWidth="md"
        fullWidth
        onClose={handleClose}
        onAbort={handleClose}
      >
        <DialogTitle
          sx={{
            display: "flex",
            textAlign: "center",
            justifyContent: "space-between",
          }}
        >
          <Typography variant="h4">Chat with Savannah</Typography>
          <Button onClick={handleClose}>Close</Button>
        </DialogTitle>
        <DialogContent>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: chatLog.length === 0 ? "center" : "none",
              justifyContent: chatLog.length === 0 ? "center" : "none",
              gap: 4,
              minHeight: "50vh",
              backgroundColor: "#F5F5F5",
              p: 2,
            }}
          >
            {chatLog.length === 0 && (
              <>
                <Typography variant="h3">
                  Start a conversation with Savannah
                </Typography>
                <Typography variant="body2">
                    Savannah is a chatbot that can help you with your career
                    questions. Ask her anything!
                </Typography>
              </>
            )}
            {chatLog.map((message, index) => (
              <Box
                key={index}
                sx={{
                  display: "flex",
                  flexDirection:
                    message.type === "user" ? "row-reverse" : "row",
                  gap: 2,
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    flexDirection: "column",
                    gap: 1,
                  }}
                >
                  <Typography variant="body1" sx={{ fontWeight: "bold" }}>
                    {message.type === "user" ? "You" : "Savannah"}
                  </Typography>
                  <Typography variant="body2">{message.message}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </DialogContent>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            p: 2,
          }}
        >
          <OutlinedInput
            value={inputValue}
            onChange={(event) => setInputValue(event.target.value)}
            placeholder={isLoading ? "Loading..." : "Type your message here..."}
            variant="outlined"
            multiline
            rows={2}
            sx={{ width: "100%", p: 2 }}
            onKeyPress={(event) => {
              if (event.key === "Enter + Shift") {
                handleSubmit(event);
              }
            }}
            endAdornment={
              <Button
                type="submit"
                variant="contained"
                color="primary"
                onClick={handleSubmit}
              >
                Send
              </Button>
            }
          />
        </Box>
      </Dialog>
    </>
  );
}

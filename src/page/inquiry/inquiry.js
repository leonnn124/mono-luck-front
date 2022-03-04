import React from "react";
import "./inquiry.css";
import { Button, Stack } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import axios from "../../axios.config";

function App() {
  const navigate = useNavigate();
  const [error, setError] = React.useState(false);
  const [phone, setPhone] = React.useState("");
  const [helperText, setHelperText] = React.useState("請輸入您的手機號碼");

  const handleClick = (event) => {
    if (
      phone !== "" &&
      phone.length === 10 &&
      !isNaN(phone)
    ) {
      navigate("/Complete");
  
      event.preventDefault();
      
    }
    if (phone === "" || phone.length !== 10) {
      setError(true);
      setHelperText("非暢遊會員,無法登記鎖櫃!");
    }
  };

  return (
    <div>
      <div className="Inquiry">
        <div className="searchArea">
          <Box
            component="form"
            sx={{
              "& > :not(style)":{ width:" 380px "},
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              id="outlined-helperText"
              label="手機號碼"
              error={error}
              helperText={helperText}
              value={phone}
              onChange={(e) => {
                setPhone(e.target.value.replace(/[^\d.]/g, ""));
              }}
            />
          </Box>
          <div class="Done">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" style={{ width: 380, height: 40 }} onClick={handleClick}>
                完成
              </Button>
            </Stack>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

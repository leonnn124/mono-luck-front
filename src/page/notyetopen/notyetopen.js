import React from "react";
import "./notyetopen.css";
import { Button, Stack } from "@mui/material";
import { useNavigate } from "react-router-dom";

function App() {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/");
  };
  return (
    <div>
      <div className="Notyetopen">
        <div className="notyetopenText">
          <p>
            目前鎖櫃尚在登記中，
            <br />
            請在12/12 AM 10 回來本系統查看中籤資訊
          </p>
          <div class="button">
            <Stack direction="row" spacing={2}>
              <Button variant="contained" style={{ width: 380, height: 36 }} 
              onClick={handleClick}
              >
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

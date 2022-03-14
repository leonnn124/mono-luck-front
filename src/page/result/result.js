import React from "react";
import "./result.css";
import { Button, Stack } from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function App() {
  const navigate = useNavigate();
  let location = useLocation();
  let Locker = location.state;
  const handleClick = () => {
    navigate("/");
  };
  return (
    <div id="OPEN">
      <div className="Result">
        <div className="resultText">
          <p>您抽中的置物櫃為 - {Locker}</p>
          <p>請向值班人員索取使用登記表簽名 </p>
        </div>
        <div className="resultbtn">
          <Stack direction="row" spacing={2}>
            <Button
              variant="contained"
              style={{
                width: 380,
                height: 40,
                background: "#02A2EE",
                boxShadow: "none",
              }}
              onClick={handleClick}
            >
              完成
            </Button>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default App;

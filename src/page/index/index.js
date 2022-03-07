import React from "react";
import "./index.css";
import { Link } from "react-router-dom";
import { Button, Stack } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import SearchIcon from "@mui/icons-material/Search";

function Homepage() {
  return (
    <div id="HOME">
      <div className="Homepage">
        <div className="Logo">
          <img src="https://imgur.com/c7OVLhS.png" alt="mono"></img>
        </div>
        <div className="Text">
          <div className="Title1">
            <p>MonoLuck</p>
          </div>
          <div className="Title2">
            <p>鎖櫃登記系統</p>
          </div>
        </div>

        <div className="button">
          <Stack spacing={1}>
            <Stack direction="row" spacing={2}>
              <Link to="/Luck" className="link">
                <Button variant="contained" style={{ width: 350, height: 36 }}>
                  <EditIcon />
                  鎖櫃登記
                </Button>
              </Link>
            </Stack>
            <Stack direction="row" spacing={2}>
              <Link to="/Inquiry" className="link">
                <Button variant="outlined" style={{ width: 350, height: 36 }}>
                  <SearchIcon />
                  登記查詢
                </Button>
              </Link>
            </Stack>
          </Stack>
        </div>
      </div>
    </div>
  );
}

export default Homepage;

import React from "react";
import { Box } from "@mui/material";
import Home from "./page/Home";

function App() {
  return (
    <Box width="400px" sx={{ width: { xl: "1488px" } }} m={"auto"}>
      <Home />
    </Box>
  );
}

export default App;

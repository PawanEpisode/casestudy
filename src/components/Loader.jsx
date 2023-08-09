import React from "react";
import "./Loader.scss";
import { Box } from "@mui/material";

const Loader = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"center"}
      alignItems={"center"}
      flexWrap={"wrap"}
      paddingTop={"400px"}
    >
      <div class="sk-chase">
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
        <div class="sk-chase-dot"></div>
      </div>
    </Box>
  );
};

export default Loader;

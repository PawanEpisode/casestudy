import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

import HomeBanner from "../assets/images/HomeBanner.png";

const theme = createTheme({
  palette: {
    error: {
      main: "#FF2625",
    },
  },
});

const Banner = () => {
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          mt: { lg: "100px", xs: "20px" },
          ml: { sm: "50px" },
        }}
        p="20px"
      >
        <Typography
          color="#FF2625"
          fontWeight="600"
          variant="h2"
          marginBottom={"20px"}
        >
          Case Study
        </Typography>
        <Stack
          display="flex"
          justifyContent="space-between"
          direction={"row"}
          flexWrap={"wrap"}
          gap={"20px"}
        >
          <Stack>
            <Typography
              fontWeight="700"
              sx={{
                fontSize: { lg: "44px", xs: "40px" },
              }}
              mb="23px"
              mt="30px"
            >
              Code, Debug <br /> and Repeat
            </Typography>
          </Stack>
          <Stack>
            <Typography
              fontWeight={600}
              fontSize="200px"
              color="#ff2625"
              sx={{
                opacity: 0.1,
                display: { lg: "block", xs: "none" },
              }}
              ml={{ lg: "-10px", xs: "0px" }}
              mt={{ lg: "-30px", xs: "0px" }}
            >
              Users
            </Typography>

            <Typography fontSize="22px" lineHeight="35px" mb={4}>
              Check Out The Most Proficient & <br />
              Most-Active Users
            </Typography>
            <Button
              variant="contained"
              color="error"
              href="#users"
              sx={{ padding: "10px" }}
            >
              Explore Users
            </Button>
          </Stack>
          <Stack>
            <img src={HomeBanner} alt="banner" className="home-banner-img" />
          </Stack>
        </Stack>
      </Box>
    </ThemeProvider>
  );
};

export default Banner;

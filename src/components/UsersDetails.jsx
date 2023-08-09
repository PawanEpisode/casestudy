import React, { useState, useEffect } from "react";
import ResponsiveDialog from "./DialogComp";
import { Box, Stack, Typography } from "@mui/material";
import UserCard from "./UserCard";

const UsersDetails = ({ users }) => {
  return (
    <Box
      id="users"
      sx={{
        mt: { lg: "110px" },
      }}
      mt="50px"
      p="20px"
    >
      <Stack
        direction="row"
        gap="15px"
        mb={"30px"}
        justifyContent="center"
        flexWrap={"wrap"}
      >
        <Typography variant="h4" mb="46px" className="showing-results">
          Showing User Details
        </Typography>
      </Stack>
      <Stack
        direction="row"
        sx={{
          gap: { lg: "110px", xs: "50px" },
        }}
        flexWrap="wrap"
        justifyContent="center"
      >
        {users?.map((user, index) => (
          <UserCard key={user.id} user={user} />
        ))}
      </Stack>

      {/* <Button></Button> TODO button for viewport goes to top when clicked*/}
    </Box>
  );
};

export default UsersDetails;

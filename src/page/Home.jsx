import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Box } from "@mui/material";

import { setUsers } from "../redux/userSlice";

import Loader from "../components/Loader";
import Banner from "../components/Banner";
import UsersDetails from "../components/UsersDetails";
import { getFilteredData } from "../Helper";
import Footer from "../components/Footer";

const Home = () => {
  const dispatch = useDispatch();
  const users = useSelector((state) => state.users);

  useEffect(() => {
    setTimeout(() => {
      fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((data) => {
          const filteredData = getFilteredData(data);
          dispatch(setUsers([...filteredData]));
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
    }, 3000);
  }, []);
  return (
    <Box>
      {!users.length ? (
        <Loader />
      ) : (
        <>
          <Banner />
          <UsersDetails users={users} />
          <Footer />
        </>
      )}
    </Box>
  );
};

export default Home;

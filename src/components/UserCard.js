import React, { useState } from "react";

import {
  Alert,
  AlertTitle,
  Button,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
} from "@mui/material";
import { AVATAR_API_URL, getData } from "../Helper";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import ApartmentOutlinedIcon from "@mui/icons-material/ApartmentOutlined";
import ResponsiveDialog from "./DialogComp";

import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
import AlertDialog from "./AlertDialog";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import HeartBrokenIcon from "@mui/icons-material/HeartBroken";
import { HtmlTooltip } from "./CustomizeTooltip";

const UserCard = ({ user }) => {
  const { id, name, username, isLiked, address, company } = user;

  const dispatch = useDispatch();
  const [liked, setLiked] = useState(false);

  const handleLike = () => {
    setLiked(true);
    dispatch(updateUser({ id, updatedData: { ...user, isLiked: !isLiked } }));
  };

  const handleCloseSnackBar = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setLiked(false);
  };

  // : { city, street, suite, zipcode }
  // : { bs, catchPhrase, name: companyName }
  // const completeAddress = [suite, street, city, zipcode].join(", ");
  // const completeCompany = [companyName, bs, catchPhrase].join(", ");
  const ContactInfo = getData(user);

  const getAddressDetail = (addresses) => {
    return (
      <>
        <Stack gap={'10px'}>
          <Typography variant="h6" sx={{ color: '#1E90FF'}}>Address Details</Typography>
          {Object.entries(addresses).map(([key, value],index) => {
            return (
              <Stack direction={"row"} gap={'10px'} key={index}>
                <Typography sx={{ color: '#1E90FF', textTransform: 'capitalize'}}>{key}:{" "}</Typography>
                <Typography>{value}</Typography>
              </Stack>
            )
          })}
        </Stack>
      </>
    );
  };

  const getCompanyDetail = (company) => {
    return (
      <>
        <Stack gap={'10px'}>
          <Typography variant="h6" sx={{ color: '#1E90FF'}}>Company Details</Typography>
          {Object.entries(company).map(([key, value],index) => {
            return (
              <Stack direction={"row"} gap={'10px'} key={index}>
                <Typography sx={{ color: '#1E90FF', textTransform: 'capitalize'}}>{key}:{" "}</Typography>
                <Typography>{value}</Typography>
              </Stack>
            )
          })}
        </Stack>
      </>
    );
  };

  return (
    <div className="user-card">
      <Stack>
        <Stack
          sx={{ backgroundColor: "lightgrey", borderRadius: "20px" }}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
        >
          <img
            src={`${AVATAR_API_URL}${username}`}
            alt={username}
            loading="lazy"
          />
          <Typography
            sx={{
              paddingX: "10px",
              mb: "10px",
              mt: "10px",
              color: "#fff",
              background: "#ffa9a9",
              fontSize: "16px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {name}
          </Typography>
          <Typography
            sx={{
              paddingX: "10px",
              mb: "10px",
              color: "#fff",
              background: "#fcc757",
              fontSize: "16px",
              borderRadius: "20px",
              textTransform: "capitalize",
            }}
          >
            {username}
          </Typography>
        </Stack>
        <Stack paddingX={"20px"}>
          {ContactInfo.map((contact, index) => {
            return (
              <Stack
                key={index}
                direction={"row"}
                display={"flex"}
                justifyContent={"flex-start"}
                alignItems={"center"}
              >
                {contact.CategoryIcon}
                <Typography
                  mt="10px"
                  color="#000"
                  fontSize="12px"
                  fontWeight="bold"
                  ml="21px"
                  pb="10px"
                  textTransform="capitalize"
                >
                  {contact.CategoryName}
                </Typography>
              </Stack>
            );
          })}
        </Stack>
        <Stack
          mt={"20px"}
          direction={"row"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
        >
          <HtmlTooltip title={getAddressDetail(address)}>
            <Stack
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"50px"}
              height={"50px"}
              sx={{ backgroundColor: "lightgrey", borderRadius: "50%", cursor: "pointer" }}
            >
              <HomeOutlinedIcon sx={{ color: "DodgerBlue" }} />
            </Stack>
          </HtmlTooltip>

          <HtmlTooltip title={getCompanyDetail(company)}>
            <Stack
              display={"flex"}
              justifyContent={"center"}
              alignItems={"center"}
              width={"50px"}
              height={"50px"}
              sx={{ backgroundColor: "lightgrey", borderRadius: "50%", cursor: "pointer" }}
            >
              <ApartmentOutlinedIcon sx={{ color: "DodgerBlue" }} />
            </Stack>
          </HtmlTooltip>
        </Stack>
        <Stack
          mt={"20px"}
          direction={"row"}
          display={"flex"}
          justifyContent={"space-evenly"}
          alignItems={"center"}
          padding={"10px"}
          sx={{ backgroundColor: "lightgrey", borderRadius: "20px" }}
        >
          <Tooltip title="Like Or Unlike" placement="bottom">
            <Button onClick={handleLike}>
              {isLiked ? (
                <FavoriteIcon sx={{ color: "red" }} />
              ) : (
                <FavoriteBorderIcon sx={{ color: "red" }} />
              )}
            </Button>
          </Tooltip>
          <Snackbar
            open={liked}
            autoHideDuration={2000}
            onClose={handleCloseSnackBar}
          >
            {isLiked ? (
              <Alert
                onClose={handleCloseSnackBar}
                severity="success"
                sx={{
                  width: "100%",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  Liked The Profile <FavoriteIcon sx={{ color: "red" }} />
                </Typography>
              </Alert>
            ) : (
              <Alert
                onClose={handleCloseSnackBar}
                severity="error"
                sx={{
                  width: "100%",
                  color: "black",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6">
                  Unliked The Profile <HeartBrokenIcon sx={{ color: "red" }} />
                </Typography>
              </Alert>
            )}
          </Snackbar>
          <ResponsiveDialog user={user} />
          <AlertDialog id={id} />
        </Stack>
      </Stack>
    </div>
  );
};

export default UserCard;

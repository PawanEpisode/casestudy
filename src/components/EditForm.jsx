import { Stack, TextField } from "@mui/material";
import React, { useState } from "react";
import { getEditFormData } from "../Helper";

const EditForm = ({ user, formData, setFormData }) => {
  const EditableFormdata = getEditFormData(user);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log("change", name, value);
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  return (
    <Stack
      display={"flex"}
      alignItems={"flex-start"}
      gap={"20px"}
      sx={{ padding: { lg: "50px", md: "100px", sm: "60px", xs: "30px" } }}
    >
      {EditableFormdata.map((EachCategory, index) => {
        return (
          <Stack
            key={index}
            direction={"row"}
            gap={"40px"}
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
          >
            <Stack
              justifyContent={"center"}
              alignItems={"center"}
              sx={{
                backgroundColor: "lightgrey",
                borderRadius: "50%",
                width: "60px",
                height: "60px",
                display: { lg: "flex", md: "flex", sm: "flex", xs: "none" },
              }}
            >
              {EachCategory.CategoryIcon}
            </Stack>
            <TextField
              focused
              required
              name={EachCategory.CategoryName}
              defaultValue={formData[EachCategory.CategoryName]}
              id={`outlined-required${EachCategory.CategoryName}${index}`}
              label={EachCategory.CategoryName.toUpperCase()}
              onChange={handleInputChange}
            />
          </Stack>
        );
      })}
    </Stack>
  );
};

export default EditForm;

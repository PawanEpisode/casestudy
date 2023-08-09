import EmailOutlinedIcon from "@mui/icons-material/EmailOutlined";
import PhoneIphoneOutlinedIcon from "@mui/icons-material/PhoneIphoneOutlined";
import LanguageOutlinedIcon from "@mui/icons-material/LanguageOutlined";
import BadgeOutlinedIcon from "@mui/icons-material/BadgeOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { emailRegex, nameRegex, phoneRegex, usernameRegex } from "./utility/regex";

export const AVATAR_API_URL =
  "https://api.dicebear.com/6.x/avataaars/svg?seed=";

export const getFilteredData = (users = []) => {
  const tempUsers = [...users];

  const updatedUsers = tempUsers?.map((user) => {
    delete user.address.geo;
    return {
      ...user,
      isLiked: false,
    };
  });
  return updatedUsers;
};

export const getData = (user) => {
  const { email, phone, website } = user;
  return [
    {
      CategoryName: email,
      CategoryIcon: <EmailOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
    {
      CategoryName: phone,
      CategoryIcon: <PhoneIphoneOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
    {
      CategoryName: website,
      CategoryIcon: <LanguageOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
  ];
};

export const getEditFormData = (user) => {
  const { name, username, email, phone } = user;
  return [
    {
      CategoryValue: name,
      CategoryName: "name",
      CategoryIcon: <BadgeOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
    {
      CategoryValue: username,
      CategoryName: "username",
      CategoryIcon: <AccountCircleOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
    {
      CategoryValue: email,
      CategoryName: "email",
      CategoryIcon: <EmailOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
    {
      CategoryValue: phone,
      CategoryName: "phone",
      CategoryIcon: <PhoneIphoneOutlinedIcon sx={{ color: "DodgerBlue" }} />,
    },
  ];
};

export const filterInPlace = (array = [], predicate) => {
  let end = 0;

  for (let i = 0; i < array.length; i++) {
    const obj = array[i];

    if (predicate(obj)) {
      array[end++] = obj;
    }
  }

  array.length = end;
};

export const validateEditForm = (formData) => {
    let valid = true;
    const errors = [];

    if (!nameRegex.test(formData.name)) {
      valid = false;
      const categoryName = 'name';
      const categoryError = 'Name must only contain letters and spaces';
      errors.push({categoryName, categoryError});
    }

    if (!usernameRegex.test(formData.username)) {
      valid = false;
      const categoryName = 'username';
      const categoryError = 'Username must only contain letters, numbers, and underscores';
      errors.push({categoryName, categoryError});
    }

    if (!emailRegex.test(formData.email)) {
      valid = false;
      const categoryName = 'email';
      const categoryError = 'Invalid email address';
      errors.push({categoryName, categoryError});
    }

    if (!phoneRegex.test(formData.phone)) {
      valid = false;
      const categoryName = 'phone';
      const categoryError = 'Phone number must be 10 digits';
      errors.push({categoryName, categoryError});
    }

    return {valid, errors};
}

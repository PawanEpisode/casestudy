import React, { useState } from "react";
import { useTheme } from "@mui/material/styles";
import {
  Alert,
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Paper,
  Snackbar,
  Stack,
  Tooltip,
  Typography,
  useMediaQuery,
} from "@mui/material";
import ModeSharpIcon from "@mui/icons-material/ModeSharp";
import EditForm from "./EditForm";
import { useDispatch } from "react-redux";
import { updateUser } from "../redux/userSlice";
import { validateEditForm } from "../Helper";

export default function ResponsiveDialog({ user }) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const [toast, setToast] = useState(false);
  const [validationErrors, setValidationErrors] = useState([]);
  const [formData, setFormData] = useState({ ...user });
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    const { valid, errors } = validateEditForm(formData);
    setValidationErrors(errors);
    if (valid) {
      const { name, username, email, phone } = formData;
      dispatch(
        updateUser({
          id: user.id,
          updatedData: { ...user, name, username, email, phone },
        })
      );
      setOpen(false);
      setToast(false);
    } else {
      setToast(true);
    }
  };

  const handleToast = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setToast(false);
  };

  return (
    <Box>
      <Tooltip title="Edit The Profile" placement="bottom">
        <Button onClick={handleClickOpen}>
          <ModeSharpIcon sx={{ color: "dodgerblue" }} />
        </Button>
      </Tooltip>
      <Snackbar open={toast} autoHideDuration={3000} onClose={handleToast}>
        <Alert onClose={handleToast} severity="error" sx={{ width: "100%" }}>
          <Typography variant="h5">
            Please modify 🥲 Error Prone Field 😃
          </Typography>
        </Alert>
      </Snackbar>
      <Dialog
        fullScreen={fullScreen}
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Edit the User Profile"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText>You can change the User details</DialogContentText>
          <EditForm user={user} formData={formData} setFormData={setFormData} />
          <Stack direction={"row"}>
            <Button autoFocus onClick={handleClose}>
              CANCEL
            </Button>
            <Button onClick={handleSave} autoFocus>
              SAVE
            </Button>
          </Stack>
          {toast ? (
            <Stack
              display={"flex"}
              alignItems={"flex-start"}
              sx={{ padding: "30px" }}
            >
              <Typography
                color="#FF2625"
                fontWeight="600"
                variant="h4"
                marginBottom={"10px"}
              >
                Error
              </Typography>
              {validationErrors.map((error, index) => {
                const { categoryName, categoryError } = error;
                return (
                  <Paper
                    key={index}
                    elevation={16}
                    sx={{ padding: "5px", mb: "20px" }}
                  >
                    <Typography>{`${categoryName.toUpperCase()}: ${categoryError}`}</Typography>
                  </Paper>
                );
              })}
            </Stack>
          ) : null}
        </DialogContent>
      </Dialog>
    </Box>
  );
}

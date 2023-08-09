import * as React from "react";
import {
  Tooltip,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@mui/material";

import { deleteUser } from "../redux/userSlice";

import DeleteSharpIcon from "@mui/icons-material/DeleteSharp";
import { useDispatch } from "react-redux";

export default function AlertDialog({ id }) {
  const dispatch = useDispatch();

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAgree = () => {
    dispatch(deleteUser({ id }));
    setOpen(false);
  };

  return (
    <div>
      <Tooltip title="Delete The Profile" placement="bottom">
        <Button onClick={handleClickOpen}>
          <DeleteSharpIcon sx={{ color: "dodgerblue" }} />
        </Button>
      </Tooltip>

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Are you absolutely sure?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            This action cannot be undone. This will permanently delete User
            Profile and remove current User data from our servers.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleAgree} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}

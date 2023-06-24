import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import MDButton from "components/MDButton";

import { useNavigate } from "react-router-dom";

export default function AlertDialog({ title, message, yes, no, showDialog, setShowDialog }) {
  //   const [open, setOpen] = React.useState(showDialog);

  const navigation = useNavigate();
  console.log("showDialog =>", showDialog);

  const handleClose = () => {
    setShowDialog(false);
  };

  return (
    <div>
      <Dialog
        open={showDialog}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">{message}</DialogContentText>
        </DialogContent>
        <DialogActions>
          <MDButton
            variant="gradient"
            color="primary"
            onClick={() => navigation(yes)}
            fullWidth
            autoFocus
          >
            Yes
          </MDButton>
          <MDButton variant="outlined" onClick={() => navigation(no)} color="primary" fullWidth>
            No
          </MDButton>
          {/* <Button onClick={handleClose}>yes</Button>
          <Button onClick={handleClose} autoFocus>
            No
          </Button> */}
        </DialogActions>
      </Dialog>
    </div>
  );
}

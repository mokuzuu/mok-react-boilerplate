import React, { useCallback } from "react";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import TextField from "@material-ui/core/TextField";
import { DialogContent, DialogActions, Button } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { userLogin as userLoginDispatch } from "store";

function GetUserName() {
  const [name, changeName] = React.useState("");
  const dispatch = useDispatch();
  const userLogin = useCallback(
    (name: string) => {
      dispatch(userLoginDispatch(name));
    },
    [dispatch]
  );
  return (
    <Dialog aria-labelledby="simple-dialog-title" open={true}>
      <DialogTitle id="simple-dialog-title">
        What is your name on chat?
      </DialogTitle>
      <DialogContent>
        <TextField
          id="standard-basic"
          label="name"
          value={name}
          onChange={(e) => changeName(e.target.value)}
        />
      </DialogContent>
      <DialogActions>
        {name.length >= 1 && (
          <Button
            onClick={() => {
              userLogin(name);
            }}
            color="primary"
          >
            Submit
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
}
export default GetUserName;

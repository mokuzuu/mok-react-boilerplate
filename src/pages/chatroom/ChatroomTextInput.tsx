import React, { useCallback } from "react";
import { Box, Button, TextField } from "@material-ui/core";
import { useDispatch } from "react-redux";
import { sendComment as sendCommentDispatch } from "store";
import { makeStyles } from "@material-ui/core";
interface IChatroomTextArea {}
const useStyles = makeStyles(() => ({
  textArea: {
    flexBasis: "90vw",
    flexGrow: 1,
    flexShrink: 1,
    padding: "0 10px 0 10px",
  },
  button: {
    flexBasis: "10vw",
    flexGrow: 1,
    flexShrink: 1,
  },
}));
const ChatroomTextArea: React.SFC<IChatroomTextArea> = () => {
  const classes = useStyles();
  const [comment, changeComment] = React.useState("");
  const dispatch = useDispatch();
  const sendComment = useCallback(
    (comment: string) => {
      dispatch(sendCommentDispatch(comment));
    },
    [dispatch]
  );
  const onSubmitButtonPressed = React.useCallback(() => {
    if (comment.length > 0) {
      sendComment(comment);
      changeComment("");
    }
  }, [comment, sendComment]);
  React.useEffect(() => {
    const textarea = document.getElementById("comment_textarea");
    if (textarea) {
      const submitOnCtrlAndEnter = (e: any) => {
        if (e.ctrlKey && e.keyCode === 13) {
          onSubmitButtonPressed();
        }
      };
      textarea.addEventListener("keydown", submitOnCtrlAndEnter);
      return () =>
        textarea.removeEventListener("keydown", submitOnCtrlAndEnter);
    }
  }, [onSubmitButtonPressed]);
  return (
    <Box
      width="100%"
      height="70px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box className={classes.textArea}>
        <TextField
          multiline={true}
          aria-label="empty textarea"
          placeholder="Type message"
          fullWidth={true}
          value={comment}
          id="comment_textarea"
          onChange={(e) => changeComment(e.target.value)}
        />
      </Box>
      <Box
        className={classes.button}
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Button variant="contained" onClick={onSubmitButtonPressed}>
          Send
        </Button>
      </Box>
    </Box>
  );
};
export default ChatroomTextArea;

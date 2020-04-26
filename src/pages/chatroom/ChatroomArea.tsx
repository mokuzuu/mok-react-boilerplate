import React from "react";
import { Box } from "@material-ui/core";
import ChatroomTextInput from "./ChatroomTextInput";
import { makeStyles } from "@material-ui/core/styles";
import ChatroomComment from "./ChatroomComment";
import { db } from "services/firebase";
interface IChatRoomArea {}

const ChatRoomArea: React.SFC<IChatRoomArea> = () => {
  const classes = useStyles();
  const [comments, setComments] = React.useState<{
    [key: string]: {
      userName: string;
      uid: string;
      comment: string;
      date: number;
    };
  }>({});
  const [commentHolderHeight, updateCommentHolderHeight] = React.useState(
    "0px"
  );
  React.useEffect(() => {
    const commentHolderEle = document.getElementById("comment_holder");
    const comments = document.getElementById("comments");
    if (commentHolderEle) {
      updateCommentHolderHeight(commentHolderEle.offsetHeight + "px");
      window.addEventListener("resize", () => {
        updateCommentHolderHeight(commentHolderEle.offsetHeight + "px");
      });
    }
    const commentsRef = db.ref("comments/");
    commentsRef.on("value", function(snapshot) {
      setComments(snapshot.val() ? snapshot.val() : {});
      if (comments) {
        comments.scrollTop = comments.scrollHeight;
      }
    });
  }, []);

  return (
    <Box className={classes.root} display="flex" flexDirection={"column"}>
      <Box flexBasis="auto" flexGrow={1} flexShrink={0} id="comment_holder">
        <Box
          height={commentHolderHeight}
          width={"100%"}
          className={classes.comments}
          id="comments"
        >
          {Object.keys(comments).map((key) => (
            <ChatroomComment
              key={key}
              name={comments[key].userName}
              comment={comments[key].comment}
              time={comments[key].date}
            />
          ))}
        </Box>
      </Box>
      <Box
        flexBasis="70px"
        flexGrow={0}
        flexShrink={0}
        className={classes.input}
        position="relative"
      >
        <ChatroomTextInput />
      </Box>
    </Box>
  );
};

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    padding: 0,
    position: "relative",
    height: "100%",
  },
  comments: {
    overflow: "scroll",
    "&::-webkit-scrollbar": {
      display: "none",
    },
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
  container: {
    marginTop: "3%",
  },
  input: {
    borderTop: "1px solid black",
  },
}));

export default ChatRoomArea;

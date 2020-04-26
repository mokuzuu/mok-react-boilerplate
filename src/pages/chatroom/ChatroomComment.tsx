import React from "react";
import { Box, Divider } from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import moment from "moment";
interface IChatroomComment {
  name: string;
  comment: string;
  time: number;
}

const ChatroomComment: React.SFC<IChatroomComment> = ({
  name,
  comment,
  time,
}) => {
  const classes = useStyles();
  return (
    <Box>
      <Box
        display="flex"
        alignItems="center"
        flexDirection="row"
        width="100%"
        minHeight="60px"
      >
        <Box
          className={classes.nameWrapper}
          display="flex"
          justifyContent="center"
          alignItems="center"
          flexGrow={0}
          flexShrink={0}
          flexBasis={"10vw"}
        >
          <Box className={classes.nameBox} fontWeight="fontWeightBold">
            {name}
          </Box>
        </Box>
        <Box
          className={classes.commentWrapper}
          display="flex"
          flexGrow={0}
          flexShrink={0}
          flexBasis={"80vw"}
          alignItems="center"
        >
          {comment}
        </Box>
        <Box
          className={classes.timeWrapper}
          display="flex"
          flexGrow={0}
          flexShrink={0}
          flexBasis={"10vw"}
          justifyContent="center"
          alignItems="center"
        >
          {moment(time).format("HH:mm")}
        </Box>
      </Box>
      <Divider light />
    </Box>
  );
};
export default ChatroomComment;

const useStyles = makeStyles((theme) => ({
  nameWrapper: {
    minHeight: "40px",
    height: "100%",
    flexGrow: 0,
    flexShrink: 0,
  },
  nameBox: {
    background: "white",
    width: "100%",
    minHeight: "40px",
    height: "40px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  commentWrapper: {
    height: "100%",

    wordBreak: "break-word",
  },
  timeWrapper: {
    height: "100%",
  },
}));

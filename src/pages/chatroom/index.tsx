import React from "react";
import { useSelector } from "react-redux";
import ChatroomArea from "./ChatroomArea";
import { makeStyles } from "@material-ui/core";
import { IAppState } from "store";
import GetUserName from "components/dialog/getUsername";
interface IChatroom {}

const Chatroom: React.SFC<IChatroom> = (props) => {
  const classes = useStyles();
  const userName = useSelector((state: IAppState) => state.userName);
  return (
    <div className={classes.container}>
      {userName ? <ChatroomArea /> : <GetUserName />}
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  container: {
    width: "100%",
    height: "100%",
    display: "flex",
  },
  listWrapper: {
    flexBasis: "200px",
    [theme.breakpoints.up("sm")]: {
      borderRight: "1px solid grey",
    },
  },
  detailWrapper: {
    flexGrow: 1,
  },
  progressWrapper: {
    width: "100%",
    height: "100%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

export default Chatroom;

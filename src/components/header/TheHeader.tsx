import React from "react";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import { useSelector } from "react-redux";
import { IAppState } from "store";

const TheHeader = () => {
  const userName = useSelector((state: IAppState) => state.userName);
  const classes = useStyles();
  return (
    <header className={classes.header}>
      <div className={classes.desktopHeader}>
        Chat room&nbsp;&nbsp;
        {userName && (
          <span style={{ fontWeight: 300, color: "grey" }}>
            Welcome {userName}
          </span>
        )}
      </div>
    </header>
  );
};
export default TheHeader;

const useStyles = makeStyles((theme) => ({
  header: {
    width: variables.header.width,
    minHeight: variables.header.height,
    height: variables.header.height,
    color: variables.header.color,
    zIndex: variables.zIndex.header,
    position: "fixed",
    top: "0",
    left: "0",
    borderBottom: "0.5px solid grey",
    background: variables.header.bgColor,
    flexDirection: "row",
    paddingLeft: "50px",
  },
  desktopHeader: {
    position: "relative",
    width: "100%",
    height: "100%",
    display: "flex",
    alignItems: "center",
  },
}));

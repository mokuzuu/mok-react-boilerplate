import React from "react";
import Header from "components/header/TheHeader";
import UseStylesGlobal from "styles/useStyles";
import { makeStyles } from "@material-ui/core";
import variables from "styles/variables";
import { Box } from "@material-ui/core";
interface IProps {
  children: JSX.Element;
}

export default (props: IProps) => {
  const globalClasses = UseStylesGlobal();
  const classes = useStyles();
  return (
    <div className={globalClasses.app}>
      <Box
        display="flex"
        flexDirection="row"
        position="relative"
        width="100%"
        height="100%"
      >
        <Box
          className={classes.mainContainer}
          display="flex"
          flexDirection="column"
          flexGrow={1}
          position="relative"
        >
          <Box flexBasis={variables.header.height} flexGrow={0} flexShrink={0}>
            <Header />
          </Box>
          <Box flexBasis={"auto"} flexGrow={1} flexShrink={0}>
            <main className={classes.main}>{props.children}</main>
          </Box>
        </Box>
      </Box>
    </div>
  );
};

const useStyles = makeStyles((theme) => ({
  main: {
    width: "100%",
    height: "100%",
  },
  sideBarContainer: {
    flexBasis: "180px",
  },
  mainContainer: {
    flexBasis: "auto",
    flexGrow: 1,
  },
  sizeBar: {
    zIndex: variables.zIndex.sideBar,
    width: "180px",
    bottom: "0px",
    left: "0px",
    position: "fixed",
    top: "0px",
    margin: "0",
    padding: "0",
    backgroundColor: variables.color.primary,
  },
}));

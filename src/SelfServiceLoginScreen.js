import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import SelfServiceLoginScreenLeftPane from "./SelfServiceLoginScreenLeftPane";
import SelfServiceLoginScreenRightPane from "./SelfServiceLoginScreenRightPane";
import styles from "./MyStyles";

class SelfServiceLoginScreen extends React.Component {
  render() {
    const fnameOfTheDeceased = "John";
    const lnameOfTheDeceased = "Doe";
    const nameOfTheDeceased = `${fnameOfTheDeceased} ${lnameOfTheDeceased}`;
    const { classes } = this.props;

    return (
      <div>
        <Dialog
          open={this.props.isDialogBoxOpen}
          onClose={this.props.handleClose}
          aria-labelledby="responsive-dialog-title"
          maxWidth="lg"
          maxheight="lg"
        >
          <div className={classes.selfServiceLoginScreenOuterDiv}>
            <Grid container className={classes.selfServiceLoginScreen}>
              <Grid item className={classes.selfServiceLoginScreenLeftPane}>
                <SelfServiceLoginScreenLeftPane
                  fnameOfTheDeceased={fnameOfTheDeceased}
                />
              </Grid>
              <Grid item className={classes.selfServiceLoginScreenRightPane}>
                <SelfServiceLoginScreenRightPane
                  handleClose={this.props.handleClose}
                  nameOfTheDeceased={nameOfTheDeceased}
                />
              </Grid>
            </Grid>
          </div>
        </Dialog>
      </div>
    );
  }
}

export default withStyles(styles)(SelfServiceLoginScreen);

import React from "react";
import Dialog from "@material-ui/core/Dialog";
import Grid from "@material-ui/core/Grid";
import { withStyles } from "@material-ui/styles";
import SelfServiceLoginScreenLeftPane from "./SelfServiceLoginScreenLeftPane";
import SelfServiceLoginScreenRightPane from "./SelfServiceLoginScreenRightPane";
import styles from "./MyStyles";
import "./SlidingFunction.css";

class SelfServiceLoginScreen extends React.Component {
  constructor(props) {
    super(props);
    this.state = { activeStep: 1, isPreviousStep: false, showPassword: false };
  }

  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };

  nextStep = (number, e) => {
    // alert(number);
    const newNumber = number + 1;
    this.setState({ activeStep: newNumber, isPreviousStep: false });
  };

  previousStep = (number, e) => {
    const newNumber = number - 1;
    this.setState({ activeStep: newNumber, isPreviousStep: true });
  };

  render() {
    // console.log(this.props);
    const fnameOfTheDeceased = "John";
    const lnameOfTheDeceased = "Doe";
    const nameOfTheDeceased = `${fnameOfTheDeceased} ${lnameOfTheDeceased}`;
    const { classes } = this.props;

    const { isPreviousStep, showPassword } = this.state;
    const number = this.state.activeStep ? this.state.activeStep : 1;

    const newClassName = isPreviousStep ? "slide-back" : "slide";

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
                  // isPreviousStep={isPreviousStep}
                  nextStep={this.nextStep}
                  previousStep={this.previousStep}
                  showPassword={showPassword}
                  stepNumber={number}
                  className={newClassName}
                  fnameOfTheDeceased={fnameOfTheDeceased}
                  handleClickShowPassword={this.handleClickShowPassword}
                />

                {/* <SelfServiceLoginScreenLeftPane
                  fnameOfTheDeceased={fnameOfTheDeceased}
                /> */}
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

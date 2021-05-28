import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./MyStyles";
import { withStyles } from "@material-ui/styles";

class LeftPaneStep1 extends React.Component {
  submitStep1 = (event) => {
    event.preventDefault();
  };

  render() {
    const { classes } = this.props;
    // let companyLogo;
    const companyLogo = "https://www.iotasol.com/site/images/logo.svg";

    return (
      <div className={classes.LeftPaneStepOuterDiv}>
        <div className={classes.logoAndBackButtonDiv}>
          {companyLogo && (
            <img
              alt="Company Logo"
              src={companyLogo}
              className={classes.companyLogo}
            />
          )}
        </div>
        <div className={classes.greetingsDiv}>
          <Typography>Hello.</Typography>
          <Typography className={classes.greetingsText}>
            What's your name?
          </Typography>
        </div>
        <form className={classes.selfServiceLoginForm}>
          <div className={classes.formDiv}>
            <TextField
              id="fname"
              name="fname"
              label="First Name"
              className={classes.textFields}
              placeholder="First Name"
              onChange={this.props.handleFormEntries}
            />
            <TextField
              id="lname"
              name="lname"
              label="Last Name"
              className={classes.textFields}
              placeholder="Last Name"
              onChange={this.props.handleFormEntries}
            />
          </div>
          <div className={classes.submitFormDiv}>
            <Button
              variant="contained"
              color="primary"
              className={classes.continueButton}
              onClick={() =>
                this.props.handleButtonClick("goToStep2", "nextStep")
              }
            >
              Continue
            </Button>
          </div>
        </form>

        <div className={classes.alreadyHaveAccountDiv}>
          <Typography className={classes.alreadyHaveAccountText}>
            Already have an account?{" "}
            <span className={classes.loginNowText}>Log in now</span>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LeftPaneStep1);

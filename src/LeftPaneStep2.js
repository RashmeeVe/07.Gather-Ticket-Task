import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import BusinessIcon from "@material-ui/icons/Business";
import Button from "@material-ui/core/Button";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";
import styles from "./MyStyles";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";

import { withStyles } from "@material-ui/styles";

class LeftPaneStep2 extends React.Component {
  render() {
    const { classes, fname, fnameOfTheDeceased } = this.props;

    return (
      <div className={classes.LeftPaneStepOuterDiv}>
        <div className={classes.logoAndBackButtonDiv}>
          <ArrowBackIosIcon
            className={classes.backButton}
            onClick={() =>
              this.props.handleButtonClick("goToStep1", "prevStep")
            }
          />
        </div>
        <div className={classes.greetingsDiv}>
          <Typography>Hi, {fname}!</Typography>
          <Typography className={classes.greetingsText}>
            How do you know {fnameOfTheDeceased} ?
          </Typography>
        </div>
        <form className={classes.selfServiceLoginForm}>
          <div className={classes.formDiv}>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <PeopleIcon />
                <br />
                Family
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <EmojiPeopleIcon />
                <br />
                Friend
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <SchoolIcon />
                <br />
                School
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <BusinessIcon />
                <br />
                Work
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <MenuBookIcon />
                <br />
                Church
              </p>
            </Button>
            <Button
              variant="contained"
              color="primary"
              disableRipple
              className={classes.relationWithDeceasedButton}
            >
              <p>
                <PersonIcon />
                <br />
                Other
              </p>
            </Button>
            <TextField
              id="relationWithDeceased"
              label="I am John's..."
              className={classes.textFields}
              margin="normal"
              variant="outlined"
            />
          </div>
          <div className={classes.submitFormDiv}>
            <Button
              variant="contained"
              color="primary"
              className={classes.continueButton}
              onClick={() =>
                this.props.handleButtonClick("goToStep3", "nextStep")
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

export default withStyles(styles)(LeftPaneStep2);

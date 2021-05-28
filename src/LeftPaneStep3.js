import React from "react";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import IconButton from "@material-ui/core/IconButton";
import LockIcon from "@material-ui/icons/Lock";
import styles from "./MyStyles";
import Typography from "@material-ui/core/Typography";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import { withStyles } from "@material-ui/styles";

class LeftPaneStep3 extends React.Component {
  state = {
    showPassword: false,
  };

  handleClickShowPassword = () => {
    this.setState((state) => ({ showPassword: !state.showPassword }));
  };
  render() {
    const { classes } = this.props;

    return (
      <div className={classes.LeftPaneStepOuterDiv}>
        <div className={classes.logoAndBackButtonDiv}>
          <ArrowBackIosIcon
            className={classes.backButton}
            onClick={() =>
              this.props.handleButtonClick("goToStep2", "prevStep")
            }
          />
        </div>
        <div className={classes.greetingsDiv}>
          <Typography>And finally,</Typography>
          <Typography className={classes.greetingsText}>
            Create your free account.
          </Typography>
        </div>
        <form className={classes.selfServiceLoginForm}>
          <div className={classes.formDiv}>
            <Input
              id="fname"
              placeholder="Email or Mobile Number"
              className={classes.textFields}
            />
            <Input
              id="password"
              type={this.state.showPassword ? "text" : "password"}
              placeholder="Create a Password"
              className={classes.textFields}
              endAdornment={
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={this.handleClickShowPassword}
                >
                  {this.state.showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              }
            />
          </div>
          <div className={classes.submitFormDiv}>
            <Button
              variant="contained"
              color="primary"
              className={classes.continueButton}
              //  onClick={()=>this.props.handleButtonClick("goToStep4")}
            >
              <LockIcon /> CREATE MY SECURE ACCOUNT
            </Button>
          </div>
        </form>
        <div className={classes.alreadyHaveAccountDiv}>
          <Typography className={classes.alreadyHaveAccountText}>
            By Continuing, you agree to our
            <span style={{ fontWeight: "bold" }}> terms & conditions</span>
            <br />
            and that you have read our
            <span style={{ fontWeight: "bold" }}> privacy policy</span>
          </Typography>
        </div>
      </div>
    );
  }
}

export default withStyles(styles)(LeftPaneStep3);

import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import styles from "./MyStyles";
import { withStyles } from "@material-ui/styles";
import { CSSTransition, TransitionGroup } from "react-transition-group";

import * as classNames from "classnames";
import ArrowBackIosIcon from "@material-ui/icons/ArrowBackIos";
import BusinessIcon from "@material-ui/icons/Business";
import EmojiPeopleIcon from "@material-ui/icons/EmojiPeople";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import PeopleIcon from "@material-ui/icons/People";
import PersonIcon from "@material-ui/icons/Person";
import SchoolIcon from "@material-ui/icons/School";

import IconButton from "@material-ui/core/IconButton";
import Input from "@material-ui/core/Input";
import InputAdornment from "@material-ui/core/InputAdornment";
import LockIcon from "@material-ui/icons/Lock";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

const step1 = (props) => {
  const { classes, stepNumber } = props;
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
      <div className={classes.blankDiv}></div>
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
            className={classes.textFields}
            placeholder="First Name"
            onChange={props.handleFormEntries}
          />
          <TextField
            id="lname"
            name="lname"
            className={classes.textFields}
            placeholder="Last Name"
            onChange={props.handleFormEntries}
          />
        </div>
        <div className={classes.submitFormDiv}>
          <Button
            variant="contained"
            color="primary"
            className={classes.continueButton}
            onClick={() => props.nextStep(stepNumber)}
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
};

const step2 = (props) => {
  const { stepNumber, classes, fname, fnameOfTheDeceased } = props;

  return (
    <div className={classes.LeftPaneStepOuterDiv}>
      <div className={classes.logoAndBackButtonDiv}>
        <ArrowBackIosIcon
          className={classes.backButton}
          onClick={() => props.previousStep(stepNumber)}
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
              <PeopleIcon className={classes.relationWithDeceasedIcon} />
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
              <EmojiPeopleIcon className={classes.relationWithDeceasedIcon} />
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
              <SchoolIcon className={classes.relationWithDeceasedIcon} />
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
              <BusinessIcon className={classes.relationWithDeceasedIcon} />
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
              <MenuBookIcon className={classes.relationWithDeceasedIcon} />
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
              <PersonIcon className={classes.relationWithDeceasedIcon} />
              <br />
              Other
            </p>
          </Button>
          <TextField
            id="relationWithDeceased"
            name="relationWithDeceased"
            // placeholder="I am John's..."
            label="I am John's..."
            className={classNames(
              classes.textFields,
              classes.relationWithDeceased
            )}
            // className={classes.textFields}
            variant="outlined"
          />
        </div>
        <div className={classes.submitFormDiv}>
          <Button
            variant="contained"
            color="primary"
            className={classes.continueButton}
            onClick={() => props.nextStep(stepNumber)}
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
};

const step3 = (props) => {
  const { stepNumber, classes, showPassword } = props;

  return (
    <div className={classes.LeftPaneStepOuterDiv}>
      <div className={classes.logoAndBackButtonDiv}>
        <ArrowBackIosIcon
          className={classes.backButton}
          onClick={() => props.previousStep(stepNumber)}
        />
      </div>
      <div className={classes.blankDiv}></div>

      <div className={classes.greetingsDiv}>
        <Typography>And finally,</Typography>
        <Typography className={classes.greetingsText}>
          Create your free account.
        </Typography>
      </div>
      <form className={classes.selfServiceLoginForm}>
        <div className={classes.formDiv}>
          <Input
            id="emailOrMobile"
            placeholder="Email or Mobile Number"
            className={classes.textFields}
          />
          <Input
            id="password"
            type={showPassword ? "text" : "password"}
            placeholder="Create a Password"
            className={classes.textFields}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="Toggle password visibility"
                  onClick={props.handleClickShowPassword}
                >
                  {showPassword ? <Visibility /> : <VisibilityOff />}
                </IconButton>
              </InputAdornment>
            }
          />
        </div>
        <div className={classes.submitFormDiv}>
          <Button
            variant="contained"
            color="primary"
            className={classes.continueButton}
          >
            <LockIcon /> CREATE MY SECURE ACCOUNT
          </Button>
        </div>
      </form>
      <div className={classes.alreadyHaveAccountDiv}>
        <Typography className={classes.termsAndPoliciesText}>
          By Continuing, you agree to our
          <span style={{ fontWeight: "bold" }}> terms & conditions</span>
          <br />
          and that you have read our
          <span style={{ fontWeight: "bold" }}> privacy policy</span>
        </Typography>
      </div>
    </div>
  );
};

const renderSteps = (key, props) => {
  const step = key;

  switch (step) {
    case "step-2":
      return step2(props);

    case "step-3":
      return step3(props);

    case "step-1":
    default:
      return step1(props);
  }
};

const SelfServiceLoginScreenLeftPane = (props) => {
  console.log("Props==>", props);
  const { stepNumber, className, classes } = props;

  const steps = (props) => {
    return (
      <>
        {[1, 2, 3].map((key) => (
          <CSSTransition
            in={key === stepNumber}
            timeout={300}
            key={key}
            classNames={className}
            mountOnEnter
            unmountOnExit
          >
            {renderSteps(`step-${key}`, props)}
          </CSSTransition>
        ))}
      </>
    );
  };
  return <TransitionGroup>{steps(props)}</TransitionGroup>;
};

export default withStyles(styles)(SelfServiceLoginScreenLeftPane);

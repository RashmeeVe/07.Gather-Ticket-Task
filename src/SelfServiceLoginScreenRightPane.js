import React from "react";
import Avatar from "@material-ui/core/Avatar";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import styles from "./MyStyles";

import { withStyles } from "@material-ui/styles";

function SelfServiceLoginScreenRightPane(props) {
  const { classes, nameOfTheDeceased } = props;
  //let YearOfBirth, YearOfDeath, avatarURL, avatarDefaultURL, overlayElementColor;
  const YearOfBirth = "1945";
  const YearOfDeath = "2021";
  const avatarURL = "";
  const avatarDefaultURL =
    "https://previews.123rf.com/images/pandavector/pandavector1901/pandavector190105561/126045782-vector-illustration-of-avatar-and-dummy-sign-collection-of-avatar-and-image-stock-symbol-for-web-.jpg";
  const overlayElementColor = "red";
  return (
    <>
      <div className={classes.RightPaneStepOuterDiv}>
        <div className={classes.closeIconDiv}>
          <CloseIcon
            onClick={props.handleClose}
            className={classes.closeIcon}
          />
        </div>
        <div className={classes.avatarDiv}>
          <Avatar
            alt="Avatar"
            src={avatarURL ? avatarURL : avatarDefaultURL}
            className={classes.avatar}
          />
        </div>
        <div className={classes.personNameDiv}>
          <Typography>
            <span className={classes.NameOfThePerson}>{nameOfTheDeceased}</span>
            <br />
            {(YearOfBirth || YearOfDeath) && (
              <span>
                {YearOfBirth}-{YearOfDeath}
              </span>
            )}
          </Typography>
        </div>
        {/* <div
          className={classes.overlayElement}
          style={{ backgroundColor: overlayElementColor }}
        ></div> */}
      </div>
    </>
  );
}

export default withStyles(styles)(SelfServiceLoginScreenRightPane);

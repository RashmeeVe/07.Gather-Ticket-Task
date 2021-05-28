const styles = {
  selfServiceLoginScreenOuterDiv: {
    maxWidth: 800,
    maxHeight: 700,
    height: 700,
    width: 800,
    "@media only screen and (max-width: 864px)": {
      width: "100%",
      height: "auto",
    },
  },

  selfServiceLoginScreen: {
    display: "flex",
    height: "100%",
    width: "100%",
    padding: "0px",
    backgroundImage: `url("https://cdn.shopify.com/s/files/1/1276/5263/products/17S01YTB154_045fddf2-278c-4d51-be9e-31b5ed628557_1024x1024.jpg?v=1571439888")`,
    "@media only screen and (max-width: 864px)": {
      flexDirection: "column-reverse",
    },
  },

  selfServiceLoginScreenLeftPane: {
    height: "100%",
    width: "40%",
    boxShadow: "none",
    backgroundColor: "white",
    "@media only screen and (max-width: 864px)": {
      width: "100%",
    },
  },

  LeftPaneStepOuterDiv: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    "@media only screen and (max-width: 864px)": {
      width: "100%",
      height: "30%",
    },
  },
  logoAndBackButtonDiv: {
    padding: "20px 0px 20% 20px",
    "@media only screen and (max-width: 864px)": {
      padding: "20px 20px 0px 20px",
    },
  },
  companyLogo: {
    width: "50px",
    height: "20px",
    "@media only screen and (max-width: 864px)": {
      display: "none",
    },
  },

  backButton: {
    cursor: "pointer",
  },

  greetingsDiv: {
    textAlign: "center",
  },

  greetingsText: {
    fontSize: "25px",
    color: "#808080",
  },

  formDiv: {
    padding: "20px 20px 0px 20px",
    textAlign: "center",
  },
  selfServiceLoginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 2,
  },

  textFields: {
    width: "100%",
    fontStyle: "italic",
  },

  relationWithDeceasedButton: {
    boxShadow: "none",
    margin: 8,
    textTransform: "none",
    width: 35,
    height: 60,
    fontSize: 13,
    padding: 0,
    border: "1px solid",
    color: "#5c85d6",
    backgroundColor: "white",
    borderColor: "#b3d7ff",
    "&:hover": {
      color: "white",
      backgroundColor: "#5c85d6",
      borderColor: "#5c85d6",
    },
    "&:focus": {
      color: "white",
      backgroundColor: "#5c85d6",
    },
  },

  submitFormDiv: {
    padding: "20px 20px 10px 20px",
  },

  continueButton: {
    width: "100%",
    height: "90%",
    backgroundColor: "#5c85d6",
    color: "white",
    paddingLeft: 0,
    paddingRight: 0,
  },
  alreadyHaveAccountText: {
    paddingBottom: "10px",
    textAlign: "center",
    fontSize: "12px",
  },

  loginNowText: {
    color: "#5c85d6",
  },

  selfServiceLoginScreenRightPane: {
    height: "100%",
    width: "60%",
    boxShadow: "none",
    "@media only screen and (max-width: 864px)": {
      width: "100%",
    },
  },

  RightPaneStepOuterDiv: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
  },

  closeIconDiv: {
    flexBasis: "20%",
    textAlign: "right",
    paddingTop: "20px",
    paddingRight: "20px",
    "@media only screen and (max-width: 864px)": {
      paddingTop: "10px",
      paddingRight: "10px",
    },
  },
  closeIcon: {
    cursor: "pointer",
    opacity: 0.5,
  },

  avatarDiv: {
    flexBasis: "30%",
    alignContent: "center",
  },
  avatar: {
    width: 140,
    height: 140,
    marginLeft: "auto",
    marginRight: "auto",
    border: "3px solid white",
    "@media only screen and (max-width: 864px)": {
      width: 80,
      height: 80,
    },
  },
  personNameDiv: {
    flexBasis: "50%",
    textAlign: "center",
  },
  NameOfThePerson: {
    fontFamily: "Great Vibes",
    fontSize: "4em",
    "@media only screen and (max-width: 864px)": {
      fontSize: "2em",
    },
  },
  overlayElement: {
    position: "absolute",
    top: "0px",
    height: "100%",
    width: "60%",
    opacity: 0,
    "&:hover": {
      opacity: 0.2,
    },
  },
};

export default styles;

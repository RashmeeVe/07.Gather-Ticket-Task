const styles = {
  selfServiceLoginScreenOuterDiv: {
    maxWidth: 800,
    maxHeight: 700,
    height: 700,
    width: 800,
    "@media only screen and (max-width: 864px)": {
      width: "600px",
      height: "500px",
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
      position: "absolute",
      width: "100%",
      height: "60%",
      top: "40%",
      overflow: "auto !important",
    },
  },

  LeftPaneStepOuterDiv: {
    position: "absolute",
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "40%",
    "@media only screen and (max-width: 864px)": {
      width: "100%",
      height: "100%",
    },
  },
  logoAndBackButtonDiv: {
    padding: "20px 0px 15% 20px",
    "@media only screen and (max-width: 864px)": {
      padding: "20px 20px 0px 20px",
    },
  },
  blankDiv: {
    padding: "10%",
    "@media only screen and (max-width: 864px)": {
      display: "none",
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
    fontSize: "24px",
    color: "#757575",
  },

  formDiv: {
    padding: "20px 20px 0px 20px",
    textAlign: "center",
  },

  selfServiceLoginForm: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-between",
    flexGrow: 1,
  },

  textFields: {
    width: "100%",
    marginTop: 15,
    "& input::placeholder": {
      fontStyle: "italic",
    },
  },

  relationWithDeceased: {
    width: "80%",
    height: "30px !important",
    "& input": {
      padding: "10px",
    },
  },

  relationWithDeceasedButton: {
    boxShadow: "none",
    lineHeight: "1",
    margin: 8,
    textTransform: "none",
    width: 28,
    height: 68,
    fontSize: 12,
    padding: 0,
    border: "1px solid",
    color: "#7194da",
    backgroundColor: "white",
    borderColor: "#b3d7ff",
    "&:hover": {
      color: "white",
      backgroundColor: "#7194da",
      borderColor: "#7194da",
    },
    "&:focus": {
      color: "white",
      backgroundColor: "#7194da",
    },
  },
  relationWithDeceasedIcon: {
    height: "1.5em",
    width: "1.5em",
  },

  submitFormDiv: {
    padding: "20px 20px 10px 20px",
  },

  continueButton: {
    fontSize: "13px",
    width: "100%",
    height: "80%",
    backgroundColor: "#7194da",
    color: "white",
    paddingLeft: 0,
    paddingRight: 0,
  },
  alreadyHaveAccountText: {
    paddingBottom: "15px",
    textAlign: "center",
    fontSize: "12px",
    color: "#757575",
  },

  termsAndPoliciesText: {
    paddingBottom: "15px",
    textAlign: "center",
    fontSize: "10px",
    color: "#757575",
  },

  loginNowText: {
    color: "#7194da",
    fontWeight: "bold",
  },

  selfServiceLoginScreenRightPane: {
    height: "100%",
    width: "60%",
    boxShadow: "none",
    backgroundColor: "inherit",
    "@media only screen and (max-width: 864px)": {
      position: "absolute",
      top: "0px",
      width: "100%",
      height: "40%",
    },
  },

  RightPaneStepOuterDiv: {
    display: "flex",
    flexDirection: "column",
    height: "100%",
    width: "100%",
    "@media only screen and (max-width: 864px)": {
      width: "100%",
    },
  },

  closeIconDiv: {
    zIndex: 1,
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
    width: "100%",
    opacity: 0,
    "&:hover": {
      opacity: 0.2,
    },
    "@media only screen and (max-width: 864px)": {
      width: "100%",
      height: "40%",
    },
  },

  /* Sliding Functionality */
  // "MuiDialog-paperWidthLg": {
  //   overflow: "hidden !important",
  // },

  // "slide-enter": {
  //   transform: "translateY(100%)",
  // },

  // "slide-enter-active": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },

  // "slide-exit": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },
  // "slide-exit-active": {
  //   transform: "translateY(-100%)",
  //   transition: "transform 900ms",
  // },
  // "slide-exit-done": {
  //   transform: "translateY(-100%)",
  // },

  // @media only screen and (max-width: 864px) {
  //   "slide-enter": {
  //     transform: "translateY(130%)",
  //   }
  //   "slide-exit-active" {
  //     transform: "translateY(-130%)",
  //   }
  //   "slide-exit-done" {
  //     transform: "translateY(-130%)",
  //   }
  // }

  /* Slide Back */
  // "slide-back-enter": {
  //   transform: "translateY(-700px)",
  // },
  // "slide-back-enter-active": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },
  // "slide-back-enter-done": {
  //   transform: "translateY(0px)",
  // },

  // "slide-back-exit": {
  //   transform: "translateY(0px)",
  //   transition: "transform 900ms",
  // },
  // "slide-back-exit-active": {
  //   transform: "translateY(700px)",
  //   transition: "transform 900ms",
  // },
  // "slide-back-exit-done": {
  //   transform: "translateY(700px)",
  // },

  // @media only screen and (max-width: 864px) {
  //   "slide-back-enter": {
  //     transform: "translateY(-100%)",
  //   }
  //   "slide-back-exit-active": {
  //     transform: "translateY(100%)",
  //   }
  //   "slide-back-exit-done": {
  //     transform: "translateY(200%)",
  //   }
};

export default styles;

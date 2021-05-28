import React from "react";
import Slide from "@material-ui/core/Slide";
import LeftPaneStep1 from "./LeftPaneStep1";
import LeftPaneStep2 from "./LeftPaneStep2";
import LeftPaneStep3 from "./LeftPaneStep3";

class SelfServiceLoginScreenLeftPane extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fname: "",
      lname: "",
      direction: "up",
      isStep1Visible: true,
      isStep2Visible: false,
      isStep3Visible: false,
    };
  }
  handleFormEntries = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    return true;
  };

  handleButtonClick = (goToStep, nextPrevStep) => {
    const direction = nextPrevStep === "nextStep" ? "up" : "down";
    this.setState({ direction });
    switch (goToStep) {
      case "goToStep1":
        this.setState({
          isStep1Visible: true,
          isStep2Visible: false,
          isStep3Visible: false,
        });
        break;

      case "goToStep2":
        this.setState({
          isStep1Visible: false,
          isStep2Visible: true,
          isStep3Visible: false,
        });
        break;

      case "goToStep3":
        this.setState({
          isStep1Visible: false,
          isStep2Visible: false,
          isStep3Visible: true,
        });
        break;

      default:
        return;
    }
  };

  render() {
    const { fnameOfTheDeceased } = this.props;
    const { fname, direction, isStep1Visible, isStep2Visible, isStep3Visible } =
      this.state;

    return (
      <>
        {isStep1Visible && (
          <Slide
            direction={direction}
            in={isStep1Visible}
            timeout={{ enter: 2000, exit: 450 }}
            mountOnEnter
            unmountOnExit
          >
            <LeftPaneStep1
              handleButtonClick={this.handleButtonClick}
              fnameOfTheDeceased={fnameOfTheDeceased}
            />
          </Slide>
        )}

        {isStep2Visible && (
          <Slide
            direction={direction}
            in={isStep2Visible}
            timeout={{ enter: 2000, exit: 450 }}
            mountOnEnter
            unmountOnExit
          >
            <LeftPaneStep2
              handleButtonClick={this.handleButtonClick}
              fname={fname}
              fnameOfTheDeceased={fnameOfTheDeceased}
            />
          </Slide>
        )}
        {isStep3Visible && (
          <Slide
            // direction="up"
            direction={direction}
            in={isStep3Visible}
            timeout={{ enter: 2000, exit: 450 }}
            mountOnEnter
            unmountOnExit
          >
            <LeftPaneStep3 handleButtonClick={this.handleButtonClick} />
          </Slide>
        )}
      </>
    );
  }
}

export default SelfServiceLoginScreenLeftPane;

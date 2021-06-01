import React from "react";
import Button from "@material-ui/core/Button";
import SelfServiceLoginScreen from "./SelfServiceLoginScreen";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isDialogBoxOpen: false };
  }
  handleClickOpen = () => {
    this.setState({ isDialogBoxOpen: true });
  };

  handleClose = () => {
    this.setState({ isDialogBoxOpen: false });
  };
  render() {
    const { isDialogBoxOpen } = this.state;
    return (
      <>
        <div className="App">
          <Button
            variant="outlined"
            color="primary"
            onClick={this.handleClickOpen}
          >
            Click Me
          </Button>
        </div>

        {isDialogBoxOpen && (
          <SelfServiceLoginScreen
            isDialogBoxOpen={isDialogBoxOpen}
            handleClose={this.handleClose}
          />
        )}
      </>
    );
  }
}

export default App;

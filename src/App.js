import React from "react";
import "./Style/App.css";
import "./Style/WincFooter.css";
import "./Style/WincHeader.css";
import "./Style/CheckBoxes.css";
import "./Style/SelectStudentMenu.css";
import Header from "./components/WincHeader";
import Footer from "./components/WincFooter";
import RouteList from "./components/RouteList";
import { Switch } from "react-router-dom";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showDifficulty: true,
      showEnjoyment: true,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleRoute = this.handleRoute.bind(this);
  }
  handleChange(event) {
    const { name, value, type, checked } = event.target;
    if (type === "checkbox") {
      this.setState({ [name]: checked });
    } else {
      this.setState({ [name]: value });
    }
  }

  handleRoute(name) {
    this.setState({ selectedStudent: name });
  }

  render() {
    return (
      <div>
        <Header />

        <Switch>
          <RouteList
            data={this.state}
            handleChange={this.handleChange}
            handleRoute={this.handleRoute}
          />
        </Switch>

        <Footer />
      </div>
    );
  }
}

export default App;

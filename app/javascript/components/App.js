import React, { Component } from "react"
import { getQualities } from "../services/qualities";
import { Quality } from "../components";

/**
 * This component will manage data and render the top level page
 */
class App extends Component {

  state = {
    qualities: []
  }

  constructor(props) {
    super(props);
    this.initState();
  }

  initState() {
    var qualities = getQualities();
    this.state = {
      qualities: qualities
    };
  }

  render () {
    return (
      <div>
        <div className="row">
          <div className="col-md-12">
            <h2 className="text-center" style={ styles.headerStyles }>
              Creative Qualities
            </h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="row">
              { this.state.qualities.map((quality) => <div className="col-md-4"><Quality quality={ quality } /></div> ) }
            </div>
          </div>
        </div>
      </div>
    );
  }
}

var styles = {
  headerStyles: {
    textTransform: "uppercase",
    fontWeight: "800"
  }
}

export default App

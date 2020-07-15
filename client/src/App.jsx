import React, { Component } from "react";
import UIShell from "./components/UIShell";
import "./App.scss";

import {StockItemService} from "./services/stock-item.service";

class App extends Component {
  constructor(props) {
    super(props);

    this.stockService = props.stockService || new StockItemService();
  }

  render() {
    return (
      <div className="App">
        <UIShell stockService={this.stockService}/>
      </div>
    );
  }
}
export default App;

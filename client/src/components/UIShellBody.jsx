import React, {Component} from "react";
import "../pattern-components/patterns.scss";

import StockItemList from "./StockItemList";

class UIShellBody extends Component {
  components = {
    "Stock Items": StockItemList
  };
  defaultComponent = "Stock Items";

  render() {
    const PatternName = this.components[
      this.props.patternName || this.defaultComponent
    ];
    return (
      <div className="pattern-container">
        <PatternName showDescription={true} stockService={this.props.stockService} />
      </div>
    );
  }
}
export default UIShellBody;

// import "./Index.bs.js";

import { make as WildcardsProvider } from "./harberger-lib/components/WildcardsProvider.gen";
import { make as UsdPriceProvider } from "./harberger-lib/components/UsdPriceProvider.gen";
import App from "./App";
import React from "react";
import ReactDOM from "react-dom";

ReactDOM.render(
  <WildcardsProvider
    stewardContractAddress="0x4bE0Eab8f41c8109AA134509086Cbcb18b10C0fB"
    graphEndpoint="api.thegraph.com/subgraphs/name/wildcards-world/harberger-sample-graph"
  >
    <UsdPriceProvider>
      <App />
    </UsdPriceProvider>
  </WildcardsProvider>,
  document.getElementById("root")
);

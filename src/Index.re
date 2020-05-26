[@bs.module "./steward-abi.json"] external stewardAbi: Web3.abi = "default";

ReactDOMRe.renderToElementWithId(
  <WildcardsProvider
    stewardAbi
    stewardContractAddress="0x4bE0Eab8f41c8109AA134509086Cbcb18b10C0fB"
    graphEndpoint="api.thegraph.com/subgraphs/name/wildcards-world/harberger-sample-graph">
    <UsdPriceProvider> <App /> </UsdPriceProvider>
  </WildcardsProvider>,
  "root",
);

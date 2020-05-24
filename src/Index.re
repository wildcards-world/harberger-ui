ReactDOMRe.renderToElementWithId(
  <WildcardsProvider
    stewardContractAddress="0x0C00CFE8EbB34fE7C31d4915a43Cde211e9F0F3B"
    graphEndpoint="api.thegraph.com/subgraphs/name/wild-cards/wildcards-goerli">
    <UsdPriceProvider> <App /> </UsdPriceProvider>
  </WildcardsProvider>,
  "root",
);

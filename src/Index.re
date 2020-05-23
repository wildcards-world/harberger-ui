ReactDOMRe.renderToElementWithId(
  <WildcardsProvider
    graphEndpoint="api.thegraph.com/subgraphs/name/wild-cards/wildcards-goerli">
    <UsdPriceProvider> <App /> </UsdPriceProvider>
  </WildcardsProvider>,
  "root",
);

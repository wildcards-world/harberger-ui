[@gentype]
[@react.component]
let make = (~graphEndpoint, ~children) => {
  let client =
    React.useMemo1(
      () => Client.instance(~graphEndpoint),
      [|graphEndpoint|],
    );

  <RootProvider>
    <ReasonApollo.Provider client>
      <ReasonApolloHooks.ApolloHooks.Provider client>
        <QlStateManager> children </QlStateManager>
      </ReasonApolloHooks.ApolloHooks.Provider>
    </ReasonApollo.Provider>
  </RootProvider>;
};

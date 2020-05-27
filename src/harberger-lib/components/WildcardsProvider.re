[@gentype]
[@react.component]
let make =
    (
      ~graphEndpoint,
      ~children,
      ~stewardContractAddress: option(Web3.ethAddress)=?,
      ~stewardAbi: option(Web3.abi)=?,
    ) => {
  let client =
    React.useMemo1(
      () => Client.instance(~graphEndpoint),
      [|graphEndpoint|],
    );

  <RootProvider stewardContractAddress stewardAbi>
    <ReasonApollo.Provider client>
      <ReasonApolloHooks.ApolloHooks.Provider client>
        <QlStateManager> children </QlStateManager>
      </ReasonApolloHooks.ApolloHooks.Provider>
    </ReasonApollo.Provider>
  </RootProvider>;
};

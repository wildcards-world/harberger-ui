open Globals;

[@react.component]
let make = () => {
  <div>
    <h3> "Connection Button:"->restr </h3>
    <Web3Connect />
    <Web3Connect.Modal />
    <h3> "Profile Icon:"->restr </h3>
    <ProfileIcon />
    <h3> "Token Info:"->restr </h3>
    <Info tokenId={TokenId.makeFromInt(0)} />
    <h3> "Buy this token:"->restr </h3>
    <Buy tokenId={TokenId.makeFromInt(0)} />
    <h3> "Change price"->restr </h3>
    <UpdatePrice tokenId={TokenId.makeFromInt(0)} />
    <h3> "Update Deposit"->restr </h3>
    <UpdateDeposit />
    <h2> "Some react!"->restr </h2>
  </div>;
};

open Globals;

[@react.component]
let make = () => {
  <div>
    <h3> "Connection Button:"->restr </h3>
    <Web3Connect />
    <Web3Connect.Modal />
    <h3> "Profile Icon:"->restr </h3>
    <ProfileIcon />
    <h2> "Some react!"->restr </h2>
  </div>;
};

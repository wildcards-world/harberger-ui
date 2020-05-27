import {
  make as Web3Connect,
  Modal_make as Web3ConnectModal,
} from "./harberger-lib/components/Web3Connect.gen";
import { make as ProfileIcon } from "./harberger-lib/components/ProfileIcon.gen";
import { make as Info } from "./harberger-lib/components/Info.gen";
import { make as Buy } from "./harberger-lib/components/Buy.gen";
import { make as UpdatePrice } from "./harberger-lib/components/UpdatePrice.gen";
import { make as UpdateDeposit } from "./harberger-lib/components/UpdateDeposit.gen";

import React from "react";

export default () => (
  <div>
    <h3>Connection Button:</h3>
    <Web3Connect />
    <Web3ConnectModal />
    <h3>Profile Icon:</h3>
    <ProfileIcon />
    <h3>Token Info:</h3>
    <Info tokenId={"0"} />
    <h3>Buy this token:</h3>
    <Buy tokenId={"0"} />
    <h3>Change price</h3>
    <UpdatePrice tokenId={"0"} />
    <h3>Update Deposit</h3>
    <UpdateDeposit />
    <h2>Some react!</h2>
  </div>
);

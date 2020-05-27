/* TypeScript file generated from WildcardsProvider.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const WildcardsProviderBS = require('./WildcardsProvider.bs');

import {abi as Web3_abi} from '../../../src/harberger-lib/Web3.gen';

import {ethAddress as Web3_ethAddress} from '../../../src/harberger-lib/Web3.gen';

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly children: React.ReactNode; 
  readonly graphEndpoint: string; 
  readonly stewardAbi?: Web3_abi; 
  readonly stewardContractAddress?: Web3_ethAddress
};

export const make: React.ComponentType<{
  readonly children: React.ReactNode; 
  readonly graphEndpoint: string; 
  readonly stewardAbi?: Web3_abi; 
  readonly stewardContractAddress?: Web3_ethAddress
}> = WildcardsProviderBS.make;

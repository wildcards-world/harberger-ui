/* TypeScript file generated from BuyInput.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const BuyInputBS = require('./BuyInput.bs');

// tslint:disable-next-line:interface-over-type-literal
export type Props = {
  readonly deposit: string; 
  readonly depositTimeInSeconds: number; 
  readonly maxAvailableDeposit: string; 
  readonly newPrice: string; 
  readonly onSubmitBuy: () => void; 
  readonly patronage: string; 
  readonly setDeposit: (_1:string) => void; 
  readonly setNewPrice: (_1:string) => void; 
  readonly tokenIdName: string
};

export const make: React.ComponentType<{
  readonly deposit: string; 
  readonly depositTimeInSeconds: number; 
  readonly maxAvailableDeposit: string; 
  readonly newPrice: string; 
  readonly onSubmitBuy: () => void; 
  readonly patronage: string; 
  readonly setDeposit: (_1:string) => void; 
  readonly setNewPrice: (_1:string) => void; 
  readonly tokenIdName: string
}> = BuyInputBS.make;

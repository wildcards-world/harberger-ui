/* TypeScript file generated from Buy.re by genType. */
/* eslint-disable import/first */


import * as React from 'react';

// tslint:disable-next-line:no-var-requires
const BuyBS = require('./Buy.bs');

import {t as TokenId_t} from '../../../src/harberger-lib/TokenId.gen';

// tslint:disable-next-line:interface-over-type-literal
export type Props = { readonly tokenId: TokenId_t };

export const make: React.ComponentType<{ readonly tokenId: TokenId_t }> = BuyBS.make;

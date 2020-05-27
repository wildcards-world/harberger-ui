// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Css from "bs-css-emotion/src/Css.js";
import * as Curry from "bs-platform/lib/es6/curry.js";
import * as React from "react";
import * as RimbleUi from "rimble-ui";
import * as Login$WildCards from "./Login.bs.js";
import * as Styles$WildCards from "./Styles.bs.js";
import * as Globals$WildCards from "./Globals.bs.js";
import * as ReasonReactRouter from "reason-react/src/ReasonReactRouter.js";
import * as RootProvider$WildCards from "./RootProvider.bs.js";

var infoModalStyle = Curry._1(Css.style, /* :: */[
      Css.padding(Css.rem(3)),
      /* :: */[
        Css.borderRadius(Css.px(5)),
        /* :: */[
          Css.width(Css.px(640)),
          /* :: */[
            Css.maxWidth(/* `vw */[
                  26433,
                  100
                ]),
            /* [] */0
          ]
        ]
      ]
    ]);

function Web3Connect(Props) {
  var clickActionOpt = Props.clickAction;
  var clickAction = clickActionOpt !== undefined ? clickActionOpt : (function (param) {
        
      });
  var connectWeb3 = RootProvider$WildCards.useConnectWeb3(undefined);
  var deactivateWeb3 = RootProvider$WildCards.useDeactivateWeb3(undefined);
  var networkIdOpt = RootProvider$WildCards.useNetworkId(undefined);
  var connectedNetworkName = function (networkId) {
    if (networkId >= 6) {
      if (networkId !== 42) {
        return "Unknown\xa0";
      } else {
        return "KOVAN\xa0";
      }
    }
    if (networkId <= 0) {
      return "Unknown\xa0";
    }
    switch (networkId - 1 | 0) {
      case 0 :
          return "MAINNET\xa0";
      case 1 :
          return "Unknown\xa0";
      case 2 :
          return "ROPSTEN\xa0";
      case 3 :
          return "RINKEBY\xa0";
      case 4 :
          return "GOERLI\xa0";
      
    }
  };
  var web3Button = networkIdOpt !== undefined ? React.createElement(RimbleUi.Button, {
          mainColor: "#72C7D7",
          children: null,
          onClick: (function (_e) {
              Curry._1(clickAction, undefined);
              return Curry._1(deactivateWeb3, undefined);
            })
        }, connectedNetworkName(networkIdOpt), React.createElement(RimbleUi.Icon, {
              name: "ExitToApp",
              size: "16px"
            })) : React.createElement(RimbleUi.Button, {
          mainColor: "#72C7D7",
          children: "Connect",
          onClick: (function (_e) {
              Curry._1(clickAction, undefined);
              ReasonReactRouter.push("#");
              return Curry._1(connectWeb3, /* NoAction */0);
            })
        });
  return React.createElement("div", {
              className: Styles$WildCards.loginButton
            }, web3Button);
}

function Web3Connect$Modal(Props) {
  var showLogin = RootProvider$WildCards.useShowLogin(undefined);
  var closeLogin = RootProvider$WildCards.useCloseWeb3Login(undefined);
  return React.createElement(RimbleUi.Modal, {
              isOpen: showLogin,
              children: React.createElement(RimbleUi.Card, {
                    className: infoModalStyle,
                    children: null
                  }, React.createElement(RimbleUi.Button.Text, {
                        onClick: (function (param) {
                            return Curry._1(closeLogin, undefined);
                          }),
                        icononly: true,
                        icon: "Close",
                        color: "moon-gray",
                        position: "absolute",
                        top: 0,
                        right: 0,
                        m: 3
                      }), React.createElement(RimbleUi.Heading, {
                        children: Globals$WildCards.restr("Login"),
                        className: Styles$WildCards.centerText
                      }), React.createElement(Login$WildCards.make, { }))
            });
}

var Modal = {
  make: Web3Connect$Modal
};

var make = Web3Connect;

export {
  infoModalStyle ,
  make ,
  Modal ,
  
}
/* infoModalStyle Not a pure module */
// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as $$String from "bs-platform/lib/es6/string.js";

function isStringInteger(str) {
  var f = /^([0-9]\d+)$/;
  return f.test(str);
}

function elipsify(inputString, maxLength) {
  if (inputString.length > maxLength) {
    return $$String.sub("" + (String(inputString) + ""), 0, maxLength - 3 | 0) + "...";
  } else {
    return inputString;
  }
}

export {
  isStringInteger ,
  elipsify ,
  
}
/* No side effect */

// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE

import * as Curry from "bs-platform/lib/es6/curry.js";
import * as Js_exn from "bs-platform/lib/es6/js_exn.js";

global.Promise = require('bluebird')
;

Promise.config({
  warnings: false
})
;

function let_(p, cb) {
  return p.then(Curry.__1(cb));
}

function mapAsync(p, cb) {
  return p.then((function (a) {
                return Promise.resolve(Curry._1(cb, a));
              }));
}

function async(a) {
  return Promise.resolve(a);
}

function catchAsync(p, cb) {
  return p.catch(Curry.__1(cb));
}

function asyncFromResult(result) {
  return mapAsync(Promise.resolve(result), (function (a) {
                if (a.tag) {
                  return Js_exn.raiseError(a[0]);
                } else {
                  return a[0];
                }
              }));
}

function attemptMapAsync(promise, attempter) {
  return mapAsync(promise, (function (a) {
                var b = Curry._1(attempter, a);
                if (b.tag) {
                  return Js_exn.raiseError(b[0]);
                } else {
                  return b[0];
                }
              }));
}

export {
  let_ ,
  mapAsync ,
  async ,
  catchAsync ,
  asyncFromResult ,
  attemptMapAsync ,
  
}
/*  Not a pure module */

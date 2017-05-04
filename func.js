/*!
 * Created by Vishal
 * Last Updated: 18.07.2016 1022 hrs
 *
 * funcJS - JavaScript library for Functional Programming.
 *
 * Assumptions:
 *
 * 1. ES6 based runtime environment.
 *
 */
(function (global) {
  "use strict";

  //TODO: Refactor with es6 reduce.
  //Powerful Function Composition.
  global.compose = function (...func) {
    return function (...args) {
      let result;
      func.forEach(function (f) {
        result = result === undefined ? 
          f.apply(this, args) : f(result);
      });
      return result;
    };
  };

  //Function Curry.
  global.curry = function (func, ...first) {
    return function (...second) {
      return func.apply(this, first.concat(second));
    };
  };

  //Auto-Currying of functions by modifying Function.prototype.
  Function.prototype.autoCurry = function (numArgs) {
    let func = this;
    numArgs = numArgs || this.length;

    return function (...args) {
      if (args.length < numArgs) {
        return func.autoCurry.apply(curry.apply(this, 
              [func].concat(args)), [numArgs - args.length]);
      }
      else {
        return func.apply(this, args);
      }
    };
  };
}(window || this));

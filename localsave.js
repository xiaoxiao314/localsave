'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

function localsave() {
  this.setData = function(src,data) {
    let value = JSON.stringify(data)
    localStorage.setItem(src, value)
    return
  };
  this.getData = function(src) {
    let value = JSON.parse(localStorage.getItem(src))
    return value
  };
  this.run = function(src,data) {
    if(this.getData(src)){
      return this.getData(src)
    } else {
      this.setData(src,data)
      return this.getData(src)
    }
  };
};

module.exports = localsave;









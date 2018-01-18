var localsave = function () {}
localsave.setData = function(src,data) {
  let value = JSON.stringify(data)
  localStorage.setItem(src, value)
  return
};
localsave.getData = function(src) {
  let value = JSON.parse(localStorage.getItem(src))
  return value
};
localsave.run = function(src,data) {
  if(this.getData(src)){
    return this.getData(src)
  } else {
    this.setData(src,data)
    return this.getData(src)
  }
};
export {localsave}
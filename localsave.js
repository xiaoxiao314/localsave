var localsave = function () {}

localsave.setAndGetData = function(src) {
    reqwest({
        url: url,
        method: 'get',
        type: 'json',
        success (resp) {
            let value = JSON.stringify(resp)
            localStorage.setItem(src, value)
            return resp
        }
    })
};

localsave.getData = function(src) {
    let value = JSON.parse(localStorage.getItem(src))
    return value
};

export {localsave}
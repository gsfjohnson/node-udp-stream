
function throwFail(text) { throw new Error(text) }
const test = false;

let option;
option = test || throwFail('whatever');

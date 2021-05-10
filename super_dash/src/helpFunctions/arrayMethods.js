export const sumFunc = array=> {
    return array.reduce((a,b)=>{return a+b},0)
};
export const meanFunc = array=> {
    return sumFunc(array)/array.length;
}
export const maxFunc = array=> {
    return array.reduce((a,b)=>{return Math.max(a,b)},-Infinity);
}
export const minFunc = array=> {
    return array.reduce((a,b)=>{return Math.min(a,b)},Infinity);
}
// Code borrowed from https://www.30secondsofcode.org/js/s/most-frequent
export const mostFrequentFunc = arr => Object.entries(arr.reduce((a, v) => {a[v] = a[v] ? a[v] + 1 : 1;return a;}, {})).reduce((a, v) => (v[1] >= a[1] ? v : a), [null, 0])[0];

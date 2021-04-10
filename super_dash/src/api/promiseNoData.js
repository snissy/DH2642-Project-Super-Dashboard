

function promiseNoData(promise, data, error){

    // If var is truthy, !var will return false
    // If var is falsy, !var will return true
    if (error){
        return <span>{error+""}</span>
    }
    
    if (!promise){

        return <span>no data</span>
    }

    if (!data){
        return <div><img src="http://www.csc.kth.se/~cristi/loading.gif"></img></div>
    }
    
    // The promise exists, has data and has no error.
    return false

}

export default promiseNoData;
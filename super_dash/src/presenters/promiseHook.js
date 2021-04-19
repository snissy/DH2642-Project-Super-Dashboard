import {useEffect} from "react";

function usePromise(promise){

    const [data, setData] = React.useState(null);
    const [error, setError] = React.useState(null);

    useEffect(()=>{

        setData(null);
        setError(null);
        if(promise){ // Promise must be truthy,  not null
            promise
                .then(data => setData(data))
                .catch(er => setError(er))
        }
    },[promise])

    return [data, error]

}
export default usePromise
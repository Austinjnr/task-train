import { cleanup } from "@testing-library/react";
import { useState, useEffect } from "react";

const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() =>{

        const abortCont = new AbortController();

        setTimeout(() =>{
            fetch(url, {single: abortCont.single})
        .then(res => {
            if (!res.ok){
                throw Error('could not fetch data from that server');
            }
            return res.json()
        })
        .then((data => {
            setData(data);
            setLoading(false);
            setError(null);
        }))
        .catch(err => {
            if (err.name === 'AbortError') {
                console.log('fetch aborted')
            } else{
           setError(err.message);
           setLoading(false);
        }
        })
        }, 1000);
        return () => abortCont.abort();
    }, [url]); 
    return { data, loading, error };
}

export default useFetch;
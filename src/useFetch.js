import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // useEffect runs a function on every render
        const abortCont = new AbortController(); //this aborts an attempt to fetch data

        setTimeout(() => {
            fetch(url, { signal: abortCont.signal })
            .then(res => {
                if (!res.ok) {
                    throw Error("Couldn't fetch the data");
                }
                return res.json();
            })
            .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                if (err.name === 'AbortError') {
                    console.log('fetch aborted');
                } else {
                    setIsPending(false);
                    setError(err.message);
                }
            });
        }, 1000);

        return () => abortCont.abort();
    }, [url]); // useEffect dependencies are triggers for useEffect to run. If left empty, it will only run initially

    return {data, isPending, error};
}

export default useFetch;
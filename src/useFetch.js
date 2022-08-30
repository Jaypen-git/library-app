import {useState, useEffect} from 'react';

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => { // useEffect runs a function on every render
        setTimeout(() => {
            fetch(url)
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
                setIsPending(false);
                setError(err.message);
            })
        }, 1000);
    }, [url]); // useEffect dependencies are triggers for useEffect to run. If left empty, it will only run initially

    return {data, isPending, error};
}

export default useFetch;
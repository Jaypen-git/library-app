import { useState, useEffect } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] = useState(null);
    const [isPending, setIsPending] = useState(true)

    useEffect(() => { // useEffect runs a function on every render
        setTimeout(() => {
            fetch('http://localhost:8000/library')
            .then(res => {
                if (!res.ok) {
                    throw new Error("Couldn't fetch the data");
                }
                return res.json();
            })
            .then(data => {
                setBooks(data);
                setIsPending(false);
            })
            .catch(err => {
                console.log(err);
            })
        }, 1000);
    }, []); // useEffect dependencies are triggers for useEffect to run. If left empty, it will only run initially
    
    return ( 
        <div className="content">
            {isPending && <div>Loading...</div>}
            {/* reusable component for outputting a book list, passes down booklist and handle delete function as props */}
            {books && <BookList books={ books }/>}
        </div>
     );
}
 
export default Home;
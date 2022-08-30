import useFetch from "./useFetch";
import BookList from "./BookList";

const Home = () => {
    const {data: books, isPending, error} = useFetch('http://localhost:8000/library');
    return ( 
        <div className="content">
            { error && <div>Could not fetch the data</div>}
            {isPending && <div>Loading...</div>}
            {/* reusable component for outputting a book list, passes down booklist and handle delete function as props */}
            {books && <BookList books={ books }/>}
        </div>
     );
}
 
export default Home;
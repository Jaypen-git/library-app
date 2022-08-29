import { useState } from "react";
import BookList from "./BookList";

const Home = () => {
    const [books, setBooks] = useState([
        { id: 1, title: 'Book 1', author: 'Author 1', pages: 300, status: 'Read'},
        { id: 2, title: 'Book 2', author: 'Author 2', pages: 280, status: 'Read'},
        { id: 3, title: 'Book 3', author: 'Author 3', pages: 330, status: 'Unread'}
    ])
    const handleDelete = (id) => {
        const update = books.filter(book => book.id !== id); // this returns a new array that excludes books with the given id
        setBooks(update); // updates the state of book list on DOM
    }

    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Read?</th>
                </tr>
            </thead>
            {/* reusable component for outputting a book list, passes down booklist and handle delete function as props */}
            <BookList books={ books } handleDelete={ handleDelete }/> 
        </table>
     );
}
 
export default Home;
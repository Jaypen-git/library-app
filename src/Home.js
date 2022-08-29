import { useState } from "react";

const Home = () => {
    const [status, setStatus] = useState('Read');
    const [books, setBooks] = useState([
        { id: 1, title: 'Book 1', author: 'Author 1', pages: 300, status: 'Read'},
        { id: 2, title: 'Book 2', author: 'Author 2', pages: 280, status: 'Read'},
        { id: 3, title: 'Book 3', author: 'Author 3', pages: 330, status: 'Unread'}
    ])

    const handleStatus = () => {
        if (status === 'Read') {
            setStatus('Unread');
        } else {
            setStatus('Read');
        }
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
            <tbody>
                {books.map(book => (
                    <tr key={ book.id }>
                        <td>{ book.title }</td>
                        <td>{ book.author }</td>
                        <td>{ book.pages }</td>
                        <td><button onClick={handleStatus}>{ book.status }</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default Home;
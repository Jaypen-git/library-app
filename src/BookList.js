// props were passed down from parent component
const BookList = ({books}) => {
    const handleDelete = (id) => {
        fetch('http://localhost:8000/library/' + id, {
        method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
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
                    <tr key={ book.id } id={book.id}>
                        <td>{ book.title }</td>
                        <td>{ book.author }</td>
                        <td>{ book.pages }</td>
                        <td><button>{ book.status }</button></td>
                        <td><button onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default BookList;
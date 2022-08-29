// props were passed down from parent component
const BookList = ({books, handleDelete}) => {
    return ( 
        <tbody>
            {books.map(book => (
                <tr key={ book.id }>
                    <td>{ book.title }</td>
                    <td>{ book.author }</td>
                    <td>{ book.pages }</td>
                    <td><button>{ book.status }</button></td>
                    <td><button onClick={() => { handleDelete(book.id)}}>Delete</button></td>
                </tr>
            ))}
        </tbody>
     );
}
 
export default BookList;
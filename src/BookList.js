const BookList = ({books}) => {
    return ( 
        <tbody>
            {books.map(book => (
                <tr key={ book.id }>
                    <td>{ book.title }</td>
                    <td>{ book.author }</td>
                    <td>{ book.pages }</td>
                    <td><button>{ book.status }</button></td>
                    <td><button>Delete</button></td>
                </tr>
            ))}
        </tbody>
     );
}
 
export default BookList;
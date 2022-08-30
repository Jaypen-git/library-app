// props were passed down from parent component
const BookList = ({books}) => {
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
                        <td><button>{ book.status }</button></td>
                        <td><button>Delete</button></td>
                    </tr>
                ))}
            </tbody>
        </table>
     );
}
 
export default BookList;
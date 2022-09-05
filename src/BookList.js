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
        <div>
            {books.map(book => (
                <div className={book.id % 2 === 0 ? "grid grid-cols-6 justify-center items-center py-4 bg-blue-50" : "grid grid-cols-6 justify-center items-center py-4"} key={book.id} id={book.id}>
                    <p className="col-span-4 text-3xl font-medium px-1.5 ml-2">{ book.title }</p>
                    <button className="col-span-1 bg-blue-600 m-2 w-12 h-12 text-center rounded flex justify-center align-center">
                        <img src={require("./images/pencil.png")} alt="edit" className="w-10 h-10 my-1"/>
                    </button>
                    <button className="col-span-1 bg-red-600 m-2 w-12 h-12 text-center rounded flex justify-center align-center" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
                        <img src={require("./images/delete.png")} alt="delete" className="w-10 h-10 my-1"/>
                    </button>
                </div>
            ))}
        </div>
     );
}
 
export default BookList;
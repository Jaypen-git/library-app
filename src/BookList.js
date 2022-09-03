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
        // <table className="text-base text-center">
        //     <thead>
        //         <tr>
        //             <th className="px-3 py-1">Title</th>
        //             <th className="px-3 py-1">Author</th>
        //             <th className="px-3 py-1">Pages</th>
        //             <th className="px-3 py-1">Read?</th>
        //         </tr>
        //     </thead>
        //     <tbody>
        //         {books.map(book => (
        //             <tr key={ book.id } id={book.id}>
        //                 <td className="px-3 py-1">{ book.title }</td>
        //                 <td className="px-3 py-1">{ book.author }</td>
        //                 <td className="px-3 py-1">{ book.pages }</td>
        //                 <td className="px-3 py-1"><button>{ book.status }</button></td>
        //                 <td>
        //                     <button className="bg-red-600 text-gray-100 p-2 rounded" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
        //                         <img src={require("./images/delete.png")} alt="delete" className="w-6" />
        //                     </button>
        //                 </td>
        //             </tr>
        //         ))}
        //     </tbody>
        // </table>
        <div className="mt-4">
            {books.map(book => (
                <div className="grid grid-cols-6 justify-center items-center mb-4" key={book.id} id={book.id}>
                    <p className="col-span-4 text-2xl font-medium px-1.5 ml-2">{ book.title }</p>
                    <button className="col-span-1 bg-blue-600 m-2 w-10 h-10 text-center rounded flex justify-center align-center">
                        <img src={require("./images/pencil.png")} alt="edit" className="w-8 h-8 my-1"/>
                    </button>
                    <button className="col-span-1 bg-red-600 m-2 w-10 h-10 text-center rounded flex justify-center align-center" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
                        <img src={require("./images/delete.png")} alt="delete" className="w-8 h-8 my-1"/>
                    </button>
                </div>
            ))}
        </div>
     );
}
 
export default BookList;
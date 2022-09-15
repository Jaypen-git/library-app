import { Link } from "react-router-dom";

const MobileInfo = ({book, handleDelete, FormatTitle, index}) => {
    return ( 
        <div className={index % 2 !== 0 ? "grid grid-cols-6 justify-center items-center py-4 sm:py-10 px-2 sm:px-8 bg-blue-50" : "grid grid-cols-6 justify-center items-center py-4 sm:py-10 px-2 sm:px-8"}
                id={book.id} onClick={() => {
                    // ideally I don't need to do this
                    let target = document.getElementById(`${book.id}`).querySelector('.details');
                    let mainTitle = document.getElementById(`${book.id}`).querySelector('.main-title');
                    target.classList.toggle('hidden');
                    if (!target.classList.contains('hidden')){
                        mainTitle.innerText = '';
                    } else {
                        book.title.length > 14 ? mainTitle.innerText = FormatTitle(book.title) : mainTitle.innerText = book.title
                    }
                }}>
                    {/* {console.log(book.title.length)} */}
                    <p className="col-span-4 text-3xl sm:text-5xl font-medium px-1.5 ml-2 main-title">
                        {/* this should be named by the mainTitle state */}
                        { book.title.length > 14 ? FormatTitle(book.title) : book.title }
                    </p>
                    <Link to={"/edit/" + book.id}>
                        <button className="col-span-1 bg-blue-600 m-2 w-12 h-12 sm:w-16 sm:h-16 text-center rounded flex justify-center items-center">
                            <img src={require("./images/pencil.png")} alt="edit" className="w-10 h-10 sm:w-14 sm:h-14 block"/>
                        </button>
                    </Link>
                    <button className="col-span-1 bg-red-600 m-2 w-12 h-12 sm:w-16 sm:h-16 text-center rounded flex justify-center items-center" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
                        <img src={require("./images/delete.png")} alt="delete" className="w-10 h-10 sm:h-14 sm:w-14 block"/>
                    </button>
                    <div className="details hidden col-span-6">
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Title: ${book.title}` }</p>
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Author: ${book.author}` }</p>
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Pages: ${book.pages}` }</p>
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Status: ${book.status}` }</p>
                    </div>
                </div>
    );
}
 
export default MobileInfo;
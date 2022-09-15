import { Link } from "react-router-dom";

const InfoCard = ({book, handleDelete, FormatTitle}) => {
    return ( 
        <div className="grid grid-cols-2 grid-rows-4 text-2xl bg-gray-100 p-4 rounded-lg">
            <p className="col-span-2 my-4" onClick={(e) => {console.log(e.target.innerText.length)}}>{`${FormatTitle(book.title)}`}</p>
            <p className="col-span-2 my-4">{`By ${book.author}`}</p>
            <p className="col-span-2 my-4">{`${book.pages} Pages`}</p>
            <p className="col-span-2 my-4">{`Book is ${book.status}`}</p>
            <div className="col-span-2 flex justify-around">
                <Link to={"/edit/" + book.id}>
                    <button className="col-span-1 bg-blue-600 w-12 h-12 text-center rounded flex justify-center items-center">
                        <img src={require("./images/pencil.png")} alt="edit" className="w-10 h-10 block"/>
                    </button>
                </Link>
                <button className="col-span-1 bg-red-600 w-12 h-12 text-center rounded flex justify-center items-center" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
                    <img src={require("./images/delete.png")} alt="delete" className="w-10 h-10 block"/>
                </button>
            </div>
        </div>
    );
}
 
export default InfoCard;
import { Link } from 'react-router-dom';

// props were passed down from parent component
const BookList = ({books}) => {
    const handleDelete = (id) => {
        fetch('http://localhost:8000/library/' + id, {
        method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

    const shortenTitle = (title) => {
        let newString = '';
        let titleChars = Array.from(title);

        if (window.innerWidth >= 640 && window.innerWidth < 768) {
            while (titleChars.length > 18) {
                titleChars.pop();
            }
        } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
            while (titleChars.length > 24) {
                titleChars.pop();
            }
        } else {
            while (titleChars.length > 14) {
                titleChars.pop();
            }
        }
        // Don't need to loop through the whole array, just grab the last 3 items
        titleChars[titleChars.length - 1] = '.';
        titleChars[titleChars.length - 2] = '.';
        titleChars[titleChars.length - 3] = '.';
        newString = titleChars.join('');
        console.log(newString);
        return newString;
    }

    return ( 
        <div>
            {books.map(book => (
                    <div key={book.id} className={book.id % 2 === 0 ? "grid grid-cols-6 justify-center items-center py-4 bg-blue-50" : "grid grid-cols-6 justify-center items-center py-4"}
                    id={`book-${book.id}`} onClick={() => {
                        // ideally I don't need to do this
                        let target = document.querySelector(`#book-${book.id}`).querySelector('.details');
                        let mainTitle = document.querySelector(`#book-${book.id}`).querySelector('.main-title');
                        target.classList.toggle('hidden');
                        if (mainTitle.innerText !== ''){
                            mainTitle.innerText = '';
                        } else {
                            book.title.length > 14 ? mainTitle.innerText = shortenTitle(book.title) : mainTitle.innerText = book.title
                        }
                    }}>
                        {/* {console.log(book.title.length)} */}
                        <p className="col-span-4 text-3xl sm:text-4xl font-medium px-1.5 ml-2 main-title">
                            {/* this should be named by the mainTitle state */}
                            { book.title.length > 14 ? shortenTitle(book.title) : book.title }
                        </p>
                        <Link to={"/edit/" + book.id}>
                            <button className="col-span-1 bg-blue-600 m-2 w-12 h-12 sm:w-14 sm:h-14 text-center rounded flex justify-center align-center">
                                <img src={require("./images/pencil.png")} alt="edit" className="w-10 h-10 sm:w-12 sm:h-12 my-1"/>
                            </button>
                        </Link>
                        <button className="col-span-1 bg-red-600 m-2 w-12 h-12 sm:w-14 sm:h-14 text-center rounded flex justify-center align-center" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
                            <img src={require("./images/delete.png")} alt="delete" className="w-10 h-10 sm:w-12 sm:h-12 my-1"/>
                        </button>
                        <div className="details hidden col-span-6">
                            <p className="col-span-4 text-2xl sm:text-3xl font-medium px-1.5 ml-2">{ `Title: ${book.title}` }</p>
                            <p className="col-span-4 text-2xl sm:text-3xl font-medium px-1.5 ml-2">{ `Author: ${book.author}` }</p>
                            <p className="col-span-4 text-2xl sm:text-3xl font-medium px-1.5 ml-2">{ `Pages: ${book.pages}` }</p>
                            <p className="col-span-4 text-2xl sm:text-3xl font-medium px-1.5 ml-2">{ `Status: ${book.status}` }</p>
                        </div>
                    </div>
            ))}
        </div>
     );
}
 
export default BookList;
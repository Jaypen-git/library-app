import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

// props were passed down from parent component
const BookList = ({books}) => {
    const [WindowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', () => {
            setWindowSize(window.innerWidth);
        });
    }, [WindowSize]);

    const handleDelete = (id) => {
        fetch('http://localhost:8000/library/' + id, {
        method: 'DELETE'
        }).then(() => {
            window.location.reload();
        })
    }

    const FormatTitle = (title) => {
        let newString = '';
        let titleChars = Array.from(title);

        if (WindowSize < 640) {
            while (titleChars.length > 14) {
                titleChars.pop();
            }
        } else if (WindowSize >= 640 && WindowSize < 768) {
            while (titleChars.length > 16) {
                titleChars.pop();
            }
        } else if (WindowSize >= 768 && WindowSize < 1000) {
            while (titleChars.length > 18) {
                titleChars.pop();
            }
        } else {
            while (titleChars.length > 30) {
                titleChars.pop();
            }
        }
        // Don't need to loop through the whole array, just grab the last 3 items
        titleChars[titleChars.length - 1] = '.';
        titleChars[titleChars.length - 2] = '.';
        titleChars[titleChars.length - 3] = '.';
        newString = titleChars.join('');
        // console.log(newString);
        return newString;
    }

    return ( 
        <div>
            {books.map((book, index) => (
                <div key={book.id} className={index + 1 % 2 === 0 ? "grid grid-cols-6 justify-center items-center py-4 sm:py-10 px-2 sm:px-8 bg-blue-50" : "grid grid-cols-6 justify-center items-center py-4 sm:py-10 px-2 sm:px-8"}
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
                        {WindowSize < 960 && <button className="col-span-1 bg-blue-600 m-2 w-12 h-12 sm:w-16 sm:h-16 text-center rounded flex justify-center align-center">
                            <img src={require("./images/pencil.png")} alt="edit" className="w-10 h-10 sm:w-14 sm:h-14 my-1"/>
                        </button>}
                        {WindowSize >= 960 && <button className='bg-blue-600 text-gray-50 text-3xl w-32 h-14 rounded font-semibold mx-4'>Edit</button>}
                    </Link>
                    {WindowSize < 960 && <button className="col-span-1 bg-red-600 m-2 w-12 h-12 sm:w-16 sm:h-16 text-center rounded flex justify-center align-center" onClick={e => {handleDelete(e.target.parentNode.parentNode.id)}}>
                        <img src={require("./images/delete.png")} alt="delete" className="w-10 h-10 sm:h-14 sm:w-14 my-1"/>
                    </button>}
                    {WindowSize >= 960 && <button className='bg-red-600 text-gray-50 text-3xl w-32 h-14 rounded font-semibold' onClick={e => {handleDelete(e.target.parentNode.id)}}>Delete</button>}
                    <div className="details hidden col-span-6">
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Title: ${book.title}` }</p>
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Author: ${book.author}` }</p>
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Pages: ${book.pages}` }</p>
                        <p className="col-span-4 text-2xl sm:text-4xl font-medium px-1.5 m-2 sm:m-3">{ `Status: ${book.status}` }</p>
                    </div>
                </div>
            ))}
        </div>
     );
}
 
export default BookList;
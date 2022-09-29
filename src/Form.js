import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ url, method }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState('Read');

    const [defaultTitle, setDefaultTitle] = useState('');
    const [defaultAuthor, setDefaultAuthor] = useState('');
    const [defaultPages, setDefaultPages] = useState('');
    const [defaultStatus, setDefaultStatus] = useState('');

    const [isPending, setIsPending] = useState(false);
    // to check whether user is editing a book or adding a book
    const [isEditing, setIsEditing] = useState(false);

    if (method === 'PATCH') {
        fetch(url)
            .then(res => {
                if (!res) {
                    throw Error("Couldn't fetch the data");
                }
                return res.json();
            })
            .then(data => {
                setDefaultTitle(data.title);
                setDefaultAuthor(data.author);
                setDefaultPages(data.pages);
                setDefaultStatus(data.status);
                setIsEditing(true);
            })
            .catch(err => {
                console.log(err.message);
            })
    }

    const handleSubmit = () => {
        const book = { title, author, pages, status };

        if (title === '' ) {
            book.title = defaultTitle;
        }
        if (author === '') {
            book.author = defaultAuthor;
        }
        if (pages === '') {
            book.pages = defaultPages;
        }
        if (status === '') {
            book.status = defaultStatus;
        }

        setIsPending(true);

        fetch(url, {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            // console.log('added');
            setIsPending(false);
        })
    }

    const handleClear = () => {
        document.querySelector('form').reset();

    }

    return ( 
        <div className="sidebar h-screen absolute w-screen top-0 bg-gray-200 lg:static lg:flex lg:flex-col lg:h-full">
            <Link to="/">
                <button className="lg:hidden">
                    <img src={require("./images/window-close.png")} alt="close" className="w-11 sm: w-14 absolute top-6 left-6 z-20" />
                </button>
            </Link>
            {isEditing && <div className="flex justify-between">
                <Link to="/">
                    <p className="text-right text-2xl lg:text-xl my-3 mr-4 lg:m-3 hover:text-pink-600 transition ease-out duration-300">Cancel</p>
                </Link>
                <p className="text-right text-2xl lg:text-xl my-3 mr-4 lg:m-3 hover:text-pink-600 transition ease-out duration-300" onClick={handleClear}>
                Clear Form</p>
            </div>}
                {!isEditing && <p className="text-right text-2xl lg:text-xl my-3 mr-4 lg:m-3 hover:text-pink-600 transition ease-out duration-300" onClick={handleClear}>
                Clear Form</p>}
            <form className="sidebar p-5 sm: p-8 lg:py-0 z-10 h-screen lg:h-full w-screen lg:w-full lg:static top-0 flex flex-col justify-center" onSubmit={e => {
                e.preventDefault();
                handleSubmit();
                }}>
                <label htmlFor="title" className="formLabel">Title: </label>
                <input type="text" className="formInput" placeholder={defaultTitle} required onChange={e => setTitle(e.target.value)} id="title"/>
                <label htmlFor="author" className="formLabel">Author: </label>
                <input type="text" className="formInput" placeholder={defaultAuthor} required onChange={e => setAuthor(e.target.value)} id="author" />
                <label htmlFor="pages" className="formLabel">Pages: </label>
                <input type="text" className="formInput" placeholder={defaultPages} required onChange={e => setPages(e.target.value)} id="pages" />
                <label htmlFor="status" className="formLabel">Read? </label>
                <select name="status" className="formInput" placeholder={defaultStatus} required onChange={e =>  setStatus(e.target.value)} id="status">
                    <option value="Read">I have read this book</option>
                    <option value="Unread">I have not read this book</option>
                </select>
                { !isPending && <button type="submit" className="p-2 bg-blue-600 hover:bg-blue-500 text-gray-100 rounded-sm sm:text-2xl mt-6 w-7/12 self-center transition ease-linear duration-300">Submit</button>}
                { isPending && <button disabled>Processing</button>}
            </form>
        </div>
    );
}
 
export default Form;
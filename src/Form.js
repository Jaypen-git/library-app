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

    return ( 
    <div className="sidebar lg:bg-gray-200 lg:flex lg:flex-col lg:h-full">
        <Link to="/">
            <button className="lg:hidden">
                <img src={require("./images/window-close.png")} alt="close" className="w-11 sm: w-14 absolute top-4 right-4 z-20" />
            </button>
            <p className="text-right text-2xl m-3">&larr; Go Back</p>
        </Link>
        <form className="sidebar p-5 sm: p-8 lg:py-0 z-10 h-screen lg:h-full w-screen lg:w-full absolute lg:static top-0 flex flex-col justify-center" onSubmit={e => {
            e.preventDefault();
            handleSubmit();
            }}>
            <label htmlFor="title" className="block mb-2 sm:mb-4 text-xl sm:text-3xl lg:text-2xl">Title: </label>
            <input type="text" className="block mb-2 p-1 sm:p-2 rounded-sm sm:text-2xl lg:text-xl" defaultValue={defaultTitle} required onChange={e => setTitle(e.target.value)} id="title"/>
            <label htmlFor="author" className="block mb-2 sm:mb-4 text-xl sm:text-3xl lg:text-2xl">Author: </label>
            <input type="text" className="block mb-2 p-1 sm:p-2 rounded-sm sm:text-2xl lg:text-xl" defaultValue={defaultAuthor} required onChange={e => setAuthor(e.target.value)} id="author" />
            <label htmlFor="pages" className="block mb-2 sm:mb-4 text-xl sm:text-3xl lg:text-2xl">Pages: </label>
            <input type="text" className="block mb-2 p-1 sm:p-2 rounded-sm sm:text-2xl lg:text-xl" defaultValue={defaultPages} required onChange={e => setPages(e.target.value)} id="pages" />
            <label htmlFor="status" className="block mb-2 sm:mb-4 text-xl sm:text-3xl lg:text-2xl">Read? </label>
            <select name="status" className="block mb-2 p-1 sm:p-2 rounded-sm sm:text-2xl lg:text-xl" defaultValue={defaultStatus} required onChange={e =>  setStatus(e.target.value)} id="status">
                <option value="Read">I have read this book</option>
                <option value="Unread">I have not read this book</option>
            </select>
            { !isPending && <button type="submit" className="p-2 bg-blue-600 text-gray-100 rounded-sm sm:text-2xl mt-6 w-7/12 self-center">Submit</button>}
            { isPending && <button disabled>Processing</button>}
        </form>
    </div>
    );
}
 
export default Form;
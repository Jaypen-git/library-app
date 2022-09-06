import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({ url, method }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState('Read');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = () => {
        const book = { title, author, pages, status };

        setIsPending(true);

        fetch(url, {
            method: method,
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            console.log('added');
            setIsPending(false);
        })
    }

    return ( 
    <div>
        <Link to="/">
            <button>
                <img src={require("./images/window-close.png")} alt="close" className="w-11 absolute top-4 right-4 z-20" />
            </button>
        </Link>
        <form className={"bookForm bg-gray-200 p-5 z-10 h-screen w-screen absolute top-0 flex flex-col justify-center"} onSubmit={e => {
            e.preventDefault();
            handleSubmit();
            }}>
            <label htmlFor="title" className="block mb-2 text-xl">Title: </label>
            <input type="text" className="block mb-2 p-1 rounded-sm" required value={title} onChange={e => setTitle(e.target.value)} id="title"/>
            <label htmlFor="author" className="block mb-2 text-xl">Author: </label>
            <input type="text" className="block mb-2 p-1 rounded-sm" required value={author} onChange={e => setAuthor(e.target.value)} id="author" />
            <label htmlFor="pages" className="block mb-2 text-xl">Pages: </label>
            <input type="text" className="block mb-2 p-1 rounded-sm" required value={pages} onChange={e => setPages(e.target.value)} id="pages" />
            <label htmlFor="status" className="block mb-2 text-xl">Read? </label>
            <select name="status" className="block mb-2 p-1 rounded-sm" required value={status} onChange={e =>  setStatus(e.target.value)} id="status">
                <option value="Read">I have read this book</option>
                <option value="Unread">I have not read this book</option>
            </select>
            { !isPending && <button type="submit" className="p-2 bg-blue-600 text-gray-100 rounded-sm mt-6 w-7/12 self-center">Submit</button>}
            { isPending && <button disabled>Processing</button>}
        </form>
    </div>
    );
}
 
export default Form;
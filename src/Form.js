import { useState } from "react";

const Form = () => {
    const [visible, setVisible] = useState(false);
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState('Read');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = e => {
        const book = { title, author, pages, status };

        setIsPending(true);

        fetch('http://localhost:8000/library', {
            method: 'POST',
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(book)
        }).then(() => {
            console.log('added');
            setIsPending(false);
        })
    }

    const handleClick = () => {
        if (visible === true) {
            setVisible(false);
        } else {
            setVisible(true);
        }
    }

    return ( 
    <div>
        <img src={ visible ? require("./images/window-close.png") : require("./images/menu.png")} alt="close" className="w-9 absolute top-3 right-3 z-20" onClick={handleClick}/>
        <form className={visible ? "bookForm bg-gray-200 p-5 z-10 h-screen w-screen absolute top-0 flex flex-col justify-center" : "hidden"} onSubmit={handleSubmit}>
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
            { !isPending && <button type="submit" className="p-2 bg-gray-700 text-gray-100 rounded-sm mt-6 w-7/12 self-center">Add Book</button>}
            { isPending && <button disabled>Adding Book</button>}
        </form>
    </div>
    );
}
 
export default Form;
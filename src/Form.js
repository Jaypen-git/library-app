import { useState } from "react";

const Form = () => {
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

    return ( 
        <form className="bookForm bg-gray-200" onSubmit={handleSubmit}>
            <label htmlFor="title" className="block">Title: </label>
            <input type="text" className="block" required value={title} onChange={e => setTitle(e.target.value)} id="title"/>
            <label htmlFor="author" className="block">Author: </label>
            <input type="text" className="block" required value={author} onChange={e => setAuthor(e.target.value)} id="author" />
            <label htmlFor="pages" className="block">Pages: </label>
            <input type="text" className="block" required value={pages} onChange={e => setPages(e.target.value)} id="pages" />
            <label htmlFor="status">I have </label>
            <select name="status" className="block" required value={status} onChange={e =>  setStatus(e.target.value)} id="status">
                <option value="Read">read this book</option>
                <option value="Unread">not read this book</option>
            </select>
            { !isPending && <button type="submit">Add Book</button>}
            { isPending && <button disabled>Adding Book</button>}
        </form>
    );
}
 
export default Form;
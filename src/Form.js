import { useState } from "react";

const Form = () => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [pages, setPages] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        const book = { title, author, pages, status };
        console.log(book);
    }

    return ( 
        <form className="bookForm" onSubmit={handleSubmit}>
            <label htmlFor="title">Title: </label>
            <input type="text" required value={title} onChange={e => setTitle(e.target.value)} id="title"/>
            <label htmlFor="author">Author: </label>
            <input type="text" required value={author} onChange={e => setAuthor(e.target.value)} id="author" />
            <label htmlFor="pages">Pages: </label>
            <input type="text" required value={pages} onChange={e => setPages(e.target.value)} id="pages" />
            <label htmlFor="status">I have </label>
            <select name="status" required value={status} onChange={e =>  setStatus(e.target.value)} id="status">
                <option value="Read">read this book</option>
                <option value="Unread">not read this book</option>
            </select>
            <button type="submit">Add Book</button>
        </form>
    );
}
 
export default Form;
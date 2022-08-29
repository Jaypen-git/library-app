const Form = () => {
    return ( 
        <div className="bookForm">
            <label htmlFor="title">Title: </label>
            <input type="text" name="title" id="title" />
            <label htmlFor="author">Author: </label>
            <input type="text" name="author" id="author" />
            <label htmlFor="pages">Pages: </label>
            <input type="text" name="pages" id="pages" />
            <div className="stat-container">
                <label htmlFor="status">I have read this book</label>
                <input type="checkbox" name="status" id="status" />
            </div>
            <input type="submit" value="Submit" id="submit" />
        </div>
    );
}
 
export default Form;
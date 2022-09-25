import { useState, useEffect } from 'react';
import MobileInfo from './MobileInfo';
import InfoCard from './InfoCard';

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
                // Don't need to loop through the whole array, just grab the last 3 items
                titleChars[titleChars.length - 1] = '.';
                titleChars[titleChars.length - 2] = '.';
                titleChars[titleChars.length - 3] = '.';
            }
        } else if (WindowSize >= 640 && WindowSize < 768) {
            while (titleChars.length > 16) {
                titleChars.pop();
                titleChars[titleChars.length - 1] = '.';
                titleChars[titleChars.length - 2] = '.';
                titleChars[titleChars.length - 3] = '.';
            }
        } else if (WindowSize >= 768 && WindowSize < 1000) {
            while (titleChars.length > 18) {
                titleChars.pop();
                titleChars[titleChars.length - 1] = '.';
                titleChars[titleChars.length - 2] = '.';
                titleChars[titleChars.length - 3] = '.';
            }
        } else {
            while (titleChars.length > 21) {
                titleChars.pop();
                titleChars[titleChars.length - 1] = '.';
                titleChars[titleChars.length - 2] = '.';
                titleChars[titleChars.length - 3] = '.';
            }
        }
        newString = titleChars.join('');
        // console.log(newString);
        return newString;
    }

    return ( 
        <div className='lg:grid lg:grid-cols-3 xl:grid-cols-4 lg:gap-4 xl:gap-6 lg:m-4 xl:m-6'>
            {WindowSize < 1024 && books.map((book, index) => (
                <MobileInfo key={book.id} book={book} handleDelete={handleDelete} FormatTitle={FormatTitle} index={index} />
            ))}
            {WindowSize >= 1024 && books.map(book => (
                <InfoCard key={book.id} book={book} handleDelete={handleDelete} FormatTitle={FormatTitle} />
            ))}
        </div>
     );
}
 
export default BookList;
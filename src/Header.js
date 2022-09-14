import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    const [WindowSize, setWindowSize] = useState(window.innerWidth);

    useEffect(() => {
      window.addEventListener('resize', () => {
        setWindowSize(window.innerWidth);
      });
    }, [WindowSize]);
    return ( 
        <header className="bg-red-400 p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center">
                <img src={require("./images/library-shelves.png")} alt="library-icon" className="w-12 sm:w-16 pr-2 inline"/>
                <h1 className="text-gray-100 text-3xl sm:text-5xl font-bold sm:font-semibold inline">Library App</h1>
            </div>
            {WindowSize < 960 && <Link to="form">
                <button className="bg-black bg-opacity-40 rounded sm:w-15 sm:h-15 self-center">
                    <img src={require("./images/plus.png")} alt="Add Book" className="w-12 sm:w-16" />
                </button>
            </Link>}
            {WindowSize >= 960 && <div className='text-gray-100 text-3xl'>
                <Link to="/"><p className='inline mx-8'>Home</p></Link>
                <Link to="form"><p className='inline mx-8'>Add Book</p></Link>
            </div>}
        </header>
     );
}
 
export default Header;
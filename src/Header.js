import { Link } from 'react-router-dom';

const Header = () => {
    return ( 
        <header className="bg-red-400 p-4 sm:p-6 flex items-center justify-between">
            <div className="flex items-center">
                <img src={require("./images/library-shelves.png")} alt="library-icon" className="w-12 sm:w-16 pr-2 inline"/>
                <h1 className="text-gray-100 text-3xl sm:text-5xl font-bold sm:font-semibold inline">Library App</h1>
            </div>
            <Link to="form">
                <button className="bg-black bg-opacity-40 rounded sm:w-15 sm:h-15 self-center lg:hidden">
                    <img src={require("./images/plus.png")} alt="Add Book" className="w-12 sm:w-16" />
                </button>
            </Link>
        </header>
     );
}
 
export default Header;
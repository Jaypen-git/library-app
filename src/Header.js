import { Link } from 'react-router-dom';

const Header = ({link1}) => {
    return ( 
        <header className="bg-red-400 p-4 flex items-center justify-between">
            <div className="flex items-center">
                <img src={require("./images/library-shelves.png")} alt="library-icon" className="w-12 pr-2 inline"/>
                <h1 className="text-gray-100 text-3xl font-bold inline">Library App</h1>
            </div>
            <Link to="form">
                <button className="bg-black bg-opacity-40 rounded">
                    <img src={require("./images/plus.png")} alt="Add Book" className="w-13" />
                </button>
            </Link>
        </header>
     );
}
 
export default Header;
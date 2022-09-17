import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="hidden lg:flex flex-col sidebar bg-gray-200 text-3xl font-semibold pt-4">
            <Link to="/">
                <p className="ml-12 my-5 hover:text-pink-600 transition ease-out duration-300">Home</p>
            </Link>
            <Link to="/form">
                <p className="ml-12 my-5 hover:text-pink-600 transition ease-out duration-300">Add Book</p>
            </Link>
        </div>
     );
}
 
export default Nav;
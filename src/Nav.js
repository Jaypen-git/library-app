import { Link } from "react-router-dom";

const Nav = () => {
    return ( 
        <div className="hidden lg:block sidebar bg-gray-200 text-3xl font-semibold">
            <div className="p-4">
                <Link to="/">
                    <p className="ml-12 my-5">Home</p>
                </Link>
                <Link to="/form">
                    <p className="ml-12 my-5">Add Book</p>
                </Link>
            </div>
        </div>
     );
}
 
export default Nav;
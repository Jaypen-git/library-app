const Header = () => {
    return ( 
        <header className="bg-red-400 p-4 flex items-center justify-center">
            <img src={require("./images/library-shelves.png")} alt="library-icon" className="w-12 pr-2"/>
            <h1 className="text-gray-100 text-3xl font-bold">Library App</h1>
        </header>
     );
}
 
export default Header;
const Header = () => {
    return ( 
        <header className="bg-red-400 p-4 flex items-center justify-center">
            <img src={require("./images/library-shelves.png")} alt="library-icon" className="pr-3"/>
            <h1 className="text-gray-100 text-4xl font-bold">Library Application</h1>
        </header>
     );
}
 
export default Header;
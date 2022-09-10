import { useEffect, useState } from "react";

const MainTitle = ({title}) => {
    // create a state for the main title
    const [mainTitle, setMainTitle] = useState(title);
    // write a function to format main title as needed
    const formatTitle = (title) => {
        // check if the screen is smaller than 1024 px to format the title
        if (window.innerWidth < 1024) {
            let newString = '';
            let titleChars = Array.from(title);
    
            if (window.innerWidth >= 640 && window.innerWidth < 768) {
                while (titleChars.length > 18) {
                    titleChars.pop();
                }
            } else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
                while (titleChars.length > 24) {
                    titleChars.pop();
                }
            } else {
                while (titleChars.length > 14) {
                    titleChars.pop();
                }
            }
            // Don't need to loop through the whole array, just grab the last 3 items
            titleChars[titleChars.length - 1] = '.';
            titleChars[titleChars.length - 2] = '.';
            titleChars[titleChars.length - 3] = '.';
            newString = titleChars.join('');
            console.log(newString);
            setMainTitle(newString);
        } else {
            setMainTitle(title);
        }
    }
    useEffect(formatTitle, []);
    window.addEventListener('resize', formatTitle);
    return ( 
        // format the main title then show it on the DOM
        <p className="col-span-4 text-3xl sm:text-4xl font-medium px-1.5 ml-2 main-title">{formatTitle(mainTitle)}</p>
     );
}
 
export default MainTitle;
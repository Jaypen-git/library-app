import { useState } from "react";

const Home = () => {
    const [status, setStatus] = useState('Read');

    const handleStatus = () => {
        if (status === 'Read') {
            setStatus('Unread');
        } else {
            setStatus('Read');
        }
    }
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Title</th>
                    <th>Author</th>
                    <th>Pages</th>
                    <th>Read?</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>Test</td>
                    <td>Test</td>
                    <td>300</td>
                    <td><button onClick={handleStatus}>{ status }</button></td>
                    <td><button>Delete</button></td>
                </tr>
            </tbody>
        </table>
     );
}
 
export default Home;
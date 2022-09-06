import { useParams } from 'react-router-dom';
import Form from './Form';

const EditBook = () => {
    const { id }= useParams();
    return ( 
        <Form url={'http://localhost:8000/library/' + id} method={'PATCH'}/>
     );
}
 
export default EditBook;
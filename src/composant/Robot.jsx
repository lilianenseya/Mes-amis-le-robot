import{useState, useEffect} from 'react';
import Card from './Card';

function Robots(){
    const [data, setDate]= useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then((data) => setDate(data))
            .catch(error => console.log(error));
    }, [data]);
    return(
        <div>
            <div className='input'> <input className='Input' placeholder='recherche par le nom' type="text" /></div>
            <div className='classement'>
                {
                   data && data.map((user, id)=>{
                    return user ? (
                        < Card robo={user} index={id}/>
                    ) : ( <p>En cour de rechargement ....</p>)
                })  
                }
            </div>
        </div>
    )
} 
export default Robots
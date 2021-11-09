import React, {useContext} from 'react'
import homeContext from '../../context/currentUser/homeContex/home.Context';

const Home = () => {
    const data = useContext(homeContext);
    console.log(data)
    return(
        <div>
                <h1>{data.test}</h1>
                <button onClick={(e) => {e.preventDefault(); data.setTest(p => p+" _")}}>Cambiar Text</button>
        </div>
    );
}

export default Home;
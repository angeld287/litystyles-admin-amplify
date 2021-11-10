import React, {useContext} from 'react'
import communContext from '../../context/communContex/commun.Context';

const Home = () => {
    const commun = useContext(communContext);
    console.log(commun)
    return(
        <div>
                <h1>TEST</h1>
        </div>
    );
}

export default Home;
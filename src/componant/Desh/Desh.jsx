import { useState } from 'react';
import'./desh.css'
const Desh = ({desh, handleVisitedCountry}) => {
   const {name, flags, population, area, cca3} = desh;

    const [visited, setVisited] = useState(false);

    const handleVisited = () =>{
        setVisited(!visited)
    }

    const passWithParam = () =>{
        handleVisitedCountry(desh)
    }

    console.log(handleVisitedCountry)

    return (
        <div className={`box ${visited && 'visited'}`}>
            <h3 style={{color: visited? 'purple' : 'white'}}>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p><small>Code: {cca3}</small></p>
            <button onClick={passWithParam}>Mark Visited</button> <br/><br/>
            <button onClick={handleVisited}>{visited? 'Visited' : 'Going'}</button>
            {visited? 'I have visited this country' : 'I want to visit'}
        </div>
    );
};

export default Desh;
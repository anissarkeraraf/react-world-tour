import { useEffect } from "react";
import { useState } from "react";
import Desh from "../Desh/Desh";
import './Country.css'

const Country = () => {
    const [countries, setCountries] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    return (
        <div>
            <h3>Countries: {countries.length}</h3>
            <div className="country-container">
                {
                    countries.map(anis => <Desh key={anis.cca3} desh={anis}></Desh>)
                }
            </div>
        </div>
    );
};

export default Country;
import { useEffect } from "react";
import { useState } from "react";
import Desh from "../Desh/Desh";
import './Country.css'
import { Linter } from "eslint";

const Country = () => {
    const [countries, setCountries] = useState([]);

    const [visitedCountry, setVisitedCountry] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v3.1/all')
            .then(res => res.json())
            .then(data => setCountries(data))
    }, [])

    const handleVisitedCountry = country => {
        console.log('add this to your visited country');
        // console.log(country);
        // const newVisitedCountry = [...visitedCountry, country]
        // setVisitedCountry(newVisitedCountry)
    }



    return (
        <div>

            <h3>Countries: {countries.length}</h3>

            <div>
                <h4>Visited Country: {visitedCountry.length}</h4>
                <ul>
                    {
                        visitedCountry.map(country => <li>{country.name.common}</li>)
                    }
                </ul>
            </div>

            <div className="country-container">
                {
                    countries.map(anis => <Desh
                        key={anis.cca3}
                        handleVisitedCountry={handleVisitedCountry}
                        desh={anis}></Desh>)
                }
            </div>
        </div>
    );
};

export default Country;
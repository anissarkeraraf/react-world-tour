import'./desh.css'
const Desh = ({desh}) => {
   const {name, flags, population, area, cca3} = desh;
    return (
        <div className='box'>
            <h3>Name: {name.common}</h3>
            <img src={flags.png} alt="" />
            <p>Population: {population}</p>
            <p>Area: {area}</p>
            <p>Code: {cca3}</p>
        </div>
    );
};

export default Desh;
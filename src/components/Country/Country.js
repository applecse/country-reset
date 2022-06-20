import React from 'react';
const Country = (props) => {
        const {name, population, region,flags} = props.country;
        const flagStyle = {height: '100px'}
        const countryStyle={border: '1px solid red', margin:'10px', padding: '10px'}
        const handleAddCountry = props.handleAddCountry;
    return (
    <div style={countryStyle}>
        <h1>this is a {name.common}</h1>
        <img style={{width:"100px", height:"100px"}} src={flags.png} alt="" />
        <p>population:{population}</p>
        <p><small>Region:{region}</small></p>
        <button onClick={()=> handleAddCountry(props.country)}>add country</button> 
    </div>
    );
};
export default Country;


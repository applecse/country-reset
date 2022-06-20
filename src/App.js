import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import Country from './components/Country/Country';
import Cart from './components/Cart/Cart';

function App() {
      const [countries, setCountries] = useState([]);
      const [cart, setcart] = useState([]);
  

  useEffect(() => {
       fetch('https://restcountries.com/v3.1/all')
      .then(res => res.json())
      .then(data =>setCountries(data))
      .catch(error => console.log(error))
 }, [])
    
        const handleAddCountry  = (country) => {
         const newCart = [...cart, country]
         setcart(newCart)
        }


  return (
        <div className="App">
        <h1>country loaded:{countries.length}</h1>
        <h4>Country added:{cart.length}</h4>
        <Cart cart={cart}></Cart>
     


      <ul>
        {
          countries.map(country => <Country country={country} handleAddCountry={handleAddCountry} key={country.alpha3Code} ></Country>)
        }
      </ul>


  <header className="App-header">
            </header>
          </div>
  );
}

export default App;

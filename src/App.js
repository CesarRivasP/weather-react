import React, { useState } from 'react';
import Header from './components/header';
import Form from './components/form';


function App() {

  // state principal
  const [city, setCity] = useState('');

  const [country, setCountry] = useState('')

  const consultData = (data) => {
    console.log(data);

    if(data.city === '' || data.country === ''){
      return;
    }

    // si existen ambos, agregarlos al state
    setCity(city: data.city);
    setCountry(country: data.country);
  }

  return (
    <div className="App">
      <Header title="Aplicación del Clima" />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form consultData={consultData} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Form from './components/form';
import Weather from './components/weather';
import Error from './components/error';


function App() {

  // state principal
  const [city, setCity] = useState('');

  const [country, setCountry] = useState('');

  const [result, setResult] = useState({});

  const [error, setError] = useState(false);

  useEffect(() => {
    // para preevenir la ejecucion al montar el componente
    if(city === '') return;

    const consultAPI = async() => {
      const apiKey = 'cc3b3f53d07cebe47bac53837b1f94bc';
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${apiKey}`;

      const response = await fetch(url);
      const result = await response.json();

      setResult(result);
    }

    consultAPI();
  }, [city, country]) // -> arreglo de dependencias. Que partes del state este metodo debe estar escuchando para ejecutarse
  // normalmente se deja vacio


  const consultData = (data) => {
    console.log(data);

    if(data.city === '' || data.country === ''){
      setError(true);
      return;
    }

    // si existen ambos, agregarlos al state
    setCity(data.city);
    setCountry(data.country);
    setError(false);
  }

  // cargar un componente condicionalmente
  let component;

  if(error){
    // hay un error, mosotrar componente
    component = <Error message="Ambos campos son obligatorios" />;
  }
  else if(result.cod === '404'){
    component = <Error message="La ciudad no existe en nuestro registro" />;
  }
  else{
    // mostrar el clima
    component = <Weather result={result} />;
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
            <div className="col s12 m6">
              {component}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

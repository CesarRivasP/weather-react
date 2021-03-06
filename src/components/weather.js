import React from 'react';

function Weather({result}){
  // extraer los valores
  const { name, main } = result;

  if(!name) return null;

  // para convertir de kelvin a centigrados
  const kelvin = 273.15;

  return (
    <div className="card-panel white col s12">
      <div>
        <h2 className="temperature-info">El clima de {name} es:</h2>
        <p className="temperature">
          {parseInt(main.temp - kelvin, 10)} &#x2103;
        </p>
        <p className="temperature-info">Temperatura maxima: {parseInt(main.temp_max - kelvin, 10)} &#x2103;</p>
        <p className="temperature-info">Temperatura minima: {parseInt(main.temp_min - kelvin, 10)} &#x2103;</p>
      </div>
    </div>
  )
}

export default Weather;

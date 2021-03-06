import React, { useState } from 'react';

function Form({ consultData }){

  // state del componente        como va a inicial el state
  // search = state, setSearch = this.setState({})
  const [ search , setSearch ] = useState({
    city: '',
    country: ''
  })

  const handleChange = (e) => {
    // setState
    setSearch({
      ...search,  // copia del state actual, asi no se pierde la referencia del otro campo
      [e.target.name]: e.target.value
    })
  }

  const consultWeather = (e) => {
    e.preventDefault();

    // pasar hacia el componente principal la busqueda del usuario
    consultData(search);
  }

  return (
    <form onSubmit={consultWeather}>
      <div className="input-field col s12">
        <label htmlFor="city">Ciudad: </label>
        <input type="text" name="city" id="city" onChange={handleChange} />
      </div>

      <div className="input-field col s12">
        <select onChange={handleChange} name="country" id="country">
          <option value="">Selecciona un país</option>
          <option value="AR">Argentina</option>
          <option value="CO">Colombia</option>
          <option value="CR">Costa Rica</option>
          <option value="ES">España</option>
          <option value="MX">Mexico</option>
          <option value="PE">Perú</option>
          <option value="US">Estados Unidos</option>
          <option value="VE">Venezuela</option>
        </select>
      </div>

      <div className="input-field col s12">
        <input
          type="submit"
          className="waves-effect waves-light btn-large btn-block accent-4 submit-form-button"
          value="Buscar Clima"
        />
      </div>
    </form>
  )
}

export default Form;

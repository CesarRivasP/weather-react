import React from 'react';
import Header from './components/header';
import Form from './components/form';


function App() {
  return (
    <div className="App">
      <Header title="Aplicación del Clima" />

      <div className="container-form">
        <div className="container">
          <div className="row">
            <div className="col s12 m6">
              <Form />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

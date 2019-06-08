import React from 'react';

function Error({message}){
  return (
    <div className="card-panel darken-4 error-message">
      {message}
    </div>
  )
}

export default Error;

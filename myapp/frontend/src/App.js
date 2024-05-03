import React from 'react';

const App = () => {
  const apiBasePath = window.REACT_APP_SETTINGS.API_BASE_PATH;

  return <h1>API Base Path is: {apiBasePath}</h1>;
};

export default App;

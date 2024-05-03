import React from 'react';

const App = () => {
  const apiBasePath = window.AppSettings.API_BASE_PATH || '/fallback';

  return <h1>API Base Path is: {apiBasePath}</h1>;
};

export default App;

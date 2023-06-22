import React from 'react';
import GlobalStyle from './components/styled/Global';
import Cinema from './components/Cinema/Cinema';

const App = () => {
  return (
    <div>
      <GlobalStyle/>
      <Cinema/>
    </div>
  );
};

export default App;
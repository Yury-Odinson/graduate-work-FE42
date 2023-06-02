import React from 'react';
import { SignInWrapper } from './components/SignInWrapper';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper } from './components/Wrapper';

function App() {
  return (
    <>
      <BrowserRouter>
        <Wrapper />
      </BrowserRouter>
    </>
  );
}

export default App;

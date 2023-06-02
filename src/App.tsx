import React from 'react';
import { SignInWrapper } from './components/SignInWrapper';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return (
    <>
      <BrowserRouter>
        <SignInWrapper />
      </BrowserRouter>
    </>
  );
}

export default App;

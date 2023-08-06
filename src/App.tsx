import { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper } from './components/Wrapper';
import { ChangeTheme, ThemeContext } from './tools/store';
import { ThemeType } from './tools/types';

function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");

  return (
    <ThemeContext.Provider value={theme}>
      <ChangeTheme.Provider value={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
        <BrowserRouter>
          <Wrapper />
        </BrowserRouter>
      </ChangeTheme.Provider>
    </ThemeContext.Provider >
  );
}

export default App;

import { useEffect, useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Wrapper } from './components/Wrapper';
import { ChangeTheme, FilterContext, ThemeContext, defaultFilterValue } from './tools/store';
import { FilterValuesToSearch, ThemeType } from './tools/types';
import { updateToken } from './tools/users';

function App() {
  const [theme, setTheme] = useState<ThemeType>("dark");
  const [filter, setFilter] = useState<FilterValuesToSearch>(defaultFilterValue)
  const [user, setUser] = useState("")

  useEffect(() => {
    if (getToken !== "" || undefined) {
      setUser("Yury")
    }
  }, [user])

  const getToken = localStorage.getItem("refresh") || ""

  if (getToken !== "") {
    updateToken(getToken);
  }

  console.log(user)

  return (
    <ThemeContext.Provider value={theme}>
      <ChangeTheme.Provider value={() => theme === "light" ? setTheme("dark") : setTheme("light")}>
        <FilterContext.Provider value={{ filter, setFilter }}>
          <BrowserRouter>
            <Wrapper />
          </BrowserRouter>
        </FilterContext.Provider>
      </ChangeTheme.Provider>
    </ThemeContext.Provider >
  );
}

export default App;

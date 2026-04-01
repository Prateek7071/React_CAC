import { useState } from "react";
import { ThemeProvider } from "./contexts/theme";
import { useEffect } from "react";
import ThemeBtn from "./components/ThemeBtn";
import Card from "./components/Card";

function App() {
  const [themeMode, setThemeMode] = useState("light")
  
  const lightTheme = () => {
    setThemeMode("light")
  }
  
  const darkTheme = () => {
    setThemeMode("dark")
  }
  
  //actually how the theme is changed
  
  useEffect(() => {
    const Html = document.querySelector('html')
    Html.classList.remove("light", "dark")
    Html.classList.add(themeMode)
  }, [themeMode])
  
  return (
    <ThemeProvider value={{themeMode, lightTheme, darkTheme}}>
      <div className="flex flex-wrap min-h-screen items-center bg-white dark:bg-gray-900">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
          <ThemeBtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
          <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;

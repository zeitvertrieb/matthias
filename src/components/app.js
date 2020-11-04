import React from 'react'
import { ThemeProvider } from './themeContext'

function App({ children }) {
  return (
    <ThemeProvider>
      {children}
    </ThemeProvider>
  );
}

export default App;

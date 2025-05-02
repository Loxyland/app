import React from 'react';
import Navbar from './Component/Navbar';
import { ThemeProvider } from './Component/ThemeContext';
import Kalkulator from './Component/Kalkulator';



function App() {
  return (
    <ThemeProvider>
      <Navbar  />
      <Kalkulator />
    </ThemeProvider>
  );
}

export default App;

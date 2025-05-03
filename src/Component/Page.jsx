import React from 'react';
import Navbar from './Navbar';
import { ThemeProvider } from './ThemeContext';
import Kalkulator from './Kalkulator';



function Page() {
  return (
    <ThemeProvider>
      <Navbar  />
      <Kalkulator />
    </ThemeProvider>
  );
}

export default Page;

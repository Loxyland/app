import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

const themes = {
    default: {
        bg: 'bg-[#1E1E1E]', // lebih gelap
        display: 'bg-[#FFFFFF] text-[#1E1E1E]', // kontras tinggi
        buttonNum: 'bg-[#FFD700] hover:bg-[#FFC300] text-[#1E1E1E]',
        buttonOp: 'bg-[#FF5733] hover:bg-[#E04E2F] text-white',
        buttonFn: 'bg-[#4ECDC4] hover:bg-[#3DBEB6] text-white',
        border: 'border-[#888]',
        text : 'text-[#FFFFFF]'
    },
    neon: {
        bg: 'bg-[#0F0F1B]',
        display: 'bg-[#1F1F3A] text-[#00FFFF] ring-2 ring-[#00FFFF]',
        buttonNum: 'bg-[#8C52FF] hover:bg-[#7A40F4] text-[#F9D923]',
        buttonOp: 'bg-[#FF2E63] hover:bg-[#D91A50] text-white',
        buttonFn: 'bg-[#00B4D8] hover:bg-[#0096C7] text-white',
        border: 'border-[#2C2C54]',
        text : 'text-[#FFFFFF]'
    },
    cyber: {
        bg: 'bg-[#0D0D0D]',
        display: 'bg-[#1F1F1F] text-[#00FFD1] ring-2 ring-[#00FFD1]',
        buttonNum: 'bg-[#FF0075] hover:bg-[#E60068] text-[#00FFD1]',
        buttonOp: 'bg-[#00FFF5] hover:bg-[#00E0D0] text-[#0D0D0D]',
        buttonFn: 'bg-[#6A00F4] hover:bg-[#5D00D6] text-white',
        border: 'border-[#00FFF5]',
        text : 'text-[#FFFFFF]'
    },
    pastel: {
        bg: 'bg-[#FFE6E6]',
        display: 'bg-[#FFFFFF] text-[#6B4B8C]',
        buttonNum: 'bg-[#FFABE1] hover:bg-[#FF8DC7] text-[#6B4B8C]',
        buttonOp: 'bg-[#A685E2] hover:bg-[#9575D1] text-white',
        buttonFn: 'bg-[#61C0BF] hover:bg-[#4FB3B2] text-white',
        border: 'border-[#D9D7F1]',
        text : 'text-[#6B4B8C]'
    }
};

export const ThemeProvider = ({ children }) => {
    const [activeTheme, setActiveTheme] = useState('default');

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme, themes }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);

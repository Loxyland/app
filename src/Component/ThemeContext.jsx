import React, { createContext, useContext, useRef, useState } from 'react';
import '../Animation.css'; // Pastikan file ini ada untuk animasi ripple

const ThemeContext = createContext();


const themes = {
    default: {
        name: "Default Dark",
        bg: 'bg-[#1E1E1E]',
        display: 'bg-[#FFFFFF] text-[#1E1E1E]',
        buttonNum: 'bg-[#FFD700] hover:bg-[#FFC300] text-[#1E1E1E]',
        buttonOp: 'bg-[#FF5733] hover:bg-[#E04E2F] text-white',
        buttonFn: 'bg-[#4ECDC4] hover:bg-[#3DBEB6] text-white',
        border: 'border-[#888]',
        text: 'text-[#FFFFFF]',
        duration: 'duration-300'
    },
    neon: {
        name: "Neon Cyber",
        bg: 'bg-[#0F0F1B]',
        display: 'bg-[#1F1F3A] text-[#00FFFF] ring-2 ring-[#00FFFF]',
        buttonNum: 'bg-[#8C52FF] hover:bg-[#7A40F4] text-[#F9D923]',
        buttonOp: 'bg-[#FF2E63] hover:bg-[#D91A50] text-white',
        buttonFn: 'bg-[#00B4D8] hover:bg-[#0096C7] text-white',
        border: 'border-[#2C2C54]',
        text: 'text-[#FFFFFF]',
        duration: 'duration-300'
    },
    cyber: {
        name: "Cyberpunk",
        bg: 'bg-[#0D0D0D]',
        display: 'bg-[#1F1F1F] text-[#00FFD1] ring-2 ring-[#00FFD1]',
        buttonNum: 'bg-[#FF0075] hover:bg-[#E60068] text-[#00FFD1]',
        buttonOp: 'bg-[#00FFF5] hover:bg-[#00E0D0] text-[#0D0D0D]',
        buttonFn: 'bg-[#6A00F4] hover:bg-[#5D00D6] text-white',
        border: 'border-[#00FFF5]',
        text: 'text-[#FFFFFF]',
        duration: 'duration-300'
    },
    pastel: {
        name: "Sweet Pastel",
        bg: 'bg-[#FFE6E6]',
        display: 'bg-[#FFFFFF] text-[#6B4B8C]',
        buttonNum: 'bg-[#FFABE1] hover:bg-[#FF8DC7] text-[#6B4B8C]',
        buttonOp: 'bg-[#A685E2] hover:bg-[#9575D1] text-white',
        buttonFn: 'bg-[#61C0BF] hover:bg-[#4FB3B2] text-white',
        border: 'border-[#D9D7F1]',
        text: 'text-[#6B4B8C]',
        duration: 'duration-300'
    },
    dark: {
        name: "Material Dark",
        bg: 'bg-[#121212]',
        display: 'bg-[#1E1E1E] text-[#BB86FC]',
        buttonNum: 'bg-[#3700B3] hover:bg-[#30009C] text-white',
        buttonOp: 'bg-[#03DAC6] hover:bg-[#02C2B0] text-[#121212]',
        buttonFn: 'bg-[#CF6679] hover:bg-[#BA5C6D] text-white',
        border: 'border-[#BB86FC]',
        text: 'text-[#FFFFFF]',
        duration: 'duration-500'
    },
    ocean: {
        name: "Deep Ocean",
        bg: 'bg-[#0a192f]',
        display: 'bg-[#172a45] text-[#64ffda] ring-2 ring-[#64ffda]',
        buttonNum: 'bg-[#112240] hover:bg-[#0e1a32] text-[#ccd6f6]',
        buttonOp: 'bg-[#64ffda] hover:bg-[#52e3c2] text-[#0a192f]',
        buttonFn: 'bg-[#1e3a8a] hover:bg-[#1a3278] text-white',
        border: 'border-[#64ffda]',
        text: 'text-[#ccd6f6]',
        duration: 'duration-300'
    },
    sunset: {
        name: "Warm Sunset",
        bg: 'bg-gradient-to-br from-[#ff9a8b] to-[#ff6b6b]',
        display: 'bg-white/80 text-[#2f3542] backdrop-blur-sm',
        buttonNum: 'bg-[#ffb8b8] hover:bg-[#ffa5a5] text-[#2f3542]',
        buttonOp: 'bg-[#ff7b54] hover:bg-[#e66a45] text-white',
        buttonFn: 'bg-[#57606f] hover:bg-[#4a5362] text-white',
        border: 'border-[#ff6b6b]',
        text: 'text-[#2f3542]',
        duration: 'duration-500'
    },
    matrix: {
        name: "The Matrix",
        bg: 'bg-black',
        display: 'bg-black text-[#00ff41] ring-2 ring-[#00ff41] font-mono',
        buttonNum: 'bg-[#003b00] hover:bg-[#002800] text-[#00ff41] font-mono',
        buttonOp: 'bg-[#008f11] hover:bg-[#007a0e] text-black font-mono',
        buttonFn: 'bg-[#00ff41] hover:bg-[#00e03c] text-black font-mono',
        border: 'border-[#00ff41]',
        text: 'text-[#00ff41] font-mono',
        duration: 'duration-200'
    },
    candy: {
        name: "Cotton Candy",
        bg: 'bg-gradient-to-br from-[#ffcce6] to-[#ff99cc]',
        display: 'bg-white/90 text-[#cc0066]',
        buttonNum: 'bg-[#ff99cc] hover:bg-[#ff80bf] text-[#cc0066]',
        buttonOp: 'bg-[#ff66b3] hover:bg-[#ff4da6] text-white',
        buttonFn: 'bg-[#cc0066] hover:bg-[#b8005c] text-white',
        border: 'border-[#ff99cc]',
        text: 'text-[#cc0066]',
        duration: 'duration-300'
    },
    royal: {
        name: "Royal Blue",
        bg: 'bg-gradient-to-br from-[#142850] to-[#27496d]',
        display: 'bg-[#27496d] text-[#dae1e7] ring-2 ring-[#00909e]',
        buttonNum: 'bg-[#00909e] hover:bg-[#007f8c] text-white',
        buttonOp: 'bg-[#dae1e7] hover:bg-[#c8d0d8] text-[#142850]',
        buttonFn: 'bg-[#27496d] hover:bg-[#1e3b5a] text-white',
        border: 'border-[#00909e]',
        text: 'text-[#dae1e7]',
        duration: 'duration-400'
    },
    contrast: {
        name: "High Contrast",
        bg: 'bg-black',
        display: 'bg-black text-white border-4 border-white',
        buttonNum: 'bg-white hover:bg-gray-300 text-black',
        buttonOp: 'bg-yellow-400 hover:bg-yellow-500 text-black',
        buttonFn: 'bg-red-600 hover:bg-red-700 text-white',
        border: 'border-white',
        text: 'text-white',
        duration: 'duration-100'
    },
    retro: {
        name: "Retro Gaming",
        bg: 'bg-[#2d3047]',
        display: 'bg-[#1b998b] text-[#ff9b71] font-mono text-2xl',
        buttonNum: 'bg-[#ff9b71] hover:bg-[#ff8a5e] text-[#2d3047]',
        buttonOp: 'bg-[#1b998b] hover:bg-[#16887a] text-[#ff9b71]',
        buttonFn: 'bg-[#e84855] hover:bg-[#d43d4a] text-white',
        border: 'border-[#ff9b71]',
        text: 'text-[#ff9b71]',
        duration: 'duration-300'
    },
    midnight: {
        name: "Midnight Purple",
        bg: 'bg-gradient-to-br from-[#0f0524] to-[#2a0845]',
        display: 'bg-[#2a0845] text-[#a569bd] ring-2 ring-[#a569bd]',
        buttonNum: 'bg-[#4a235a] hover:bg-[#3d1c4a] text-[#d2b4de]',
        buttonOp: 'bg-[#a569bd] hover:bg-[#8e44ad] text-white',
        buttonFn: 'bg-[#7d3c98] hover:bg-[#6c3483] text-white',
        border: 'border-[#a569bd]',
        text: 'text-[#d2b4de]',
        duration: 'duration-400'
    }
};

export default themes;

export const ThemeProvider = ({ children }) => {
    const [activeTheme, setActiveTheme] = useState('default');
    const [isAnimating, setIsAnimating] = useState(false);
    const themeContainerRef = useRef(null);

    const changeTheme = (themeName) => {
        if (themeName !== activeTheme && !isAnimating) {
            setIsAnimating(true);
            setActiveTheme(themeName);

            setTimeout(() => {
                setIsAnimating(false);
            }, 1000);
        }
    };

    return (
        <ThemeContext.Provider value={{ activeTheme, setActiveTheme, themes, changeTheme }}>
            <div
                ref={themeContainerRef}
                className={`theme-container ${isAnimating ? 'ripple-animation' : ''}`}
                data-theme={activeTheme}
            >
                {children}
            </div>
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { activeTheme, setActiveTheme, themes } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const currentTheme = themes[activeTheme];

    return (
        <nav className={`relative p-4 ${currentTheme.bg} ${currentTheme.text} shadow-md`}>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className={`text-xl font-bold ${currentTheme.text}`}>My App</h1>

                {/* Desktop Theme Selector */}
                <div className="hidden md:flex items-center gap-4">
                    {Object.keys(themes).map((themeKey) => (
                        <div
                            key={themeKey}
                            onClick={() => setActiveTheme(themeKey)}
                            className={`cursor-pointer flex flex-col items-center transition transform hover:scale-105 ${themeKey === activeTheme ? 'ring-4 ring-yellow-400' : ''
                                }`}
                        >
                            <div className={`w-8 h-8 rounded ${themes[themeKey].buttonNum}`} />
                            <span className="text-xs mt-1 capitalize text-white">{themeKey}</span>
                        </div>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button onClick={() => setMenuOpen(!menuOpen)} className="md:hidden">
                    {menuOpen ? <X className="text-white" /> : <Menu className="text-white" />}
                </button>
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className={` md:hidden absolute top-16 left-0 w-full bg-opacity-95 z-50 flex flex-wrap gap-4 justify-center py-4 `}>
                    {Object.keys(themes).map((themeKey) => (
                        <div
                            key={themeKey}
                            onClick={() => {
                                setActiveTheme(themeKey);
                                setMenuOpen(false);
                            }}
                            className={`cursor-pointer flex flex-col items-center transition transform hover:scale-105 ${themeKey === activeTheme ? 'ring-4 ring-yellow-400' : ''
                                }`}
                        >
                            <div className={`w-8 h-8 rounded ${themes[themeKey].buttonNum}`} />
                            <span className="text-xs mt-1 capitalize text-white">{themeKey}</span>
                        </div>
                    ))}
                </div>
            )}
        </nav>
    );
};

export default Navbar;

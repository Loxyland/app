import React, { useState } from 'react';
import { useTheme } from './ThemeContext';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
    const { activeTheme, changeTheme, themes } = useTheme();
    const [menuOpen, setMenuOpen] = useState(false);
    const currentTheme = themes[activeTheme];

    return (
        <nav className={`relative p-4 ${currentTheme.bg} ${currentTheme.text} shadow-md`}>
            <div className="container mx-auto flex justify-between items-center">
                <h1 className={`text-2xl font-bold pixel ${currentTheme.text}`}>Pupu</h1>

                {/* Desktop Theme Selector */}
                <div className="hidden md:flex items-center gap-4">
                    <div className={`${currentTheme.text} ${currentTheme.bg} border-b-4`}>
                        Theme
                    </div>
                    {Object.keys(themes).map((themeKey) => (
                        <div key={themeKey}>
                            <div
                                onClick={() => changeTheme(themeKey)}
                                className={`cursor-pointer flex flex-col items-center transition transform hover:scale-105 ${themeKey === activeTheme ? 'ring-2 ring-yellow-400' : ''
                                    }`}
                            >
                                <div className={`w-8 h-8 rounded ${themes[themeKey].buttonNum}`} />
                            </div>
                            <span className={`text-sm mt-1 capitalize ${currentTheme.text}`}>{themeKey}</span>
                        </div>
                    ))}
                </div>

                {/* Hamburger Button */}
                <button
                    onClick={() => setMenuOpen(!menuOpen)}
                    className="md:hidden"
                    aria-label="Toggle menu"
                >
                    {menuOpen ? (
                        <X size={24} className={currentTheme.text} />
                    ) : (
                        <Menu size={24} className={currentTheme.text} />
                    )}
                </button>
            </div>

            {/* Mobile Menu - Improved Sidebar */}
            {menuOpen && (
                <div
                    className={`md:hidden fixed inset-y-0 right-0 w-64 ${currentTheme.bg} bg-opacity-50 z-50 flex flex-col items-center py-8 shadow-2xl transform transition-transform duration-300 ease-in-out ${menuOpen ? 'translate-x-0' : 'translate-x-full'
                        }`}
                >
                    <div className="w-full px-6 mb-8">
                        <h2 className={`text-xl font-bold ${currentTheme.text} border-b pb-2`}>
                        Theme
                        </h2>
                    </div>

                    <div className="w-full px-6 grid grid-cols-3 gap-2">
                        {Object.keys(themes).map((themeKey) => (
                            <div
                                key={themeKey}
                                onClick={() => {
                                    changeTheme(themeKey);
                                    setMenuOpen(false);
                                }}
                                className={`cursor-pointer flex flex-col items-center p-4 rounded-lg transition-all ${themeKey === activeTheme
                                        ? 'ring-2 ring-yellow-400 bg-opacity-80'
                                        : 'hover:bg-opacity-70'
                                    } ${themes[themeKey].buttonBg || currentTheme.bg}`}
                            >
                                <div className={`w-10 h-10 rounded-full mb-2 ${themes[themeKey].buttonNum}`} />
                                <span className={`text-sm font-medium capitalize ${currentTheme.text}`}>
                                    {themeKey}
                                </span>
                            </div>
                        ))}
                    </div>

                    <button
                        onClick={() => setMenuOpen(false)}
                        className={`mt-8 px-6 py-2 rounded-lg ${currentTheme.button} ${currentTheme.buttonText} font-medium`}
                    >
                        Close Menu
                    </button>
                </div>
            )}

            {/* Overlay when sidebar is open */}
            {menuOpen && (
                <div
                    className="fixed inset-0 blur-sm backdrop-blur-xs z-40 md:hidden"
                    onClick={() => setMenuOpen(false)}
                />
            )}
        </nav>
    );
};

export default Navbar;
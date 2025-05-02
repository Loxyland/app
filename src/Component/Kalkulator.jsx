import { useState } from "react";
import { useTheme } from "./ThemeContext";

const Kalkulator = () => {
    const [value, setValue] = useState('');
    const { activeTheme, themes } = useTheme();
    const currentTheme = themes[activeTheme];


    return (
        <div className={`min-h-screen ${currentTheme.bg} flex flex-col items-center justify-center p-4 `}>
            {/* Calculator */}
            <div className={`w-full max-w-xs border-4 ${currentTheme.border} p-3`}>
                {/* Display */}
                <div className={`mb-4 ${currentTheme.display} border-4 ${currentTheme.border} p-2 rounded-md`}>
                    <input
                        type="text"
                        value={value}
                        className="w-full bg-transparent text-right py-2 px-1 text-3xl font-mono focus:outline-none"
                        readOnly
                    />
                </div>

                {/* Buttons */}
                <div className="grid grid-cols-4 gap-2">
                    <button onClick={() => setValue('')} className={`${currentTheme.buttonFn} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>AC</button>
                    <button onClick={() => setValue(value.slice(0, -1))} className={`${currentTheme.buttonFn} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>DE</button>
                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonFn} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>.</button>
                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonOp} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>/</button>

                    {[7, 8, 9].map(num => (
                        <button key={num} onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonNum} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>
                            {num}
                        </button>
                    ))}
                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonOp} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>*</button>

                    {[4, 5, 6].map(num => (
                        <button key={num} onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonNum} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>
                            {num}
                        </button>
                    ))}
                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonOp} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>+</button>

                    {[1, 2, 3].map(num => (
                        <button key={num} onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonNum} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>
                            {num}
                        </button>
                    ))}
                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonOp} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>-</button>

                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonNum} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>00</button>
                    <button onClick={(e) => setValue(value + e.target.textContent)} className={`${currentTheme.buttonNum} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1`}>0</button>
                    <button onClick={() => setValue(eval(value) + "")} className={`${currentTheme.buttonOp} h-12 border-4 ${currentTheme.border} font-bold active:translate-y-1 col-span-2`}>=</button>
                </div>
            </div>
        </div>
    );
};

export default Kalkulator;

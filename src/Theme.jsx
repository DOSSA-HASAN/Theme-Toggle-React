import React, { useContext } from 'react'
import { ThemeContext } from './ThemeContext'

function Theme() {
    
    const { theme, toggleTheme } = useContext(ThemeContext)
    
    return (
        // <div style={{
        //     backgroundColor: theme === 'light' ? '#fff' : '#000',
        //     color: theme === 'light' ? '#000' : '#fff',
        //     height: '100vh',
        //     display: 'flex',
        //     alignItems: 'center',
        //     justifyContent: 'center'
        // }}>
        <div className={`${theme === 'light' ? 'light' : 'dark'}`}>
            <h1>The current theme is {theme} </h1>

            <br />

            <button onClick={toggleTheme}>Toggle Theme</button>
        </div>
    )
}

export default Theme

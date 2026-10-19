import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

// Global design tokens — match the original aesthetic
const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --red:        #8B1A1A;
    --red-pale:   #d4a0a0;
    --paper:      #fdf6f0;
    --bg:         #fdf6f0;
    --text:       #2a1a1a;
    --text-light: #7a5a5a;
    --font-hand:  'Caveat', cursive;
    --font-body:  'Nunito', sans-serif;
  }

  body {
    background: var(--paper);
    color: var(--text);
    font-family: var(--font-body);
    overflow-x: hidden;
    -webkit-font-smoothing: antialiased;
  }

  /* Shared return button used across all pages */
  .btn-return {
    font-family: var(--font-body);
    font-size: 0.72rem;
    font-weight: 600;
    letter-spacing: 0.12em;
    text-transform: uppercase;
    padding: 0.55rem 1.5rem;
    border-radius: 100px;
    border: 1.5px solid var(--text);
    background: transparent;
    color: var(--text);
    cursor: pointer;
    transition: all 0.2s ease;
  }
  .btn-return:hover {
    background: var(--text);
    color: var(--paper);
  }
`

const style = document.createElement('style')
style.textContent = globalStyles
document.head.appendChild(style)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

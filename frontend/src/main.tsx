import React from 'react'
import { createRoot } from 'react-dom/client'

// Chakra UI
import { ChakraProvider, ColorModeScript } from '@chakra-ui/react'
import theme from './utils/theme'

import './styles/index.css'

// Main App component
import App from './App'

const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <ColorModeScript initialColorMode={theme.config.initialColorMode} />
            <App />
        </ChakraProvider>
    </React.StrictMode>
)

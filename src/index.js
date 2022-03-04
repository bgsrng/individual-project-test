import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import reportWebVitals from './reportWebVitals';
import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'

ReactDOM.render(
  <ChakraProvider>
     <App />
  </ChakraProvider>,
  document.getElementById('root')
);

reportWebVitals();
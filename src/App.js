import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./styles.scss";
import AppRoutes from './routes';
import CharProvider from './context';




const App = () => {
  return (
    <>
     <CharProvider>
        <AppRoutes />
     </CharProvider>
    </>
  )
}

export default App
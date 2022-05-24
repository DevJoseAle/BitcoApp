import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorBoundary } from 'react-error-boundary';
import './App.css';

import Spinner from './Components/Spinner';
import ErrorFallback from './Components/ErrorBoundary';
import Error404 from  './Pages/Error404'

const Layout = React.lazy(()=>import('./Components/Layout'));
const Inicio = React.lazy(()=>import('./Pages/Inicio'));
const Cotizador = React.lazy(()=>import('./Pages/Cotizador'));
// const About = React.lazy(()=>import('./Pages/About'));



function App() {
  
  return (
      
    <div>
      
    <Suspense fallback={<Spinner/>}>

        <BrowserRouter>
          <ErrorBoundary 
          FallbackComponent={ErrorFallback}
          onReset={() => {window.location.href = '/home'}} >
            <Routes>

              <Route path="/" element={<Layout/>}>
                <Route index element={<Inicio/>}/>
    
                <Route path="cotizador" element={<Cotizador/>}/>
                  
                <Route path="about" element={<Error404/>}/>
                
              </Route>

                <Route path="*" element={<Error404/>}/>
            </Routes>
        
          </ErrorBoundary>
        </BrowserRouter>

    </Suspense>
    </div>
  );
}

export default App;

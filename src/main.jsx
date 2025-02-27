import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter
import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter> {/* Wrap your App component in BrowserRouter */}
      <App />
    </BrowserRouter>
  </StrictMode>
);



// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { Route, Routes } from 'react-router-dom'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//     <Routes>
//       {/* <Route element={<Layout />}> */}
//         <Route path="home" element={<App />} />
//         {/* <Route path="users" element={<Users />} /> */}
//       {/* </Route> */}
//     </Routes>
//   </StrictMode>,
// )

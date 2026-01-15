// // import React from 'react'
// // import ReactDOM from 'react-dom/client'
// // import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// // import 'bootstrap/dist/css/bootstrap.min.css';
// // import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// // import './index.css';
// // import App from './App.jsx'
// // import About from './pages/About/index.jsx';
// // import Projects from './pages/Projects/index.jsx';
// // import Experience from './pages/Experience/index.jsx';
// // import Contact from './pages/Contact/index.jsx';
// // import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

// // const router = createBrowserRouter([
// //   {
// //     path: '/',
// //     element: <App />,
// //     errorElement: <ErrorPage />,
// //     // children: [
// //     //   {
// //     //     index: true,
// //     //     element: <About />,
// //     //   },
// //     //   {
// //     //     path: '/projects',
// //     //     element: <Projects />,
// //     //   },
// //     //   {
// //     //     path: '/experience',
// //     //     element: <Experience />,
// //     //   },
// //     //   {
// //     //     path: '/contact',
// //     //     element: <Contact />,
// //     //   },
// //     // ],
// //   },
// // ]);

// // ReactDOM.createRoot(document.getElementById('root')).render(
// //   <RouterProvider router={router} />
// // )

// import React from 'react'
// import ReactDOM from 'react-dom/client'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min.js';
// import './index.css';
// import App from './AppCopy.jsx'
// import ErrorPage from './pages/ErrorPage/ErrorPage.jsx';

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element: <App />,
//     errorElement: <ErrorPage />,
//   },
// ]);

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <RouterProvider router={router} />
// )

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
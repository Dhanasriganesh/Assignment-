import React from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Register from './Components/Auth/Register';
import Login from "../src/Components/LoginPage/Login";

function App() {
  // localStorage.setItem("language", "ar");
  // localStorage.setItem("isRTL", "true");
  const appRouter = createBrowserRouter([
        {
          path: "/",
          element: <Register />,
        },
        {
          path: "/login",
          element: <Login/>
        }, 
  ]);

  return (
    <>
      {/* <RouterProvider router={appRouter} /> */}
      <Login/>
    </>
  );
}

export default App;

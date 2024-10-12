import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Newfile from "./components/Newfile";
import Newpage2 from "./components/Newpage2";
// import Page from "./components/Page";

function App() {
  const router = createBrowserRouter([
    {
      path: "/basic/",
      element:<><Newfile /></>
    },
    {
      path:"/basic/file2",
      element:<><Newpage2 /></>
    }
  ]);


  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App

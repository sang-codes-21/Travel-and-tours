import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";
import Tours from "../src/pages/Tours.jsx";
import Adventure from "../src/pages/Adventure.jsx";
import Trek from "../src/pages/Trek.jsx";
import About from "../src/pages/About.jsx";
import Blog from "../src/pages/Blog.jsx";
import Contact from "../src/pages/Contact.jsx";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomePage />,
    },
    { path: "/tours", element: <Tours /> },
    { path: "/adventure", element: <Adventure /> },
    { path: "/trek", element: <Trek /> },
    { path: "/about", element: <About /> },
    { path: "/blog", element: <Blog /> },
    { path: "/contact", element: <Contact /> },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

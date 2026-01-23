import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "../src/pages/HomePage.jsx";
import Tours from "../src/pages/Tours.jsx";
import Adventure from "../src/pages/Adventure.jsx";
import TourDetails from "../src/pages/TourDetails.jsx";
import About from "../src/pages/About.jsx";
import Blog from "../src/pages/Blog.jsx";
import Contact from "../src/pages/Contact.jsx";
import Common from "./common/Common.jsx";
const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Common />,
      children: [
        { index: true, element: <HomePage /> },
        { path: "tours", element: <Tours /> },
        { path: "adventure", element: <Adventure /> },
        { path: "trek", element: <Adventure /> },
        { path: "about", element: <About /> },
        { path: "blog", element: <Blog /> },
        { path: "contact", element: <Contact /> },
        { path: "tours/:tourName", element: <TourDetails /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;

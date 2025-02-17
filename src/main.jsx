import { StrictMode } from 'react'
import ReactDOM from 'react-dom/client'

import { RouterProvider, createRouter } from "@tanstack/react-router";
import { routeTree } from "./routeTree.gen";

import './index.css'

const router = createRouter({ routeTree });

const App = () => {
  return (
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(<App />)

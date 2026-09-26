import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {RouterProvider} from "react-router-dom";
import {router} from "./configs/RoutesConfig.tsx";
import '@fontsource/montserrat/400.css';
import '@fontsource/montserrat/600.css';
import '@fontsource/montserrat/700.css';
import '@assets/scss/base/globals.scss';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <RouterProvider router={ router } />
  </StrictMode>,
)

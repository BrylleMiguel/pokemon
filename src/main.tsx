import React from 'react'
import ReactDOM from 'react-dom/client'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import App from './App';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import PokemonStory from './components/story/PokemonStory';

const qc = new QueryClient();

const theme = extendTheme({
  fonts: {
    body: `'Roboto', sans-serif`
  }
})

const router = createBrowserRouter([
  {
    path: "/",
    element: <PokemonStory />,
    errorElement: <>page not found...</>
  },
  {
    path: "/pokemons",
    element: <App />,
    errorElement: <>page not found...</>
  },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={qc}>
      <ChakraProvider theme={theme}>
        <RouterProvider router={router} />
      </ChakraProvider>
    </QueryClientProvider>
  </React.StrictMode>,
)

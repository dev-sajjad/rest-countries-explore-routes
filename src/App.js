import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Countries from './components/Countries/Countries';
import CountryDetails from './components/CountryDetails/CountryDetails';
import Home from './components/Home/Home';
import SearchResult from './components/SerachResult/SearchResult';
import Main from './layout/Main';

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        { path: "/", element: <Home></Home> },
        { path: "/home", element: <Home></Home> },
        {
          path: "/countries",
          loader: async () => {
            return fetch("https://restcountries.com/v3.1/all");
          },
          element: <Countries></Countries>,
        },
        {
          path: "/countries/:name",
          loader: async ({ params }) => {
            return fetch(`https://restcountries.com/v3.1/name/${params.name}`);
          },
          element: <CountryDetails></CountryDetails>,
        },
      ],
    },
    {
      path: "/search",
      loader: async () => {
        return fetch("https://restcountries.com/v3.1/all");
      },
      element: <SearchResult></SearchResult>,
    },
  ]); 

  return (
    <div className="App">
  <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;

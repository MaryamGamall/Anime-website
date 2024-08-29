import { Fragment } from "react";
import "./App.css";
import Home from "./pages/Home";
import { useEffect, useState } from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Layout from "./pages/Layout";
import Recommended from "./pages/Recommended";
import List from "./pages/List.jsx";
import New from "./pages/New.jsx";
function App() {
  useEffect(() => {
    fetchmovieshandler();
  }, []);

  const [films, setfilms] = useState([]);

  async function fetchmovieshandler() {
    const response = await fetch(
      "https://api.jikan.moe/v4/anime?q=Kimetsu no Yaiba&limit=6"
    );
    const data = await response.json();
    const datatransform = data.data.map((movie) => {
      return {
        id: movie.mal_id,
        title: movie.title_english, 
        episodes: movie.episodes,
        score: movie.score,
        poster: movie.images.jpg.large_image_url,
      };
    });
    setfilms(datatransform);
  }

  const router1 = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route path="/home" element={<Home mymovies={films} />} />
        <Route path="/recommended" element={<Recommended />} />
        <Route path="/new" element={<New />} />
        <Route path="/list" element={<List />} />
      </Route>
    )
  );

  return (
    <Fragment>
      <RouterProvider router={router1} />
    </Fragment>
  );
}

export default App;

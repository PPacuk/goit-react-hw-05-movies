import { Home } from 'Pages/Home';
import { Movies } from 'Pages/Movies';
import { MovieDetails } from 'Pages/MovieDetails';
import { Cast } from 'components/Cast/Cast';
import { Reviews } from 'components/Reviews/Reviews';
import { Route, Routes } from 'react-router-dom';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';

export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="movies" element={<Movies />}>
          {/* <Route path="movies/:movieId" element={<MovieDetails />}>


          </Route> */}
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

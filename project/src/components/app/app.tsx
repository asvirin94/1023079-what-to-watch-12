import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { AppRoute, AuthorizationStatus } from '../../consts';
import AddReview from '../../pages/add-review/add-review';
import FilmPage from '../../pages/film/film';
import MainPage from '../../pages/main/main';
import MyList from '../../pages/my-list/my-list';
import NotFound from '../../pages/not-found/not-found';
import Player from '../../pages/player/player';
import SignIn from '../../pages/sign-in/sign-in';
import PrivateRoute from '../private-route/private-route';
import { HelmetProvider } from 'react-helmet-async';
import { FilmType } from '../../types/film-type';
import { PromoFilm } from '../../types/promo-film-type';

type Props = {
  films: FilmType[];
  promoFilm: PromoFilm;
}

export default function App(props: Props): JSX.Element {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path = {AppRoute.Main}
            element = {
              <MainPage
                films={props.films}
                promoFilm={props.promoFilm}
              />
            }
          />
          <Route
            path = {AppRoute.SignIn}
            element = {<SignIn />}
          />
          <Route
            path = {AppRoute.MyList}
            element = {
              <PrivateRoute
                authorizationStatus = {AuthorizationStatus.NoAuth}
              >
                <MyList />
              </PrivateRoute>
            }
          />
          <Route
            path = {AppRoute.Film}
            element = {<FilmPage />}
          />
          <Route
            path = {AppRoute.AddReview}
            element = {<AddReview />}
          />
          <Route
            path = {AppRoute.Player}
            element = {<Player />}
          />
          <Route
            path = '*'
            element = {<NotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

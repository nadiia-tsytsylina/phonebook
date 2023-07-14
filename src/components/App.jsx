import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { fetchCurrentUser } from 'redux/operations';
import { selectAuthIsLoading, selectAuthError } from 'redux/selectors';
import Layout from 'components/Layout/Layout';
import Register from 'Pages/Register';
import Login from 'Pages/Login';
import Contacts from 'Pages/Contacts';
import Home from 'Pages/Home';
import Loader from './Loader/Loader';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

export default function App() {
  const dispatch = useDispatch();
  const isAuthLoading = useSelector(selectAuthIsLoading);
  const AuthError = useSelector(selectAuthError);

  useEffect(() => {
    dispatch(fetchCurrentUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute>
                <Register />
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <Contacts />
              </PrivateRoute>
            }
          />
        </Route>
      </Routes>
      {isAuthLoading && !AuthError && <Loader />}
    </>
  );
}

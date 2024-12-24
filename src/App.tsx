import { useEffect } from 'react';
import { setMoviesList, setGenresList, setIsLoading } from './redux/appStore';
//Hooks
import useActivePage from './services/hooks/useGetActivePage';
import useIsLoading from './services/hooks/useIsLoading';
import useCommonDispatch from './services/hooks/useCommonDispatch';
// Components
import Loader from './components/Loader';
import MoviesListView from './components/moviesListView/MoviesListView';
//API
import { getPopularMoviesByPage, getSearch } from './services/apiServices';
import { URLGenres } from './services/apiVariables';
// Styles
import './styles/shared.css';

function App():JSX.Element {

const isLoading = useIsLoading();
const dispatch = useCommonDispatch();
const activePage = useActivePage();
 
  useEffect( () => {
  const movies = getPopularMoviesByPage(activePage);
  const genres = getSearch(URLGenres);
  Promise.all([movies, genres] )
  .then( (values) => {
    const [fetchedMovies , fetchedGenres] = values;
    dispatch(setMoviesList(fetchedMovies));
    dispatch(setGenresList(fetchedGenres));
    dispatch(setIsLoading(false));
  } )
  }, [])

 if (isLoading) {
  return(
    <>
          <Loader />
    </>
  )
 }
  return (
    <>
         <MoviesListView />
    </>
  )
}

export default App

import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useMoviesList = () => {
    const moviesList = useSelector( (state:RootState) => state.appStore.moviesList);
    return moviesList
}

export default useMoviesList;
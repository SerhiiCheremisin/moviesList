import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useGenresList = () => {
    const genresList = useSelector( (state:RootState) => state.appStore.genresList);
    return genresList
}

export default useGenresList;
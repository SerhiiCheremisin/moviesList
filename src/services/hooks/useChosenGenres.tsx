import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useChosenGenres = () => {
    const chosenGenres = useSelector( (state:RootState) => state.appStore.chosenGenres);
    return chosenGenres
}

export default useChosenGenres;
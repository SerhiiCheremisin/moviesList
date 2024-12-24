import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useIsLoading = () => {
    const isLoading = useSelector( (state:RootState) => state.appStore.isLoading);
    return isLoading
}

export default useIsLoading;
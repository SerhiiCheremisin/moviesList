import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useActivePage = () => {
    const activePage = useSelector( (state:RootState) => state.appStore.activePage);
    return activePage
}

export default useActivePage;
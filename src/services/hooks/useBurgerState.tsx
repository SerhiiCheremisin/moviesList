import { useSelector } from 'react-redux';
import { RootState } from '../../redux/reduxStore';


const useBurgerState = () => {
    const isBurgerOpen = useSelector( (state:RootState) => state.appStore.isBurgerOpen);
    return isBurgerOpen
}

export default useBurgerState;
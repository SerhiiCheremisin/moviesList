import React, { useEffect } from 'react';
import '../../styles/pagination.css';
import { arrowPaginationType } from '../../types/propsTypes';
//Services
import { paginationNumbers } from '../../services/sharedData';
import { numberRenderLogic } from '../../services/commonFunctions';
import { getMoviesByGenresByPage, getPopularMoviesByPage } from '../../services/apiServices';
//Hooks
import useChosenGenres from '../../services/hooks/useChosenGenres';
import useActivePage from '../../services/hooks/useGetActivePage';
//Redux
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setActivePage, setMoviesList } from '../../redux/appStore';

export default function Paginator():JSX.Element {

 const activePage = useActivePage();
 const chosenGenres = useChosenGenres();
 const dispatch = useCommonDispatch();
 const numberToDisplay = numberRenderLogic(paginationNumbers, activePage);

useEffect(() => {
  if (chosenGenres.length === 0) {
    getPopularMoviesByPage(activePage)
    .then( data => dispatch(setMoviesList(data)));
    return;
  }
  getMoviesByGenresByPage(chosenGenres, activePage)
  .then( data => dispatch(setMoviesList(data)));
  return;
},[activePage])

 const paginationNavHandler = (value: arrowPaginationType | number):void => {
    if (value === "left") {
        if (activePage != 1) {
            dispatch(setActivePage(activePage-1));
            return;
        }
         return;
    }
    if (value === "right") {
        if (activePage != paginationNumbers.length) {
            dispatch(setActivePage(activePage+1));
            return;
        } 
        return;
    }
    dispatch(setActivePage(value));
 }

  return (
    <div className='pagination-wrapper'>
      <button tabIndex={0} onClick={() => paginationNavHandler("left")} className='pagination-button-left'>
      <i className="arrow left"></i>
      </button>
     { numberToDisplay.map( (el:number) => {
         return(
            <button tabIndex={0} onClick={() => paginationNavHandler(el)} key={el} className={activePage === el ? "pagination-number" : "pagination-number-inactive"}>
              {el}
            </button>
         )
     }) } 
      <button tabIndex={0} onClick={() => paginationNavHandler("right")} className='pagination-button-right'>
      <i className="arrow right"></i>
      </button>
    </div>
  )
}

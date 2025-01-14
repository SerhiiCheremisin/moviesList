import React, { useLayoutEffect, useState } from 'react';
import '../../styles/genresSearch.css';
import useGenresList from '../../services/hooks/useGenresList';
import { getListWithGenres } from '../../services/apiServices';
import { IGenresListTypes } from '../../types/propsTypes';
// Redux
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setActivePage, setMoviesList, setBurger } from '../../redux/appStore';
import useChosenGenres from '../../services/hooks/useChosenGenres';
import useBurgerState from '../../services/hooks/useBurgerState';
//Components
import GenreCard from './GenreCard';

export default function SideSearchMenu():JSX.Element {

  const genresList = useGenresList();
  const genresArray = genresList.genres;
  const chosenGenres = useChosenGenres();
  const dispatch = useCommonDispatch();
  const isBurgerOpen = useBurgerState();

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);
  const [screenHeight, setScreenHeight] = useState(window.innerHeight);

  useLayoutEffect(() => {
    const updateWidth = () => {
      setScreenWidth(window.innerWidth);
      setScreenHeight(window.innerHeight);
    };
    window.addEventListener('resize', updateWidth);
    return () => {
      window.removeEventListener('resize', updateWidth);
    };
  }, []);

 
  const searchHandler = ():void => {
     if(chosenGenres.length === 0) return
     getListWithGenres(chosenGenres)
     .then ( (data) => 
      dispatch(setMoviesList(data))   
    )
    if (screenWidth <= 650) {
     dispatch(setBurger(false));
    }
    dispatch(setActivePage(1));
  }

   return (
    <aside style={{display: (screenWidth<=650 || screenHeight<=800) && !isBurgerOpen ? "none" : "flex" }} className='movie-list--side-menu'>
      <h3>Genres</h3>
      <div className='movie-list--genres-grid'>
      { genresArray.map( (genre : IGenresListTypes, ) => {
           return(
            <GenreCard key={genre.id} genre={genre} />
           )
      } )}
      </div>
      <button tabIndex={0} onClick={searchHandler} className={chosenGenres.length > 0 ? "search-button" : "search-button--passive"}>Search by a genre</button>
      { (screenWidth <= 650 || screenHeight<=800) && <button className='burger-closer' onClick={() => dispatch(setBurger(false))}>Close</button>}
    </aside>
  )
}

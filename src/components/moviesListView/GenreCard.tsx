import React, { useState } from 'react';
import { IGenreCardProps } from '../../types/propsTypes';
import '../../styles/genresSearch.css';
// Redux
import useChosenGenres from '../../services/hooks/useChosenGenres';
import useCommonDispatch from '../../services/hooks/useCommonDispatch';
import { setChosenGenres } from '../../redux/appStore';

export default function GenreCard( { genre }: IGenreCardProps ):JSX.Element {

    const [isActive, setIsActive] = useState(false);
    const chosenGenres = useChosenGenres();
    const dispatch = useCommonDispatch();

    const genreCardHandler = ():void => {
       if (!isActive) {
        dispatch(setChosenGenres([...chosenGenres, ...[genre.id]]));
        setIsActive(true);
         return
       }
      const newList = chosenGenres.filter( (element:number) => element != genre.id);
      dispatch(setChosenGenres(newList));
      setIsActive(false);
      return
    };

    return(
        <aside onClick={genreCardHandler} className={isActive ? "movie-list--genre-card" : "movie-list--genre-card-passive"}>
           { genre.name }
        </aside>
      )
}

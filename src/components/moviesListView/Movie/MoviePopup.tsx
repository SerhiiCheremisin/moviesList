import React, { useEffect, useState } from 'react';
import '../../../styles/movieView.css';
import { IMovieListItem } from '../../../types/propsTypes';
import useMoviesList from '../../../services/hooks/useMoviesList';

interface MoviePopupProps {
    closePopup :  React.Dispatch<React.SetStateAction<boolean>>;
    movie: IMovieListItem
}

export default function MoviePopup( { closePopup, movie } : MoviePopupProps ):JSX.Element {

 const [currentId, setCurrentId] = useState<number>(0);
 const [currentMovie,setCurrentMovie] = useState<IMovieListItem>();

 const movieList = useMoviesList();

 useEffect(() => {
  const index = movieList.results.findIndex(element => element.id === movie.id);
  setCurrentId(index);
  return( () => {
    setCurrentId(0);
    setCurrentMovie(undefined);
  })
 },[]);

 useEffect(() => {
  setCurrentMovie(movieList.results[currentId])
 }, [currentId])

  return (
    <div className='movie-information-popup'>
      <div className="movie-information-popup--big-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${currentMovie?.poster_path})`,
               backgroundPosition: 'center',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat'}}></div>
      <div className="movie-information-popup--full-information">
        <button onClick={() => closePopup(false)} className='movie-information-popup--close-button'>X</button>
        <ul className='movie-information-popup--full-information__list'>
          <li> <span>Title</span>: {currentMovie?.original_title}</li>
          <li><span>Description</span>: {currentMovie?.overview}</li>
          <li><span>Original language</span>: {currentMovie?.original_language}</li>
          <li><span>Release date</span>: {currentMovie?.release_date}</li>
          <li><span>Average rating</span>: {currentMovie?.vote_average} <span>Based on</span>: {currentMovie?.vote_count} reviews</li>
        </ul>
        <div className='movie-information-popup--navigation'>
          <button disabled={currentId <= 0 ? true : false} onClick={() => setCurrentId(prev => prev-1)}>Previous</button>
          <button disabled={currentId > movieList.results.length-2 ? true : false} onClick={() => setCurrentId(prev => prev+1)}>Next</button>
        </div>
      </div>
    </div>
  )
}

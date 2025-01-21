import React, { useState } from 'react';
import '../../../styles/movieView.css';
import { IMovieListItem } from '../../../types/propsTypes';

interface MoviePopupProps {
    closePopup :  React.Dispatch<React.SetStateAction<boolean>>;
    movie: IMovieListItem
}

export default function MoviePopup( { closePopup, movie } : MoviePopupProps ):JSX.Element {
  return (
    <div className='movie-information-popup'>
      <div className="movie-information-popup--big-poster" style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
               backgroundPosition: 'center',
               backgroundSize: 'contain',
               backgroundRepeat: 'no-repeat'}}></div>
      <div className="movie-information-popup--full-information">
        <button onClick={() => closePopup(false)} className='movie-information-popup--close-button'>X</button>
        <ul className='movie-information-popup--full-information__list'>
          <li> <span>Title</span>: {movie.original_title}</li>
          <li><span>Description</span>: {movie.overview}</li>
          <li><span>Original language</span>: {movie.original_language}</li>
          <li><span>Release date</span>: {movie.release_date}</li>
          <li><span>Average rating</span>: {movie.vote_average}. <span>Based on</span>: {movie.vote_count} reviews</li>
        </ul>
      </div>
    </div>
  )
}

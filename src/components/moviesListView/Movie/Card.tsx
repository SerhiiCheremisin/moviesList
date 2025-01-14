import React from 'react';
import '../../../styles/movieView.css';
import { IMovieListItem } from '../../../types/propsTypes';

interface MovieCardProps {
    movie: IMovieListItem
}

export default function MovieCard( { movie }: MovieCardProps ):JSX.Element {

           return(
           <button key={movie.id} className='movie-list--card' onClick={() => alert("Just a temporary placeholder")} tabIndex={0}>
               <div className='movie-list--card-background' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
               backgroundPosition: 'center',
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat'}}></div>
               <div className='movie-list--card-info'>
               <span><h3>{ movie.title }</h3></span>  
               <span>{ movie.release_date }</span>  
               <div className='movie-list--card-rating'> { parseFloat((Math.round(movie.vote_average * 100) / 100).toFixed(1)) } </div>
               </div>
           </button>
     )
}
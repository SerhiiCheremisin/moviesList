import React from 'react';
import '../../styles/movieView.css';
import useMoviesList from '../../services/hooks/useMoviesList';
import { IMovies, IMovieListItem } from '../../types/propsTypes';
//Components
import SideSearchMenu from './SideSearchMenu';
import Paginator from './Paginator';


export default function MoviesListView():JSX.Element {

  const moviesList: IMovies = useMoviesList();

  return (
    <div className='movies-list-wrapper'>
      <SideSearchMenu />
      <div className='movie-list--cards-wrapper'>
      <div className='movie-list--cards'>
        { moviesList.results.length === 0 && <h2>There is no more movies to find for you</h2> }
        { moviesList.results.length != 0 && moviesList.results.map( (movie: IMovieListItem) => {
          return(
          <div key={movie.id} className='movie-list--card'>
              <div className='movie-list--card-background' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w300/${movie.poster_path})`,
              backgroundPosition: 'center',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat'}}></div>
              <div className='movie-list--card-info'>
              <span><h3>{ movie.title }</h3></span>  
              <span>{ movie.release_date }</span>  
              <div className='movie-list--card-rating'> { parseFloat((Math.round(movie.vote_average * 100) / 100).toFixed(1)) } </div>
              </div>
          </div>
    )
}) } 
      </div>
      <Paginator/>
      </div>
    </div>
  )
}

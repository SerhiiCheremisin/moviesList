import React from 'react';
import '../../styles/movieView.css';
import useMoviesList from '../../services/hooks/useMoviesList';
import { IMovies, IMovieListItem } from '../../types/propsTypes';
//Components
import SideSearchMenu from './SideSearchMenu';
import Paginator from './Paginator';
import MovieCard from './Movie/MovieCard';

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
          <MovieCard movie={movie}/>
         )})} 
      </div>
      <Paginator/>
      </div>
    </div>
  )
}

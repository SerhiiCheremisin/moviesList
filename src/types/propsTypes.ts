import { SetStateAction } from "react";

// Genres
export interface IGenresListTypes {
  id: number,
  name : string
}

export interface IGenres {
    genres : IGenresListTypes[];
}

export interface ISideMenuProps {
    genreList : IGenres,
    setMovies : React.Dispatch<SetStateAction<IMovies>>
}

export interface IGenreCardProps {
    genre : IGenresListTypes,
}

// Movies
export interface IMovieListItem {
    adult: boolean,
    backdrop_path: string,
    genre_ids: number[],
    id: number,
    original_language: string,
    original_title: string,
    overview:string,
    popularity: number,
    poster_path: string,
    release_date: string,
    title: string,
    video: boolean,
    vote_average: number,
    vote_count: number
}

export interface IMovies {
    page: number,
    results: IMovieListItem[]
}

//General
export interface IMovieListViewProps  {
    movieList: IMovies,
    genreList: IGenres,
    setMovies: React.Dispatch<SetStateAction<IMovies>>
}

export interface IAppState {
    isLoading : boolean,
    moviesList: IMovies,
    genresList: IGenres
    activePage: number,
    chosenGenres: number[],
    isBurgerOpen: boolean
}

export type arrowPaginationType  = "right" | "left";
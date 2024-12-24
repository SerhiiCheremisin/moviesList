import { createSlice } from "@reduxjs/toolkit";
import { IAppState } from "../types/propsTypes";

const initialState: IAppState = {
    isLoading : true,
    moviesList: { page: 0, results: []},
    genresList: {genres: []},
    activePage: 1,
    chosenGenres: [],
    isBurgerOpen: false
}

const appSlice = createSlice({
    name: 'appSlice',
    initialState: initialState,
    reducers : {
        setIsLoading (state, action) {
            state.isLoading = action.payload;
        },
        setMoviesList (state, action) {
            state.moviesList = action.payload;
        },
        setGenresList (state, action) {
            state.genresList = action.payload;
        },
        setActivePage (state, action) {
            state.activePage = action.payload;
        },
        setChosenGenres (state, action) {
            state.chosenGenres = action.payload;
        },
        setBurger (state, action) {
            state.isBurgerOpen = action.payload;
        }
    }
})

export const { setIsLoading, setMoviesList, setGenresList, setActivePage, setChosenGenres, setBurger } = appSlice.actions;

export default appSlice.reducer;
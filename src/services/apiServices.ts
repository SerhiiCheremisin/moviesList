import { baseURL, options } from "./apiVariables"

export const getSearch = async (URLParams:string): Promise<any> => {
   try {
   const request = await fetch(`${baseURL}${URLParams}`, options);
   const response = await request.json();
   return response;
   }
   catch (error) {
    console.error( `You have an error ${error}`)
   }
}

export const getListWithGenres = async (genres:number[]):Promise<any> => {
   try {
      const genresString = genres.toString();
      const request = await fetch(`${baseURL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genresString}`, options);
      const response = await request.json();
      return response;
      }
      catch (error) {
       console.error( `You have an error ${error}`)
      }
}

export const getPopularMoviesByPage = async(page:number):Promise<any> => {
   try {
      const request = await fetch(`${baseURL}movie/popular?language=en-US&page=${page}`, options);
      const response = await request.json();
      return response;
      }
      catch (error) {
       console.error( `You have an error ${error}`)
      }
}

export const getMoviesByGenresByPage = async (genres: number[], page: number):Promise<any> => {
   try {
      const genresString = genres.toString();
      const request = await fetch(`${baseURL}discover/movie?api_key=${import.meta.env.VITE_API_KEY}&with_genres=${genresString}&page=${page}`, options);
      const response = await request.json();
      return response;
      }
      catch (error) {
       console.error( `You have an error ${error}`)
      }
}

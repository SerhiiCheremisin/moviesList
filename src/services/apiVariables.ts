import { IFetchOptions } from "../types/apiTypes";

export const bearerToken =  `Bearer ${import.meta.env.VITE_API_TOKEN}`;
export const baseURL: string = "https://api.themoviedb.org/3/";
export const options: IFetchOptions = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: bearerToken
    }
  };
  

// URL routes  
export const URLGenres:string = "genre/movie/list?language=en";
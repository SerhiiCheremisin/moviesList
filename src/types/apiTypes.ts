
type methodType = "GET" | "POST" | "DELETE" | "UPDATE" | "PUT" ;
export interface IFetchOptions {
    method : methodType,
    headers?: {
      accept: string,
      Authorization: string
    }
}
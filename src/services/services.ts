import { APIInstance } from "@/API";
import { AxiosResponse } from "axios";

export type Movie = {
  backdrop_path: string;
  id: number;
  title: string;
  original_title: string;
  overview: string;
  poster_path: string;
  media_type: string;
  original_language: string;
  adult: boolean;
  genres: Genre[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

type MovieRespons = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export type Genre = {
  id: number;
  name: string;
};

export async function getMovies(page: number): Promise<MovieRespons> {
  const response: AxiosResponse = await APIInstance.get(
    `/discover/movie?page=${page}`
  );
  console.log("response.data", response.data);
  return response.data;
}

export async function getMovieById(id: string): Promise<Movie> {
  const response = await APIInstance.get(`/movie/${id}?language=en-US`);
  return response.data;
}

export async function getMovieByGenre(genre: string): Promise<void> {
  console.log("genre", genre);
  const response: AxiosResponse = await APIInstance.get(
    `/discover/movies?genres=${genre}`
  );
  console.log("response", response);
}

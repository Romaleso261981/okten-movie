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
  genre_ids: number[];
  popularity: number;
  release_date: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
};

export async function getMovies(): Promise<Movie[]> {
  const response: AxiosResponse = await APIInstance.get("/trending/movie/week");

  return response.data.results;
}

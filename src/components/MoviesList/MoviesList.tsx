import React from "react";
import Link from "next/link";
import { Movie } from "@/tmdb/models";

import s from "./movies.module.css";

const imageDefaultLink = "https://image.tmdb.org/t/p/w500";
const defaultImg = "https://via.placeholder.com/500x750";

type MovieListProps = {
  movies: Movie[];
};

const MovieList: React.FC<MovieListProps> = ({ movies }) => {
  if (!movies) {
    return <div>Loading...</div>;
  }

  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li className={s.item} key={movie.id}>
          <Link href={`/movie/${movie.id}`}>
            <img
              className={s.img}
              src={
                movie.poster_path
                  ? `${imageDefaultLink}${movie.poster_path}`
                  : defaultImg
              }
              alt={movie.title}
            />
          </Link>
          <h3>{movie.title}</h3>
        </li>
      ))}
    </ul>
  );
};

export default MovieList;

"use client";

import s from "./GenreList.module.css";

export function GenreList({ genres }: { genres: string[] }) {
  return (
    <ul className={s.list}>
      {genres.map((genre) => (
        <li
          className={s.item}
          key={genre}
          // onClick={() => getMovieByGenre(genre)}
          onClick={() => alert(genre)}
        >
          {genre}
        </li>
      ))}
    </ul>
  );
}

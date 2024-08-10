import React from "react";
import s from "./movies.module.css";
import { Container } from "@/components";
import Link from "next/link";
import { Movie, getMovies } from "@/services/services";
import { StarsRatingComponent } from "@/components/StarsRatingComponent/StarsRatingComponent";

const imageDefaultLink = "https://image.tmdb.org/t/p/w500";
const defaultImg = "https://via.placeholder.com/500x750";

type MoviesPageProps = {
  movies: Movie[];
};

const MoviesPage: React.FC<MoviesPageProps> = async () => {
  const movies = await getMovies(1);

  return (
    <Container>
      <section className={s.moviesWrapper}>
        <h1>Trending now</h1>
        {/* <SearchBar onSearch={handleSearch} /> */}
        <StarsRatingComponent reating={2} />
        <ul>
          {movies.map((movie) => (
            <li>
              <Link key={movie.id} href={`/movies/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `${imageDefaultLink}${movie.poster_path}`
                      : defaultImg
                  }
                  alt={movie.title}
                />
                <h3>{movie.title}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default MoviesPage;

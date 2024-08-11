import React from "react";
import s from "./movies.module.css";
import { Container } from "@/components";
import Link from "next/link";
import { Movie, getMovies } from "@/services/services";
import { Flex, Title } from "@mantine/core";

const imageDefaultLink = "https://image.tmdb.org/t/p/w500";
const defaultImg = "https://via.placeholder.com/500x750";

type MoviesPageProps = {
  movies: Movie[];
};

const MoviesPage: React.FC<MoviesPageProps> = async () => {
  const {
    results: movies,
    total_pages,
    page,
    total_results
  } = await getMovies(2);

  console.log("movies", movies[2]);

  return (
    <Container>
      <section className={s.moviesWrapper}>
        <Flex className={s.navigation}>
          <Flex className={s.firstBlockNavigation}>
            {/* <BackBtn text={"Home"} path={"/movies"} /> */}
            <Title>Trending now</Title>
          </Flex>
          <Flex>{/* <SearchBar onSearch={handleSearch} /> */}</Flex>
        </Flex>
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
              </Link>
              <h3>{movie.title}</h3>
            </li>
          ))}
        </ul>
      </section>
    </Container>
  );
};

export default MoviesPage;

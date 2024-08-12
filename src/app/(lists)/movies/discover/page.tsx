import React from "react";
import { Container } from "@/components";
import MovieList from "@/components/MoviesList/MoviesList";
import { getMovies } from "@/services/services";
import { Center, Pagination } from "@mantine/core";

import s from "./movies.module.css";
import { pages } from "@/config";

export async function generateMetadata() {
  return {
    title: "Discover Movies",
    description: pages.movie.discover.description
  };
}

const MoviesPage = async () => {
  const { results, total_pages } = await getMovies(1);

  return (
    <Container>
      <section className={s.wrapper}>
        <h1>Trending now</h1>
        <MovieList movies={results} />
        <Center mt={30} mb={50}>
          {total_pages > 0 && <Pagination total={total_pages} />}
        </Center>
      </section>
    </Container>
  );
};

export default MoviesPage;

import React, { FC } from "react";
import { Container, PaginationComponent } from "@/components";
import MovieList from "@/components/MoviesList/MoviesList";
import { Center } from "@mantine/core";

import { pages } from "@/config";
import { tmdb } from "@/tmdb/api";
import s from "./movies.module.css";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Discover Movies",
    description: pages.movie.discover.description
  };
}

const Discover: FC<ListPageProps> = async ({
  searchParams
}: {
  searchParams?: {
    query?: string;
    page?: string;
  };
}) => {
  const currentPage = Number(searchParams?.page) || 1;

  const { results: movies, total_pages } = await tmdb.discover.movie({
    page: currentPage.toString()
  });

  return (
    <Container>
      <section className={s.wrapper}>
        <h1>Trending now</h1>
        <MovieList movies={movies} />
        <Center mt={30} mb={50}>
          {total_pages > 0 && <PaginationComponent total={10} />}
        </Center>
      </section>
    </Container>
  );
};

export default Discover;

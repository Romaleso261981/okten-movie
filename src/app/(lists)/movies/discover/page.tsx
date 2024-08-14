import React, { FC } from "react";
import { Container } from "@/components";
import MovieList from "@/components/MoviesList/MoviesList";
import { filterDiscoverParams } from "@/lib/utils";
import { Center, Pagination } from "@mantine/core";

import s from "./movies.module.css";
import { pages } from "@/config";
import { tmdb } from "@/tmdb/api";
import { SortByType } from "@/tmdb/api/types";

interface ListPageProps {
  searchParams?: Record<string, string>;
}

export async function generateMetadata() {
  return {
    title: "Discover Movies",
    description: pages.movie.discover.description
  };
}

const Discover: FC<ListPageProps> = async ({ searchParams }) => {
  const {
    results: movies,
    page: currentPage,
    total_pages
  } = await tmdb.discover.movie({
    page: "1",
    sort_by: searchParams?.sort_by as SortByType,
    ...filterDiscoverParams(searchParams)
  });

  return (
    <Container>
      <section className={s.wrapper}>
        <h1>Trending now</h1>
        <MovieList movies={movies} />
        <Center mt={30} mb={50}>
          {total_pages > 0 && (
            <Pagination total={total_pages} value={currentPage} />
          )}
        </Center>
      </section>
    </Container>
  );
};

export default Discover;

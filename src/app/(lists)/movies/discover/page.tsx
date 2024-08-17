import React, { FC } from "react";
import {
  Categories,
  Container,
  MovieList,
  PaginationComponent
} from "@/components";
import { Center } from "@mantine/core";

import { pages } from "@/config";
import { tmdb } from "@/tmdb/api";
import s from "./movies.module.css";

const genres = [
  {
    id: 28,
    name: "Action"
  },
  {
    id: 12,
    name: "Adventure"
  },
  {
    id: 16,
    name: "Animation"
  },
  {
    id: 35,
    name: "Comedy"
  },
  {
    id: 80,
    name: "Crime"
  },
  {
    id: 99,
    name: "Documentary"
  },
  {
    id: 18,
    name: "Drama"
  },
  {
    id: 10751,
    name: "Family"
  },
  {
    id: 14,
    name: "Fantasy"
  },
  {
    id: 36,
    name: "History"
  },
  {
    id: 27,
    name: "Horror"
  },
  {
    id: 10402,
    name: "Music"
  },
  {
    id: 9648,
    name: "Mystery"
  },
  {
    id: 10749,
    name: "Romance"
  },
  {
    id: 878,
    name: "Science Fiction"
  },
  {
    id: 10770,
    name: "TV Movie"
  },
  {
    id: 53,
    name: "Thriller"
  },
  {
    id: 10752,
    name: "War"
  },
  {
    id: 37,
    name: "Western"
  }
];

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
    ...searchParams,
    page: currentPage.toString()
  });

  return (
    <Container>
      <section className={s.wrapper}>
        <Categories categories={genres.slice(0, 5)} />
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

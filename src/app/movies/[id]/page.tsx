import { getMovieById } from "@/services/services";

import s from "./MovieDetailsPage.module.css";

import { BackBtn } from "@/components/BackBtn/BackBtn";
import { Flex } from "@mantine/core";
import { StarsRatingComponent } from "@/components/StarsRatingComponent/StarsRatingComponent";
import { Container } from "@/components";
import { GenreList } from "@/helpers/GenreList/GenreList";

const placeholderImg = "https://via.placeholder.com/300x450";

export const MovieDetailsPage = async ({
  params: { id }
}: {
  params: { id: string };
}) => {
  const movie = await getMovieById(id);

  if (!movie) {
    return <div>Movie not found</div>;
  }

  const { title, poster_path, vote_average, overview, genres, popularity } =
    movie;

  const genreNames = genres.map((genre) => genre.name);

  return (
    <>
      <Flex mb={40} ml={40}>
        <BackBtn text={"Movies"} path={"/movies"} />
      </Flex>
      <Container>
        <div className={s.wrapper}>
          <img
            className={s.img}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : placeholderImg
            }
            alt={title}
          />
          <Flex className={s.description}>
            <h1 className={s.title}>{title}</h1>
            <span className={s.label}>User score: {vote_average * 10} %</span>
            <span className={s.label}>Overview</span>
            <p className={s.overview}>{overview}</p>
            <span className={s.label}>Genres</span>
            <Flex className={s.genres}>
              <GenreList genres={genreNames} />
            </Flex>
            <StarsRatingComponent reating={popularity / 1000} />
          </Flex>
        </div>
      </Container>
    </>
  );
};

export default MovieDetailsPage;

import { Movie, getMovieById } from "@/services/services";
import { Params } from "next/dist/shared/lib/router/utils/route-matcher";

import s from "./MovieDetailsPage.module.css";

import Link from "next/link";
import Image from "next/image";

const placeholderImg = "https://via.placeholder.com/300x450";

export const MovieDetailsPage = async ({ params: { id } }: Params) => {
  const movie = (await getMovieById(id)) as Movie;

  const { title, poster_path, vote_average, overview, genre_ids } = movie;
  const movieGenres = genre_ids.map((genre) => genre).join(", ");
  // const backLinkHref = location.state?.from ?? "/";

  return (
    <>
      <Link className={s.path} href="/">
        Go Back
      </Link>
      <>
        <div className={s.wrapper}>
          <Image
            className={s.img}
            src={
              poster_path
                ? `https://image.tmdb.org/t/p/w300${poster_path}`
                : placeholderImg
            }
            alt={title}
          />
          <div className={s.description}>
            <h1 className={s.title}>{title}</h1>
            <span className={s.label}>User score: {vote_average * 10} %</span>
            <span className={s.label}>Overview</span>
            <p className={s.overview}>{overview}</p>
            <span className={s.label}>Genres</span>
            <p>{movieGenres}</p>
          </div>
        </div>
        <ul>
          <button className={s.button}>
            <Link href={`/movies/${id}/cast`}>Cast</Link>
          </button>
          <button className={s.button}>
            <Link href="/reviews">Reviews</Link>
          </button>
        </ul>
      </>
    </>
  );
};
export default MovieDetailsPage;

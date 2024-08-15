import { notFound } from "next/navigation";
import { tmdb } from "@/tmdb/api";
import { WithVideos } from "@/tmdb/api/types";
import Link from "next/link";
import ImageContainer from "@/components/ImageContainer/ImageContainer";
import Image from "next/image";
import { tmdbImage } from "@/tmdb/utils";

import "../../../globals.css";
import { Container } from "@/components";

interface DetailLayoutProps {
  params: {
    id: string;
  };
  children: React.ReactNode;
}

export async function generateMetadata({ params }: DetailLayoutProps) {
  const { title } = await tmdb.movie.detail({
    id: params.id
  });

  return {
    title
  };
}

export default async function DetailLayout({
  params,
  children
}: DetailLayoutProps) {
  const {
    id,
    title,
    overview,
    genres,
    vote_average,
    vote_count,
    backdrop_path,
    poster_path,
    release_date,
    tagline,
    videos
  } = await tmdb.movie.detail<WithVideos>({
    id: params.id,
    append: "videos"
  });

  if (!id) return notFound();

  const src = backdrop_path ? tmdbImage.backdrop(backdrop_path) : "";

  return (
    <Container>
      <ImageContainer>
        <Image src={src} width={1200} height={650} alt="Backdrop" />
      </ImageContainer>
      <div>{children}</div>
      <div className="max-w-screen scrollbar-hidden -mx-8 overflow-x-scroll px-8 lg:m-0 lg:p-0">
        <div>
          <Link href={`/movie/${id}`}>Overview</Link>
          <Link href={`/movie/${id}/credits`}>Credits</Link>
          <Link href={`/movie/${id}/watch`}>Watch</Link>
          <Link href={`/movie/${id}/reviews`}>Reviews</Link>
          <Link href={`/movie/${id}/images`}>Images</Link>
          <Link href={`/movie/${id}/videos`}>Videos</Link>
          <Link href={`/movie/${id}/recommendations`}>Recommendations</Link>
          <Link href={`/movie/${id}/similar`}>Similar</Link>
        </div>
      </div>
    </Container>
  );
}

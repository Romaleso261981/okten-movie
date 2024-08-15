import { notFound } from "next/navigation";
import { tmdb } from "@/tmdb/api";
import { WithVideos } from "@/tmdb/api/types";
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
  const { id, backdrop_path } = await tmdb.movie.detail<WithVideos>({
    id: params.id,
    append: "videos"
  });

  if (!id) return notFound();

  const src = backdrop_path ? tmdbImage.backdrop(backdrop_path) : "";

  return (
    <Container>
      <ImageContainer>
        <Image src={src} width={1400} height={650} alt="Backdrop" />
      </ImageContainer>
      <div>{children}</div>
    </Container>
  );
}

import ImageContainer from "@/components/ImageContainer/ImageContainer";
import { siteConfig } from "@/config";
import { tmdb } from "@/tmdb/api";
import { Button, Flex, Image, Text, Title } from "@mantine/core";
import { Metadata } from "next";

import s from "./detail.module.css";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  description: siteConfig.description,
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png"
  }
};

type DetailProps = {
  params: {
    id: string;
  };
};

export default async function Detail({ params }: DetailProps) {
  const {
    status,
    release_date,
    runtime,
    budget,
    revenue,
    spoken_languages,
    production_companies,
    belongs_to_collection,
    original_title,
    backdrop_path,
    poster_path
  } = await tmdb.movie.detail({
    id: params.id
  });

  return (
    <>
      <Flex className={s.wrapper}>
        <Flex className={s.descriptionWrapper}>
          <Flex className={s.posterWrapper}>
            <Image
              src={`https://image.tmdb.org/t/p/original/${poster_path}`}
              width={300}
              height={450}
            />
          </Flex>
          <Flex className={s.description}>
            <Title>{original_title}</Title>
            <Text>{`Status: ${status}`}</Text>
            <Text>{`Release_date: ${release_date}`}</Text>
            <Text>{`Runtime: ${runtime}`}</Text>
            <Text>{`Budget: ${budget}`}</Text>
            <Text>{`Revenue: ${revenue}`}</Text>
            <Button>Video</Button>
          </Flex>
          <Flex></Flex>
        </Flex>
      </Flex>
    </>
  );
}

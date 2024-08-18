"use client";

import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, { FC } from "react";

import styles from "./LinkComponent.module.css";

type LinkComponentProps = {
  category: Category;
};

type Category = {
  id: number;
  name: string;
};

export const LinkComponent: FC<LinkComponentProps> = ({ category }) => {
  const searchParams = useSearchParams();

  const handleCategory = (category: string) => {
    const params = new URLSearchParams(searchParams);
    params.set("with_genres", category);
    return `/movies/discover?${params.toString()}`;
  };
  return (
    <Link
      href={handleCategory(category.id.toString())}
      key={category.id}
      className={styles.category}
    >
      <div className={styles.name}>{category.name}</div>
    </Link>
  );
};

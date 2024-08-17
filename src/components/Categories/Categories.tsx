import React, { FC } from "react";
import Link from "next/link";

import styles from "./Categories.module.css";

type Category = {
  id: number;
  name: string;
};

type Categorys = {
  categories: Category[];
};

export const Categories: FC<Categorys> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <Link
          key={category.id}
          className={styles.category}
          href={`/${category.id}`}
        >
          <div className={styles.name}>{category.name}</div>
        </Link>
      ))}
    </div>
  );
};

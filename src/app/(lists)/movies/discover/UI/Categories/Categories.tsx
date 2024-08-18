import React, { FC } from "react";
import styles from "./Categories.module.css";
import { LinkComponent } from "./UI/LinkComponent/LinkComponent";

type Category = {
  id: number;
  name: string;
};

type CategoriesProps = {
  categories: Category[];
};

export const Categories: FC<CategoriesProps> = ({ categories }) => {
  return (
    <div className={styles.categories}>
      {categories.map((category) => (
        <LinkComponent category={category} key={category.id} />
      ))}
    </div>
  );
};

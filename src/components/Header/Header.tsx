"use client";

import React, { Suspense, useEffect, useState } from "react";

import s from "./Header.module.css";
import { ColorSwitch } from "../ThemeSwitcher/ThemeSwitcher";
import { useDisclosure } from "@mantine/hooks";
import { Burger, Flex, Group, Title } from "@mantine/core";
import Search from "../Search/Search";
import { UserButton } from "..";

const links = [
  { id: 1, link: "/movies/discover", label: "Movies" },
  { id: 2, link: "/", label: "Home" }
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const items = links.map(link =>
    <li key={link.id} className={s.itemItem}>
      <a href={link.link} className={s.itemLink}>
        {link.label}
      </a>
    </li>
  );

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <header className={s.header}>
      <div className={s.inner}>
        <Group>
          <Burger opened={opened} onClick={toggle} size="sm" hiddenFrom="sm" />
          <Title>TMdb Movie</Title>
        </Group>
        <nav className={s.navigation}>
          {items}
        </nav>
        <Flex gap={40}>
          <Search />
          {mounted === true ? <ColorSwitch /> : null}
          <UserButton />
        </Flex>
      </div>
    </header>
  );
};

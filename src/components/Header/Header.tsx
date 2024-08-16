"use client";

import React, { useEffect, useState } from "react";

import s from "./Header.module.css";
import { ColorSwitch } from "../ThemeSwitcher/ThemeSwitcher";
import { useDisclosure } from "@mantine/hooks";
import { Autocomplete, Burger, Flex, Group, Title, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const links = [
  { id: 1, link: "/movies/discover", label: "Movies" },
  { id: 2, link: "/", label: "Home" }
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const items = links.map((link) => (
    <li key={link.id} className={s.itemItem}>
      <a href={link.link} className={s.itemLink}>
        {link.label}
      </a>
    </li>
  ));

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
        <nav className={s.navigation}>{items}</nav>
        <Flex gap={40}>
          <Autocomplete
            className={s.search}
            placeholder="Search"
            leftSection={
              <IconSearch
                style={{ width: rem(16), height: rem(16) }}
                stroke={1.5}
              />
            }
            visibleFrom="xs"
          />
          {mounted === true ? <ColorSwitch /> : null}
        </Flex>
      </div>
    </header>
  );
};

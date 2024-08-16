"use client";

import React, { useEffect, useState } from "react";

import s from "./Header.module.css";
import { ColorSwitch } from "../ThemeSwitcher/ThemeSwitcher";
import { useDisclosure } from "@mantine/hooks";
import { Autocomplete, Burger, Group, Title, rem } from "@mantine/core";
import { IconSearch } from "@tabler/icons-react";

const links = [
  { link: "/movies/discover", label: "Movies" },
  { link: "/", label: "Home" },
  { link: "/", label: "About" }
];

export const Header = () => {
  const [opened, { toggle }] = useDisclosure(false);
  const [mounted, setMounted] = useState<boolean>(false);

  const items = links.map((link) => (
    <a key={link.label} href={link.link} className={s.itemLink}>
      {link.label}
    </a>
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
        <nav className={s.navigation}>
          <Group>
            <Group ml={50} gap={5} className={s.links} visibleFrom="sm">
              {items}
            </Group>
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
          </Group>
          {mounted === true ? <ColorSwitch /> : null}
        </nav>
      </div>
    </header>
  );
};

"use client";

import React from "react";
import ThemeSwitcher from "../ThemeSwitcher/ThemeSwitcher";

import s from "./Header.module.css";

export const Header = () => {
  return (
    <header className={s.wrapper}>
      <div className={s.logo}>Header</div>
      <nav className={s.navigation}>
        <ul>
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/about">About</a>
          </li>
        </ul>
        <ThemeSwitcher />
      </nav>
    </header>
  );
};
"use client";

import { useState, ChangeEvent, FormEvent } from "react";

import s from "./Search.module.css";

interface SearchBarProps {
  onSearch: (query: string) => void;
}

export const SearchBar: React.FC<SearchBarProps> = ({ onSearch }) => {
  const [value, setValue] = useState<string>("");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const query = value.trim();
    if (query) {
      onSearch(query);
      setValue("");
    }
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className={s.form}>
        <input
          type="text"
          value={value}
          onChange={handleChange}
          className={s.input}
        />
        <button type="submit" className={s.button}>
          Search
        </button>
      </form>
    </>
  );
};

export default SearchBar;

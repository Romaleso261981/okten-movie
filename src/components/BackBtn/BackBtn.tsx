"use client";

import { useRouter } from "next/navigation";
import styles from "./BackBtn.module.css";
import { Button, useMantineColorScheme } from "@mantine/core";

export function BackBtn({ text, path }: { text: string; path: string }) {
  const router = useRouter();
  const { colorScheme } = useMantineColorScheme();

  console.log(colorScheme);

  return (
    <Button
      style={{
        backgroundColor: colorScheme === "light" ? "black" : "white",
        color: colorScheme === "light" ? "white" : "black"
      }}
      className={styles.backBtn}
      onClick={() => router.replace(path)}
    >
      {text}
    </Button>
  );
}

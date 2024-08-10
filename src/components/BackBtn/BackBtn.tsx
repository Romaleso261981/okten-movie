"use client";

import { useRouter } from "next/navigation";

import styles from "./BackBtn.module.css";

export function BackBtn() {
  const router = useRouter();

  return (
    <button className={styles.backBtn} onClick={() => router.back()}>
      Go back
    </button>
  );
}

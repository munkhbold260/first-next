import React from "react";
import styles from "@/styles/components/TextField.module.css";

export function TextField() {
  return (
    <label htmlFor="">
      <p className={styles.test}>Text Test</p>
      <input type="text" className={styles.inputField} />
    </label>
  );
}

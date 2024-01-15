import { Button, TextField, Card } from "@/components";
import Link from "next/link";
import styles from "@/styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}> Hello</h1>
      <Link href={"/abc"}>Move to test.js</Link>
      <Button />
      <TextField />
      <Card />
    </div>
  );
}
